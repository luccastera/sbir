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

  store: SC.Store.create(),

  containerNowShowing: null,
  
  loadAgencies: function(response) {
    console.log('loadAgencies');
    if (SC.ok(response)) {
      var data = response.get('body');
      Sbir.store.loadRecords(Sbir.Agency, data);
      SC.Request.getUrl('/solicitations.json').header({'Accept': 'application/json'}).json().notify(Sbir, 'loadSolicitations').send();
    } else {
      console.log('loadAgencies errored');
    }
  },

  loadSolicitations: function(response) {
    if (SC.ok(response)) {
      var data = response.get('body');
      Sbir.store.loadRecords(Sbir.Solicitation, data);
      var agencies = Sbir.store.find(Sbir.Agency);
      Sbir.agenciesController.set('content', agencies);
      Sbir.statechart.gotoState('summary');
    } else {
      console.log('loadSolicitations errored');
    }
  }

}) ;
