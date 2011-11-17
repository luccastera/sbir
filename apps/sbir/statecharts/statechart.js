Sbir.statechart = SC.Statechart.create({
  rootState: SC.State.design({
  
    initialSubstate: 'loadSession',

    enterState: function() {
      Sbir.pusher = new Pusher('e084ad5e577f43e7de8b');
      var channel = Sbir.pusher.subscribe('comments');
      channel.bind('new_comment', function(data) {
        var solicitationId = data.solicitation_id;
        if (Sbir.solicitationController.get('id') == solicitationId) {
          SC.RunLoop.begin();
          Sbir.commentsController.get('content').pushObject(data);
          SC.RunLoop.end();
        }
      });
    },
    
    agencyChanged: function() {
      this.gotoState('agency');
    },
    goHome: function() {
      Sbir.agenciesController.set('selection', null);
      this.gotoState('summary');
    },
    
    loadSession: SC.State.design({
      enterState: function() {
        Sbir.getPath('loadingPage.loadingPane').append();
        if (localStorage.getItem('currentUser')) {
          var user = JSON.parse(localStorage.getItem('currentUser'))
          Sbir.currentUserController.set('content', user);
        }
        this.gotoState('loadData');
      }
    }),

    loadData: SC.State.design({
      enterState: function() {
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
        var sid = Sbir.solicitationController.get('id');
        SC.Request.getUrl('/comments.json?sid=' + sid).header({'Accept': 'application/json'}).json().notify(Sbir, 'loadComments').send();
        Sbir.set('containerNowShowing', 'solicitationView');
        Sbir.set('showBackButton', true);
      },
      exitState: function() {
        Sbir.commentsController.set('content', []);
        Sbir.set('showBackButton', false);
      },
      goBack: function() {
        this.gotoState('agency');
      },
      addComment: function() {
        var commentBody = SC.$('.comment-box textarea').val();
        var comment = {
          body: commentBody,
          solicitation_id: Sbir.solicitationController.get('id'),
          created_at: SC.DateTime.create().toFormattedString('%m/%d/%Y %H:%M:%S')
        };
        if (Sbir.currentUserController.get('content')) {
          comment.user_id = Sbir.currentUserController.get('guid');
          Sbir.saveComment(comment);
        } else {
          Sbir.savedComment = comment;
          this.gotoState('getuser');
        }
      }
    }),
    
    getuser: SC.State.design({
      enterState: function() {
        Sbir.getPath('userPage.userPanel').append();
      },
      cancel: function() {
        Sbir.getPath('userPage.userPanel').remove();
        this.gotoState('solicitation');
      },
      submitUserInfo: function() {
        var user = {
          firstname: SC.$('.firstname input').val(),
          lastname: SC.$('.lastname input').val(),
          email: SC.$('.email input').val(),
          company: SC.$('.company input').val(),
          website: SC.$('.website input').val()
        };
        Sbir.getPath('userPage.userPanel').remove();
        SC.Request.postUrl('/users.json').header({'Accept': 'application/json'}).json().notify(Sbir, 'savedUser').send({user: user});
      }
    })
  })
});

