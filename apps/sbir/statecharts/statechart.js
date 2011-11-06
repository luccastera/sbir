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
        var agencies = Sbir.store.find(Sbir.Agency);
        Sbir.agenciesController.set('content', agencies);
        var self = this;
        this.invokeLater(function() {
          self.gotoState('summary');
        }, 2000);
      },
      exitState: function() {
        Sbir.getPath('loadingPage.loadingPane').remove();
         Sbir.getPath('mainPage.mainPane').append();
      }
    }),
    
    summary: SC.State.design({
      enterState: function() {
        console.log('enter summary state');
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

