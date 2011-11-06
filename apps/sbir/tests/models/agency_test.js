// ==========================================================================
// Project:   Sbir.Agency Unit Test
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir module test ok equals same stop start */

module("Sbir.Agency");

test("an agency has a name and a longName", function() {
  var expectedName = 'SBA',
         expectedLongName = 'Small Business Administration';
  var agency = Sbir.store.find(Sbir.Agency, 1)
  equals(agency.get('name'), expectedName);
  equals(agency.get('longName', expectedLongName);
});

