Sbir.statechart = SC.Statechart.create({
  rootState: SC.State.design({
  
    initialSubstate: 'loadData',

    enterState: function() {
    },
    
    agencyChanged: function() {
      this.gotoState('agency');
    },
    goHome: function() {
      Sbir.agenciesController.set('selection', null);
      this.gotoState('summary');
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
        Sbir.set('showHomeButton', false);
        console.log('enter summary state');
        Sbir.set('containerNowShowing', 'summaryView');
        this.invokeLater(function() {
          Sbir.drawGraph();
        }, 50);
      },
      exitState: function() {
        Sbir.set('showHomeButton', true);
      }
    }),
    
    agency: SC.State.design({
      enterState: function() {
        var agency = Sbir.agencyController.get('content');
        if (agency.getPath('solicitations.length') > 0) {
          Sbir.solicitationsController.set('content', agency.get('solicitations'));
          this.invokeLater(function() {
            Sbir.set('containerNowShowing', 'solicitationsView');
          });
        } else {
          Sbir.set('containerNowShowing', 'emptyAgencyView');
        }
      },

      viewSolicitation: function() {
        this.gotoState('solicitation');
      }
    }),
    
    solicitation: SC.State.design({
      enterState: function() {
        Sbir.set('containerNowShowing', 'solicitationView');
        Sbir.set('showBackButton', true);
      },
      exitState: function() {
        Sbir.set('showBackButton', false);
      },
      goBack: function() {
        this.gotoState('agency');
      }
    })
  })
});

