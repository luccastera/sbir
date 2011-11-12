Sbir.statechart = SC.Statechart.create({
  rootState: SC.State.design({
  
    initialSubstate: 'loadData',

    enterState: function() {
    },
    
    agencyChanged: function() {
      this.gotoState('agency');
    },

    loadData: SC.State.design({
      enterState: function() {
        Sbir.getPath('loadingPage.loadingPane').append();
        SC.Request.getUrl('/agencies.json').header({'Accept': 'application/json'}).json().notify(Sbir, 'loadAgencies').send();
      },
      exitState: function() {
        Sbir.getPath('loadingPage.loadingPane').remove();
         Sbir.getPath('mainPage.mainPane').append();
      }
    }),
    
    summary: SC.State.design({
      enterState: function() {
        console.log('enter summary state');
        Sbir.set('containerNowShowing', 'summaryView');
        this.invokeLater(function() {
          Sbir.drawGraph();
        }, 50);
      }
    }),
    
    agency: SC.State.design({
      enterState: function() {
        var agency = Sbir.agencyController.get('content');
        Sbir.solicitationsController.set('content', agency.get('solicitations'));
        Sbir.set('containerNowShowing', 'solicitationsView');
      }
    })
  })
});

