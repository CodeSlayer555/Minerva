export const CONSTANTS = {
  NUM_LISTINGS: 14,
  NUM_TUTORS: 5,
  NUM_TUTEES: 8,
  NUM_TUTORS_MATH: 2,
};

const mockListings = [
  {
    listing_id: "aa6ff097-c1b8-452d-95e0-6b47c7315f4c",
    created_at: "2022-06-23T12:10:02.455676+00:00",
    creator_id: "720e9e66-5248-4c80-b299-2a667b5ed5d7",
    fields: [
      { value: "cs2030s", category: "subject" },
      { value: "NUS, NTU, MIT", category: "qualifications" },
      { value: "every day ", category: "timing" },
      { value: "no chill", category: "commitment" },
      { value: "must be a A student", category: "others" },
    ],
    seeking_for: "tutor",
    level: "grad",
    rates: 69,
    image_urls: [
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/720e9e66-5248-4c80-b299-2a667b5ed5d7/0.9495397306425475.png",
    ],
    avg_rating: 4.333333333333333,
    num_reviews: 3,
    reviewee_id: "720e9e66-5248-4c80-b299-2a667b5ed5d7",
    avatar_url: "0.7523799032716116.jpg",
    username: "eudora",
    user_id: "720e9e66-5248-4c80-b299-2a667b5ed5d7",
  },
  {
    listing_id: "8d198fa6-6b64-47ba-99b3-feb619504906",
    created_at: "2022-07-03T17:35:03.391829+00:00",
    creator_id: "3708c1bc-5596-4e46-a042-266b9338a2ab",
    fields: [{ value: "maths", category: "subject" }],
    seeking_for: "tutor",
    level: "tertiary",
    rates: 23,
    image_urls: [],
    avg_rating: null,
    num_reviews: null,
    reviewee_id: null,
    avatar_url: "",
    username: "Felicia",
    user_id: "3708c1bc-5596-4e46-a042-266b9338a2ab",
  },
  {
    listing_id: "639010a9-9058-4ff4-b4e1-8a92fc50eff9",
    created_at: "2022-07-04T09:19:16.046559+00:00",
    creator_id: "c4bb95f5-b9d5-4f0f-824c-f7c4aa0a0436",
    fields: [
      { value: "How many words can I fit insi-", category: "subject" },
      { value: "GEA1000", category: "subject" },
      { value: "Can guess answers in O(n) time", category: "qualifications" },
      { value: "Yesterday, you said Tomorrow.", category: "timing" },
    ],
    seeking_for: "tutor",
    level: "undergrad",
    rates: 0,
    image_urls: [
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/c4bb95f5-b9d5-4f0f-824c-f7c4aa0a0436/0.602934330382273.png",
    ],
    avg_rating: 5,
    num_reviews: 1,
    reviewee_id: "c4bb95f5-b9d5-4f0f-824c-f7c4aa0a0436",
    avatar_url: "",
    username: "dingus_dongus",
    user_id: "c4bb95f5-b9d5-4f0f-824c-f7c4aa0a0436",
  },
  {
    listing_id: "03e70e21-4bc0-44cf-9633-167fffa891af",
    created_at: "2022-07-03T07:07:57.934567+00:00",
    creator_id: "756e6f59-e4fa-4e6b-81d4-0336774ee71c",
    fields: [{ value: "nus science kid", category: "qualifications" }],
    seeking_for: "tutee",
    level: "secondary",
    rates: 999,
    image_urls: [],
    avg_rating: null,
    num_reviews: null,
    reviewee_id: null,
    avatar_url: "",
    username: "test",
    user_id: "756e6f59-e4fa-4e6b-81d4-0336774ee71c",
  },
  {
    listing_id: "a3c17974-cfc1-4898-a374-395621bac517",
    created_at: "2022-07-05T06:56:46.891191+00:00",
    creator_id: "2b9f3b95-59b1-4b6f-a8bc-8bb9a68a5761",
    fields: [
      { value: "Amaths", category: "subject" },
      { value: "A+", category: "qualifications" },
      { value: "everyday everynight latata", category: "commitment" },
      { value: "being a singer is my dream uwu", category: "others" },
    ],
    seeking_for: "tutee",
    level: "secondary",
    rates: 50,
    image_urls: [],
    avg_rating: null,
    num_reviews: null,
    reviewee_id: null,
    avatar_url: "0.2253511978729419.jpg",
    username: "not_catfish",
    user_id: "2b9f3b95-59b1-4b6f-a8bc-8bb9a68a5761",
  },
  {
    listing_id: "cebe83e7-5464-435b-a185-b96df85c3d90",
    created_at: "2022-06-16T17:21:51.143484+00:00",
    creator_id: "a9fbf7d6-e8fb-4985-956c-f4e9dfb5cd0e",
    fields: [
      { value: "14 Jun - 28 Jul", category: "commitment" },
      { value: "8pt Raw L1R5", category: "qualifications" },
      { value: "West Side Only", category: "others" },
      { value: "2pm-5pm", category: "timing" },
      { value: "A Math", category: "subject" },
      { value: "E Math", category: "subject" },
      { value: "Social Studies", category: "subject" },
      { value: "NO DOGS PLS", category: "others" },
    ],
    seeking_for: "tutee",
    level: "secondary",
    rates: 20,
    image_urls: [
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/a9fbf7d6-e8fb-4985-956c-f4e9dfb5cd0e/0.46851313077435464.png",
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/a9fbf7d6-e8fb-4985-956c-f4e9dfb5cd0e/0.24936028171841285.jpg",
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/a9fbf7d6-e8fb-4985-956c-f4e9dfb5cd0e/0.5980801364594941.png",
    ],
    avg_rating: null,
    num_reviews: null,
    reviewee_id: null,
    avatar_url: "0.2271607785268488.jpg",
    username: "test_user",
    user_id: "a9fbf7d6-e8fb-4985-956c-f4e9dfb5cd0e",
  },
  {
    listing_id: "3c7e4e85-6411-4f78-8daa-1f8c9dbd6111",
    created_at: "2022-06-30T17:14:04.79238+00:00",
    creator_id: "c5ca592f-6bf5-4bc8-9b9e-4c5c1fd1765b",
    fields: [{ value: "PSLE", category: "qualifications" }],
    seeking_for: "tutor",
    level: "others",
    rates: 999,
    image_urls: [
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/c5ca592f-6bf5-4bc8-9b9e-4c5c1fd1765b/0.05503527727155433.jpg",
    ],
    avg_rating: null,
    num_reviews: null,
    reviewee_id: null,
    avatar_url: "0.8820006429855459.jpg",
    username: "Minerva",
    user_id: "c5ca592f-6bf5-4bc8-9b9e-4c5c1fd1765b",
  },
  {
    listing_id: "e766effd-c0bb-4bd5-b64e-9b60485a45b7",
    created_at: "2022-06-30T12:21:28.780717+00:00",
    creator_id: "721f0197-daac-4bc6-b4e4-dfa1e50012ce",
    fields: [
      { value: "CS2040", category: "subject" },
      { value: "A+", category: "qualifications" },
    ],
    seeking_for: "tutee",
    level: "primary",
    rates: 20,
    image_urls: [
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/721f0197-daac-4bc6-b4e4-dfa1e50012ce/0.47276999377104656.jpeg",
    ],
    avg_rating: null,
    num_reviews: null,
    reviewee_id: null,
    avatar_url: "0.42723954323606583.jpeg",
    username: "roy",
    user_id: "721f0197-daac-4bc6-b4e4-dfa1e50012ce",
  },
  {
    listing_id: "da9ac115-ce30-44f6-b50a-b3a239045bc0",
    created_at: "2022-06-22T11:48:55.667207+00:00",
    creator_id: "78507a34-6c92-46d1-beb9-cc2668c36504",
    fields: [
      { value: "math", category: "subject" },
      { value: "graduate student", category: "qualifications" },
    ],
    seeking_for: "tutee",
    level: "tertiary",
    rates: 99,
    image_urls: [
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/78507a34-6c92-46d1-beb9-cc2668c36504/0.44136994738078683.jpeg",
    ],
    avg_rating: null,
    num_reviews: null,
    reviewee_id: null,
    avatar_url: "",
    username: "darryl.leong",
    user_id: "78507a34-6c92-46d1-beb9-cc2668c36504",
  },
  {
    listing_id: "fd903b06-4923-4135-8b15-be331d88b4b2",
    created_at: "2022-07-05T06:45:57.583019+00:00",
    creator_id: "bbba5e7f-61da-4bd3-8252-38abca8f2089",
    fields: [
      { value: "DJ", category: "subject" },
      { value: "PhD", category: "qualifications" },
      { value: "full-time", category: "commitment" },
      { value: "weekends", category: "timing" },
    ],
    seeking_for: "tutee",
    level: "grad",
    rates: 69,
    image_urls: [
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/bbba5e7f-61da-4bd3-8252-38abca8f2089/0.3199948529464176.jpg",
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/bbba5e7f-61da-4bd3-8252-38abca8f2089/0.000834180295985254.jpg",
    ],
    avg_rating: 4,
    num_reviews: 1,
    reviewee_id: "bbba5e7f-61da-4bd3-8252-38abca8f2089",
    avatar_url: "0.8854372837716729.jpg",
    username: "SHAUN",
    user_id: "bbba5e7f-61da-4bd3-8252-38abca8f2089",
  },
  {
    listing_id: "c33e00d9-39b2-44e1-9889-25ffc61e7fbf",
    created_at: "2022-07-04T09:06:28.024568+00:00",
    creator_id: "e5991f4e-fdfa-4c2a-aa83-7dfe1aa3b646",
    fields: [
      { value: "CS2040S", category: "subject" },
      { value: "Reading Week", category: "commitment" },
      { value: "Must be an Aquarius", category: "others" },
    ],
    seeking_for: "tutee",
    level: "undergrad",
    rates: 50,
    image_urls: [
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/e5991f4e-fdfa-4c2a-aa83-7dfe1aa3b646/0.33085409441840563.png",
    ],
    avg_rating: 1,
    num_reviews: 1,
    reviewee_id: "e5991f4e-fdfa-4c2a-aa83-7dfe1aa3b646",
    avatar_url: "",
    username: "jingus_jangus",
    user_id: "e5991f4e-fdfa-4c2a-aa83-7dfe1aa3b646",
  },
  {
    listing_id: "f73fd966-65c6-4b1c-90ba-ace9100bfe4f",
    created_at: "2022-05-28T12:22:59+00:00",
    creator_id: "ba5d7430-f2b3-4ba0-8816-8bfc209f0202",
    fields: [{ value: "a maths", category: "subject" }],
    seeking_for: "tutor",
    level: "secondary",
    rates: 12,
    image_urls: [
      "https://uzxaovzbbwexnjnhecue.supabase.co/storage/v1/object/public/listing-images/ba5d7430-f2b3-4ba0-8816-8bfc209f0202/0.06452468682683565.png",
    ],
    avg_rating: null,
    num_reviews: null,
    reviewee_id: null,
    avatar_url: "0.8468555377887714.png",
    username: "test-user",
    user_id: "ba5d7430-f2b3-4ba0-8816-8bfc209f0202",
  },
  {
    listing_id: "fb607e29-4833-4a91-bd94-7bc32c1c6b47",
    created_at: "2022-07-15T15:28:31.133418+00:00",
    creator_id: "15eb537c-33d1-40d9-a7d7-040cccc2ea52",
    fields: [
      { value: "Chemistry", category: "subject" },
      { value: "PHD in neuroscience", category: "qualifications" },
    ],
    seeking_for: "tutee",
    level: "secondary",
    rates: 100,
    image_urls: [],
    avg_rating: null,
    num_reviews: null,
    reviewee_id: null,
    avatar_url: "",
    username: "hello",
    user_id: "15eb537c-33d1-40d9-a7d7-040cccc2ea52",
  },
  {
    listing_id: "56fefcba-a0ff-41b5-b9fc-e35a75547f0c",
    created_at: "2022-07-15T15:27:23.382977+00:00",
    creator_id: "15eb537c-33d1-40d9-a7d7-040cccc2ea52",
    fields: [{ value: "Got pHD In Chemistry", category: "qualifications" }],
    seeking_for: "tutee",
    level: "primary",
    rates: 32,
    image_urls: [],
    avg_rating: null,
    num_reviews: null,
    reviewee_id: null,
    avatar_url: "",
    username: "hello",
    user_id: "15eb537c-33d1-40d9-a7d7-040cccc2ea52",
  },
];

export default mockListings;
