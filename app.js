const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json())

app.use(cors());

const gigs = [
  { 
    name: "Blood Orange",
    image: "https://media.vogue.co.uk/photos/5f7af392a67cbe91f90e282b/2:3/w_2560%2Cc_limit/shutterstock_editorial_9930677ev.jpg",
    description: "Alternative R&B",
    date: Temporal.PlainDate.from({year: 2026, month: 7, day: 31}),
    location: "London, UK",
    id: 1
  },
  { 
    name: "Discovery Zone",
    image: "https://nbhap.com/wp-content/uploads//2020/08/DZ-x-Andie-Riekstina-square-600x600.jpg",
    description: "Experimental pop",
    date: Temporal.PlainDate.from({year: 2026, month: 10, day: 15}),
    location: "New York, USA",
    id: 2
  },
  { 
    name: "Ryan Paris",
    image: "https://cdn-images.dzcdn.net/images/artist/d80185b76347931bcd9a851386e54549/1900x1900-000000-80-0-0.jpg",
    description: "Italo Disco",
    date: Temporal.PlainDate.from({year: 2027, month: 2, day: 3}),
    location: "Rome, IT",
    id: 3
  },
  { 
    name: "Niagara",
    image: "https://fastly-s3.allmusic.com/artist/mn0000330945/400/K-oL6-OtSnrgT2GAYq3wWz6KsMttLlyBmmVTZ6_CLs0=.jpg",
    description: "Synth-pop",
    date: Temporal.PlainDate.from({year: 2026, month: 6, day: 10}),
    location: "Paris, FR",
    id: 4
  }
] 

app.get("/gigs", (req, res) => {
  res.send({gigs})
})

module.exports = app;
