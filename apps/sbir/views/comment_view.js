Sbir.CommentView = SC.TemplateView.extend(Sbir.CustomActions,{
  templateName: 'comment',
  
  actions: {
    '.comment-user': {
      action: 'showUser'
    }
  }
});
