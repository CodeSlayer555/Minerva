import React, { useEffect, useState } from "react";
import NavBar from "components/NavBar/navBar";
import FooterBar from "components/FooterBar/footerBar";
import { supabaseClient } from "config/supabase-client";
import { useNavigate, Link } from "react-router-dom";
import ReportStyles from "./viewReportsPage.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import {
  ChatDots,
  CheckCircle,
  ExclamationCircle,
  PersonCheck,
  PersonX,
} from "react-bootstrap-icons";

const ViewReportsPage = ({ setToastOptions }) => {
  // Minimum permission level required to be considered an admin.
  const ADMIN_THRESHOLD = 1;
  const [modalState, setModalState] = useState({ show: false });

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <ReportsBody
        ADMIN_THRESHOLD={ADMIN_THRESHOLD}
        setToastOptions={setToastOptions}
        setModalState={setModalState}
      />
      <ViewReportsModal
        modalState={modalState}
        onHide={() => setModalState({ show: false })}
      />
      <FooterBar />
    </div>
  );
};

export default ViewReportsPage;

const ReportsBody = ({ ADMIN_THRESHOLD, setToastOptions, setModalState }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [getResolved, setGetResolved] = useState(false);
  const uid = supabaseClient.auth.user().id;

  // Check for authorisation, then get reports if authorised.
  useEffect(() => {
    (async () => {
      try {
        // Check permissions
        let { data, error } = await supabaseClient
          .from("profiles")
          .select("permissions")
          .eq("id", uid)
          .single();
        if (error) throw error;

        // Get relevant report data
        if (data.permissions >= ADMIN_THRESHOLD) {
          let { data, error } = await supabaseClient
            .from("reports")
            .select(
              `id, description, status, reporter(id, username, avatar_url), reported(id, username, avatar_url), assigned(id, username)`
            )
            .order("id", { ascending: true });
          if (error) throw error;

          // Check if the two users have an existing conversation
          const newReports = await Promise.all(
            data.map(async (report) => {
              let { data: hasConvo, error: hasConvoError } =
                await supabaseClient.rpc("has_convo", {
                  id1: report.reporter.id,
                  id2: report.reported.id,
                });
              if (hasConvoError) throw hasConvoError;
              return { ...report, hasConvo };
            })
          );

          setReports(newReports);

          // Set up listener for Reports table
          const fetchExtra = async (reportId) => {
            let { data, error } = await supabaseClient
              .from("reports")
              .select(
                `id, description, status, reporter(id, username, avatar_url), reported(id, username, avatar_url), assigned(id, username)`
              )
              .eq("id", reportId)
              .single();
            if (error) throw error;
            return data;
          };
          const reportsSub = supabaseClient
            .from("reports")
            .on("INSERT", async (payload) => {
              const reportId = payload.new.id;
              const inserted = await fetchExtra(reportId);
              setReports((old) =>
                [...old, inserted].sort((a, b) => a.id - b.id)
              );
            })
            .on("DELETE", (payload) => {
              const reportId = payload.old.id;
              setReports((old) =>
                old
                  .filter((report) => report.id !== reportId)
                  .sort((a, b) => a.id - b.id)
              );
            })
            .on("UPDATE", async (payload) => {
              const reportId = payload.new.id;
              const updated = await fetchExtra(reportId);
              setReports((old) =>
                [
                  ...old.filter((report) => report.id !== reportId),
                  updated,
                ].sort((a, b) => a.id - b.id)
              );
            })
            .subscribe();

          return () => supabaseClient.removeSubscription(reportsSub);
        } else {
          // User not authorised, redirect to landing page
          navigate("/");
          setToastOptions({
            show: true,
            closeButton: false,
            position: "bottom-end",
            containerClasses: "p-4",
            variant: "danger",
            autohide: true,
            delay: 3000,
            headerContent: "Unauthorised User",
            bodyContent: "You are not authorised to access this page.",
          });
        }
      } catch (error) {
        // alert(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [ADMIN_THRESHOLD, setToastOptions, navigate, uid]);

  const updateAssignment = async (reportId, assignedId) => {
    try {
      let { error } = await supabaseClient
        .from("reports")
        .update({
          assigned_id: assignedId,
          status: assignedId ? "assigned" : "unassigned",
        })
        .eq("id", reportId);
      if (error) throw error;
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAssignClick = (status, assigned, id) => {
    const index = status === "unassigned" ? 0 : 1;
    const cancelButton = (
      <Button
        variant="secondary"
        onClick={() => setModalState({ show: false })}
      >
        Cancel
      </Button>
    );
    const modalTitle = ["Confirm Assignment", "Confirm Dismissal"];
    const modalContent = [
      `Assign yourself to report #${id}?`,
      `Remove assignment from report #${id}?`,
    ];

    const modalTemp = {
      show: true,
      titleContent: modalTitle[index],
      bodyContent: modalContent[index],
    };

    setModalState({
      ...modalTemp,
      footerContent: (
        <>
          <Button
            onClick={async () => {
              setModalState({
                ...modalTemp,
                footerContent: <Spinner animation="border" />,
              });
              await updateAssignment(id, [uid, null][index]);
              setModalState({ show: false });
            }}
          >
            Confirm
          </Button>
          {cancelButton}
        </>
      ),
    });
  };

  // Generate action buttons tied to the reported user's id.
  const generateActions = ({
    id,
    status,
    assigned,
    reporter,
    reported,
    hasConvo,
  }) => {
    return (
      <div className={`p-0 m-0 d-flex justify-evenly`}>
        <div className={ReportStyles.tooltip}>
          <Button
            disabled={!(status === "unassigned" || assigned?.id === uid)}
            className="m-1 my-lg-0"
            onClick={() => handleAssignClick(status, assigned, id)}
          >
            {status === "assigned" && assigned?.id === uid ? (
              <PersonX />
            ) : (
              <PersonCheck />
            )}
          </Button>
          {(status === "unassigned" || assigned?.id === uid) && (
            <span className={ReportStyles.tooltiptext}>
              {status === "unassigned"
                ? "Assign Yourself"
                : "Remove Assignment"}
            </span>
          )}
        </div>

        <div className={ReportStyles.tooltip}>
          <Button
            variant="light"
            className="m-1 my-lg-0"
            onClick={() =>
              navigate("/chatlogs", {
                state: {
                  recepient: reporter,
                  sender: reported,
                },
              })
            }
            disabled={!hasConvo}
          >
            <ChatDots />
          </Button>
          <span className={ReportStyles.tooltiptext}>
            {hasConvo ? "View Chat Log" : "No Started Chats"}
          </span>
        </div>

        <div className={ReportStyles.tooltip}>
          <Button variant="danger" className="m-1 my-lg-0">
            <ExclamationCircle />
          </Button>
          <span className={ReportStyles.tooltiptext}>
            Ban {reported.username}
          </span>
        </div>

        <div className={ReportStyles.tooltip}>
          <Button variant="success" className="m-1 my-lg-0">
            <CheckCircle />
          </Button>
          <span className={ReportStyles.tooltiptext}>Mark As Resolved</span>
        </div>
      </div>
    );
  };

  const createTr = (data) => {
    const { id, description, reporter, reported, assigned } = data;
    return (
      <tr key={`report-${id}`}>
        <td>{id}</td>
        <td>{description}</td>
        <td>
          <Link to="/profile" state={{ creator_id: reporter.id }}>
            {reporter.username}
          </Link>
        </td>
        <td>
          <Link to="/profile" state={{ creator_id: reported.id }}>
            {reported.username}
          </Link>
        </td>
        <td
          className={`${assigned || "text-danger"} ${
            assigned?.id === uid && "fw-bold"
          }`}
        >
          {assigned ? assigned.username : "None"}
        </td>
        <td>{generateActions(data)}</td>
      </tr>
    );
  };

  return (
    <Container
      className={loading && "d-flex justify-center align-center my-auto"}
    >
      {loading ? (
        <Spinner size="xl" animation="grow" />
      ) : (
        <>
          <Pagination>
            <Pagination.Item
              active={!getResolved}
              onClick={() => setGetResolved(false)}
            >
              Unresolved
            </Pagination.Item>
            <Pagination.Item
              active={getResolved}
              onClick={() => setGetResolved(true)}
            >
              Resolved
            </Pagination.Item>
          </Pagination>
          <Row>
            <Table
              bordered
              hover
              responsive
              className="m-auto"
              style={{ width: "95%" }}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Description</th>
                  <th>Reporter</th>
                  <th>Reported User</th>
                  <th>Assigned To</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports
                  .filter(
                    ({ status }) => (status === "resolved") === getResolved
                  )
                  .map(createTr)}
              </tbody>
            </Table>
          </Row>
        </>
      )}
    </Container>
  );
};

const ViewReportsModal = ({ modalState, onHide }) => {
  const { show, titleContent, bodyContent, footerContent } = modalState;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{titleContent}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{bodyContent}</Modal.Body>

      <Modal.Footer>{footerContent}</Modal.Footer>
    </Modal>
  );
};
