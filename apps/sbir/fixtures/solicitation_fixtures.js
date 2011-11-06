// ==========================================================================
// Project:   Sbir.Solicitation Fixtures
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

sc_require('models/solicitation_model');

Sbir.Solicitation.FIXTURES = [

  {
    guid: 1,
    title: "High Rate High Energy Storage Devices",
    link: "http://www.sbir.gov/content/high-rate-high-energy-storage-devices",
    description: "TECHNOLOGY AREAS: Ground/Sea Vehicles, ElectronicsACQUISITION PROGRAM: PEO Ground Combat SystemsOBJECTIVE: The objective of this project is to develop new energy storage materials capable of absorbing ...",
    agency: "DOD,ARMY,NAVY,DARPA,OSD",
    status: "Open/Future",
    agencies: [1,2,4]
  },
  {
    guid: 2,
    title: "Farming technology to produce mass amount of grass-fed beef",
    agencies: [3]
  },
  {
    guid: 3,
    title: "A new paradigm for solicitating feedback from peers for government agencies",
    agencies: [4]
  }

];
