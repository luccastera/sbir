// ==========================================================================
// Project:   Sbir.Solicitation
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Sbir.Solicitation = SC.Record.extend(
/** @scope Sbir.Solicitation.prototype */ {

  title: SC.Record.attr(String),
  agencies: SC.Record.toMany('Sbir.Agency', {isMaster: NO})
}) ;
