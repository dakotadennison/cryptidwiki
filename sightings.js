// ═══════════════════════════════════════════════════
// CRYPTIDWIKI — FIELD REPORTS DATABASE
// ═══════════════════════════════════════════════════
// To add a new sighting, copy the template below and
// paste it before the last ]; — then save and push to GitHub.
//
// TEMPLATE:
// {
//   id: 7,                          ← next number in sequence
//   status: "pending",              // "pending" / "verified" / "unverified"
//   creature: "CREATURE NAME",
//   date: "MMM DD, YYYY",
//   location: "City, State, Country",
//   context: "What the witness saw and experienced.",
//   reporter: "their_username",
//   image: ""   // ← leave blank for no image, or "images/filename.jpg" for a real photo
// },
// ═══════════════════════════════════════════════════

var sightings = [
  {
    id: 1,
    status: "pending",
    creature: "MOTHMAN",
    date: "MAY 12, 2026",
    location: "Chicago, Illinois, USA",
    context: "Witnessed a large winged figure hovering near the top of the Willis Tower at approximately 11:45pm. It did not move for several minutes before ascending vertically and disappearing. Three other people on the street saw it. No one had a good enough camera. The eyes were red and visible from at least 200 feet below.",
    reporter: "anonymous_witness_4471",
    image: "cryptidwiki/images/mothman-test.png"
  },
  {
    id: 2,
    status: "verified",
    creature: "SKINWALKER",
    date: "APR 28, 2026",
    location: "Blanding, Utah, USA",
    context: "Something ran alongside our truck on Route 191 for about half a mile. It was keeping pace at 60mph on two legs. When my headlights caught it directly it dropped to all fours and veered into the desert. My wife and I both saw it. We did not stop. The shape of the head was wrong for any animal I know.",
    reporter: "desert_driver_utah",
    image: ""
  },
  {
    id: 3,
    status: "pending",
    creature: "FLATWOODS MONSTER",
    date: "MAY 1, 2026",
    location: "Braxton County, West Virginia, USA",
    context: "Bright object came down over the hill behind my property around 9pm. Went to investigate and smelled something like sulfur and burning metal. Saw a figure in the treeline — tall, glowing, hovering slightly off the ground. Did not approach. Eyes were burning for two days afterward. This is not my first report from this area.",
    reporter: "wv_skywatcher",
    image: ""
  },
  {
    id: 4,
    status: "unverified",
    creature: "KUCHISAKE-ONNA",
    date: "APR 15, 2026",
    location: "Osaka, Japan",
    context: "Walking home at 1am near Namba. A woman in a surgical mask stepped out of an alley and asked me something in Japanese I did not understand. My friend translated later — she had asked if she was beautiful. We ran. She was standing at the next intersection when we arrived there. We took a taxi the rest of the way.",
    reporter: "foreign_exchange_2026",
    image: ""
  },
  {
    id: 5,
    status: "verified",
    creature: "WENDIGO",
    date: "MAR 3, 2026",
    location: "Kenora, Ontario, Canada",
    context: "Found tracks in the snow near the lake that started as wolf prints and became something else entirely — bipedal, each print nearly three feet across. The tracks went for about a mile then stopped at the ice edge. My dog refused to leave the truck the entire time. Temperature dropped about 15 degrees as we followed the trail.",
    reporter: "northern_ontario_hunter",
    image: ""
  },
  {
    id: 6,
    status: "pending",
    creature: "SHADOW PEOPLE",
    date: "MAY 8, 2026",
    location: "Birmingham, Alabama, USA",
    context: "Third time this month I have woken up at 3am to see a figure in a wide brimmed hat standing at the foot of my bed. It does not move. It does not speak. It watches. When I turn on the light it is gone. My roommate saw it last Tuesday without me telling her anything about my own experiences. I moved my bed to the center of the room. It still comes.",
    reporter: "sleepless_in_birmingham",
    image: ""
  }
];
