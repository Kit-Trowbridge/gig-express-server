const { app, gigs } = require("./app");
const request = require("supertest");

const gigs = [
  {
    name: "Blood Orange",
    image:
      "https://media.vogue.co.uk/photos/5f7af392a67cbe91f90e282b/2:3/w_2560%2Cc_limit/shutterstock_editorial_9930677ev.jpg",
    description: "Alternative R&B",
    date: Temporal.PlainDate.from({ year: 2026, month: 7, day: 31 }).toString(),
    location: "London, UK",
    id: 1,
  },
  {
    name: "Discovery Zone",
    image:
      "https://nbhap.com/wp-content/uploads//2020/08/DZ-x-Andie-Riekstina-square-600x600.jpg",
    description: "Experimental pop",
    date: Temporal.PlainDate.from({
      year: 2026,
      month: 10,
      day: 15,
    }).toString(),
    location: "New York, USA",
    id: 2,
  },
  {
    name: "Ryan Paris",
    image:
      "https://cdn-images.dzcdn.net/images/artist/d80185b76347931bcd9a851386e54549/1900x1900-000000-80-0-0.jpg",
    description: "Italo Disco",
    date: Temporal.PlainDate.from({ year: 2027, month: 2, day: 3 }).toString(),
    location: "Rome, IT",
    id: 3,
  },
  {
    name: "Niagara",
    image:
      "https://fastly-s3.allmusic.com/artist/mn0000330945/400/K-oL6-OtSnrgT2GAYq3wWz6KsMttLlyBmmVTZ6_CLs0=.jpg",
    description: "Synth-pop",
    date: Temporal.PlainDate.from({ year: 2026, month: 6, day: 10 }).toString(),
    location: "Paris, FR",
    id: 4,
  },
];

describe("/gigs", () => {
  test("/GET, it responds with an object with gigs as the key and an array of gigs as the value", async () => {
    const response = await request(app).get("/gigs");
    expect(response.body).toEqual({ gigs });
    expect(response.status).toBe(200);
  });
});

describe("/gigs/:id", () => {
  test("/GET, it responds with the gig where the id matches the one provided in the url", async () => {
    const response = await request(app).get("/gigs/3");
    expect(response.body).toEqual({ gig: gigs[2] });
    expect(response.status).toBe(200);
  });
});

// should also test for non-existent id
describe.skip("/gigs/:id", () => {
  test("/DELETE, it responds with an object containing a message and the gigs list minus the deleted one based on id", async () => {
    const response = await request(app).delete("/gigs/2");
    expect(response.body).toEqual({
      message: "Successfully deleted Discovery Zone gig",
      gigs: [
        {
          name: "Blood Orange",
          image:
            "https://media.vogue.co.uk/photos/5f7af392a67cbe91f90e282b/2:3/w_2560%2Cc_limit/shutterstock_editorial_9930677ev.jpg",
          description: "Alternative R&B",
          date: Temporal.PlainDate.from({
            year: 2026,
            month: 7,
            day: 31,
          }).toString(),
          location: "London, UK",
          id: 1,
        },
        {
          name: "Ryan Paris",
          image:
            "https://cdn-images.dzcdn.net/images/artist/d80185b76347931bcd9a851386e54549/1900x1900-000000-80-0-0.jpg",
          description: "Italo Disco",
          date: Temporal.PlainDate.from({
            year: 2027,
            month: 2,
            day: 3,
          }).toString(),
          location: "Rome, IT",
          id: 3,
        },
        {
          name: "Niagara",
          image:
            "https://fastly-s3.allmusic.com/artist/mn0000330945/400/K-oL6-OtSnrgT2GAYq3wWz6KsMttLlyBmmVTZ6_CLs0=.jpg",
          description: "Synth-pop",
          date: Temporal.PlainDate.from({
            year: 2026,
            month: 6,
            day: 10,
          }).toString(),
          location: "Paris, FR",
          id: 4,
        },
      ],
    });
    expect(response.status).toBe(200);
  });
});

// /gigs	POST	{gig: { gig data with all the correct keys }}	{"message": "Successfully posted new gig", "gigs": [{First Gig}, {Second Gig}, {Third Gig}, {Newly posted gig}]}
describe("/gigs", () => {
  test("/POST, it responds withresponds with an object containing a message and the gigs list including the posted gig", async () => {
    const response = await request(app)
      .post("/gigs")
      .send({
        name: "Mark Knopfler",
        image: "https://cdn.mos.cms.futurecdn.net/ere6ccNj3Pf4pi99MWM2ec.jpg",
        description: "Roots Rock",
        date: Temporal.PlainDate.from({ year: 2026, month: 11, day: 30 }),
        location: "Glasgow, UK",
        id: 5,
      });
    expect(response.body).toEqual({
      message: "Successfully posted new Mark Knopfler gig",
      gigs: [
        {
          name: "Blood Orange",
          image:
            "https://media.vogue.co.uk/photos/5f7af392a67cbe91f90e282b/2:3/w_2560%2Cc_limit/shutterstock_editorial_9930677ev.jpg",
          description: "Alternative R&B",
          date: Temporal.PlainDate.from({
            year: 2026,
            month: 7,
            day: 31,
          }).toString(),
          location: "London, UK",
          id: 1,
        },
        {
          name: "Discovery Zone",
          image:
            "https://nbhap.com/wp-content/uploads//2020/08/DZ-x-Andie-Riekstina-square-600x600.jpg",
          description: "Experimental pop",
          date: Temporal.PlainDate.from({
            year: 2026,
            month: 10,
            day: 15,
          }).toString(),
          location: "New York, USA",
          id: 2,
        },
        {
          name: "Ryan Paris",
          image:
            "https://cdn-images.dzcdn.net/images/artist/d80185b76347931bcd9a851386e54549/1900x1900-000000-80-0-0.jpg",
          description: "Italo Disco",
          date: Temporal.PlainDate.from({
            year: 2027,
            month: 2,
            day: 3,
          }).toString(),
          location: "Rome, IT",
          id: 3,
        },
        {
          name: "Niagara",
          image:
            "https://fastly-s3.allmusic.com/artist/mn0000330945/400/K-oL6-OtSnrgT2GAYq3wWz6KsMttLlyBmmVTZ6_CLs0=.jpg",
          description: "Synth-pop",
          date: Temporal.PlainDate.from({
            year: 2026,
            month: 6,
            day: 10,
          }).toString(),
          location: "Paris, FR",
          id: 4,
        },
        {
          name: "Mark Knopfler",
          image: "https://cdn.mos.cms.futurecdn.net/ere6ccNj3Pf4pi99MWM2ec.jpg",
          description: "Roots Rock",
          date: Temporal.PlainDate.from({
            year: 2026,
            month: 11,
            day: 30,
          }).toString(),
          location: "Glasgow, UK",
          id: 5,
        },
      ],
    });
  });
});
