// ==========================================================================
// Project:   Sbir.User
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Sbir.User = SC.Record.extend(
/** @scope Sbir.User.prototype */ {

  firstname: SC.Record.attr(String),
  lastname: SC.Record.attr(String),
  email: SC.Record.attr(String),
  company: SC.Record.attr(String),
  website: SC.Record.attr(String)

}) ;
