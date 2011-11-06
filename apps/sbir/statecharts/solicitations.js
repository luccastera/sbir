Sbir.SOLICITATIONS  = SC.State.design({
  enterState: function() {
    console.log('entering solicitations state');
    // fetch all solicitations
    //SC.Request.getUrl('/api/solicitations.json').header({'Accept': 'application/json'}).json().notify(Sbir, 'loadSolicitations').send();
  }
});
