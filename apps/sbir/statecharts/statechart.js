Sbir.statechart = SC.Statechart.create({
  rootState: SC.State.design({

    enterState: function() {
      console.log('in root state');
      Sbir.getPath('mainPage.mainPane').append() ;
    }
  })
});

