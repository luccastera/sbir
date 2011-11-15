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
  
  showHomeButton: true,
  showBackButton: false,
  
  pusher: null,
  pusherChannel: null,
  
  savedComment: null,
  
  loadedSession: function(response) {
    if (SC.ok(response)) {
      var data = response.get('body');
      console.log(data)
      if (data.status == 'ok') {
        Sbir.currentUserController.set('content', data.user);
      }
    }
    Sbir.statechart.gotoState('loadData');
  },
  
  loadAgencies: function(response) {
    if (SC.ok(response)) {
      var data = response.get('body');
      Sbir.store.loadRecords(Sbir.Agency, data);
      SC.Request.getUrl('/solicitations.json').header({'Accept': 'application/json'}).json().notify(Sbir, 'loadSolicitations').send();
    } else {
      if (console && console.log) {console.log('loadAgencies errored');}
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
      if (console && console.log) {console.log('loadSolicitations errored');}
    }
  },
  
  drawGraph: function() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Agencies');
    data.addColumn('number', 'Solicitations');
    var agencies = Sbir.store.find(Sbir.Agency);
    var index = 0;
    agencies.forEach(function(agency) {
      if (agency.get('solicitations').get('length') > 0) {
        data.addRows(1);
        data.setValue(index,0, agency.get('name'));
        data.setValue(index,1, agency.get('solicitations').get('length'));
        index = index + 1;
      }
    });
    data.sort({column: 1, desc: true});
    var chart = new google.visualization.ColumnChart(document.getElementById('sbir-graph'));
    chart.draw(data, {
      width: 800, 
      height: 500,
      chartArea: {left: 50, width: 710, top: 50, height: 340},
      title: 'Number of SBIR Solicitations by agency',
      legend: 'none',
      hAxis: {
        title: 'Solicitations', 
        slantedText: YES
      }
    });
  },
  
  loadComments: function(response) {
    if (SC.ok(response)) {
      var comments = response.get('body');
      Sbir.commentsController.set('content', comments);
    } else {
      if (console && console.log) {console.log('loadComments error');}
    }
  },
  
  savedUser: function(response) {
    if (SC.ok(response)) {
      var user = response.get('body').user;
      Sbir.currentUserController.set('content', user);
      Sbir.savedComment.user_id = user.guid;
      Sbir.statechart.gotoState('solicitation');
      Sbir.saveComment(Sbir.savedComment);
    } else {
      if (console && console.log) {console.log('savedUser error');}
    }
  },
  
  saveCommentCallback: function(response) {
    if (SC.ok(response)) {
      if (response.get('body').status == 'ok') {
        var comment = response.get('body').comment;
        SC.$('.comment-box textarea').val(''); //clear comment box
      } else {
        if (console && console.log) {console.log('error saving comment');}
      }
    } else {
      if (console && console.log) {console.log('error saving comment');}
    }
  },
  
  saveComment: function(comment) {
    SC.Request.postUrl('/comments.json').header({'Accept': 'application/json'}).json().notify(Sbir, 'saveCommentCallback').send({comment: comment});
  }

}) ;
