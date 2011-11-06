Sbir.statechart = SC.Statechart.create({
  rootState: SC.State.design({
  
    initialSubstate: 'solicitations',

    enterState: function() {
      Sbir.getPath('mainPage.mainPane').append();
    },
    
    solicitations: SC.State.plugin('Sbir.SOLICITATIONS')
  })
});

