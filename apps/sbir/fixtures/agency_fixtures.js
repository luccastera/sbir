// ==========================================================================
// Project:   Sbir.Agency Fixtures
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

sc_require('models/agency_model');

Sbir.Agency.FIXTURES = [

  {
    guid: 1,
    name: 'SBA',
    longName: 'Small Business Administration',
    solicitations: [1]
  },
  {
    guid: 2,
    name: 'NASA',
    longName: '',
    solicitations: [1]
  },
  {
    guid: 3,
    name: 'DOD',
    longName: 'Department Of Defense',
    solicitations: [2]
  },
  {
    guid: 4,
    name: 'DOA',
    longName: 'Department Of Agriculture',
    solicitations: [1,3]
  }

];
