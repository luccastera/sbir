// ==========================================================================
// Project:   Sbir
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
Sbir = SC.Application.create(
  /** @scope Sbir.prototype */ {

  NAMESPACE: 'Sbir',
  VERSION: '0.1.0',

  store: SC.Store.create().from(SC.Record.fixtures),

  loadSolicitations: function(response) {
    if (SC.ok(response)) {
      console.log(response.get('body'));
    } else {
      console.log('errored');
    }
  }

}) ;
