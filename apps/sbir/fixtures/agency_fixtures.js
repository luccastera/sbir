// ==========================================================================
// Project:   Sbir.Agency Fixtures
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

sc_require('models/agency_model');

Sbir.Agency.FIXTURES = [

  {
    guid: 1,
    name: 'DOD',
    longName: 'Dept. of Defense',
    solicitations: [1]
  },
  {
    guid: 2,
    name: 'HHS',
    longName: 'Dept. of Health and Human Services',
    solicitations: [1]
  },
  {
    guid: 3,
    name: 'NASA',
    longName: 'National Aeronautics and Space Administration',
    solicitations: [2]
  },
  {
    guid: 4,
    name: 'NSF',
    longName: 'National Science Foundation',
    solicitations: [1,3]
  },
  {
    guid: 5,
    name: 'DOE',
    longName: 'Dept. of Energy',
    solicitations: [1]
  },
  {
    guid: 6,
    name: 'USDA',
    longName: 'United States Dept. of Agriculture',
    solicitations: [1]
  },
  {
    guid: 7,
    name: 'EPA',
    longName: 'Environmental Protection Agency',
    solicitations: [2]
  },
  {
    guid: 8,
    name: 'DOC',
    longName: 'Dept. of Commerce',
    solicitations: [1,3]
  },
  {
    guid: 9,
    name: 'ED',
    longName: 'Dept. of Education',
    solicitations: [1]
  },
  {
    guid: 10,
    name: 'DOT',
    longName: 'Dept. of Transportation',
    solicitations: [2]
  },
  {
    guid: 11,
    name: 'DHS',
    longName: 'Dept. of Homeland Security',
    solicitations: [1,3]
  }

];
