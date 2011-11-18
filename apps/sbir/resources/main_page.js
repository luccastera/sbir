// ==========================================================================
// Project:   Sbir - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

// This page describes the main user interface for your application.  
Sbir.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({

    defaultResponder: 'Sbir.statechart',

    childViews: 'leftColumn mainColumn'.w(),
    leftColumn: SC.WorkspaceView.design({
      classNames: 'left-column'.w(),
      layout: {left: 0, width: 300, top: 0, bottom: 0},
      topToolbar: SC.ToolbarView.design({
        layout: {left: 0, right: 0, top: 0, bottom: 0},
        anchorLocation: SC.ANCHOR_TOP,
        childViews: 'label'.w(),
        label: SC.LabelView.design({
          classNames: 'text-centered'.w(),
          layout: {height: 20, centerY: 0, centerX: 0, width: 280},
          value: 'Agencies',
          fontWeight: SC.BOLD_WEIGHT
        })
      }),
      contentView: SC.View.design({
        classNames: 'brushed'.w(),
        childViews: 'scroller'.w(),
        scroller: SC.ScrollView.design({
          contentView: SC.SourceListView.design({
            classNames: 'brushed'.w(),
            contentBinding: 'Sbir.agenciesController.arrangedObjects',
            selectionBinding: 'Sbir.agenciesController.selection',
            contentValueKey: 'name',
            titleValueKey: 'longName',
            exampleView: SC.ListItemView.design({
              childViews: 'label'.w(),
              label: SC.LabelView.design({})
            })
          })
        })
      })
    }),

    mainColumn: SC.WorkspaceView.design({
      className: 'main-column'.w(),
      layout: {left: 301, right: 0, top: 0, bottom: 0},
      topToolbar: SC.ToolbarView.design({
        layout: {left: 0, right: 0, top: 0, bottom: 0},
        anchorLocation: SC.ANCHOR_TOP,
        childViews: 'homeButton backButton label'.w(),
        homeButton: SC.ButtonView.design({
          layout: {left: 20, height: 24, width: 80, centerY: 0},
          title: 'Home',
          isVisibleBinding: 'Sbir.showHomeButton',
          action: 'goHome'
        }),
        backButton: SC.ButtonView.design({
          layout: {left: 120, height: 24, width: 80, centerY: 0},
          title: 'Go Back',
          isVisibleBinding: 'Sbir.showBackButton',
          action: 'goBack'
        }),
        label: SC.LabelView.design({
          classNames: 'text-centered'.w(),
          layout: {height: 20, centerY: 0, centerX: 0, width: 400},
          fontWeight: SC.BOLD_WEIGHT,
          valueBinding: 'Sbir.agencyController.toolbarTitle'
        })
      }),
      contentView: SC.ContainerView.design({
        layout: {top: 30, left: 0, right: 0, bottom: 0},
        backgroundColor: '#fff',
        contentView: null,
        nowShowingBinding: 'Sbir.containerNowShowing'
      })
    })
  }),
  
  solicitationsView: SC.View.design({
    classNames: 'solicitations'.w(),
    childViews: 'scroller'.w(),
    scroller: SC.ScrollView.design({
      contentView: SC.ListView.design({
        contentBinding: 'Sbir.solicitationsController.arrangedObjects',
        selectionBinding: 'Sbir.solicitationsController.selection',
        classNames: 'solicitation brushed'.w(),
        contentValueKey: 'title',
        rowHeight: 40,
        showAlternatingRows: YES,
        action: 'viewSolicitation',
        exampleView: SC.ListItemView.design({
          tooltip: "Double click to view details"
        })
      })
    })
  }),
  
  summaryView: SC.View.design({
    classNames: 'scrollbars summary'.w(),
    backgrounColor: '#fff',
    childViews: 'about graph'.w(),
    about: Sbir.AboutView.design({
      layout: {left: 0, right: 0, top: 0, height: 80}
    }),
    graph: Sbir.GraphView.design({
      layout: {left: 0, right: 0, bottom: 0, top: 80}
    })
  }),
  
  solicitationView: SC.View.design({
    layout: {left: 0, bottom: 0, top: 0, right: 0},
    childViews: 'header comments newComment'.w(),
    header: Sbir.SolicitationView.design({
      useStaticLayout: NO,
      layout: {left: 0, height: 200, top: 0, right: 0},
      contentBinding: 'Sbir.solicitationController.content'
    }),
    comments: SC.View.design({
      childViews: 'list'.w(),
      list: SC.ListView.design({
        classNames: 'scrollbars'.w(),
        layerId: 'comments-container',
        layout: {left: 0, right: 0, top: 200, bottom: 100},
        contentBinding: 'Sbir.commentsController.arrangedObjects',
        exampleView: Sbir.CommentView
      })
    }),
    newComment: SC.View.design({
      layout: {left: 0, right: 0, bottom: 0, height: 100},
      classNames: 'new-comment brushed'.w(),
      childViews: 'textbox button'.w(),
      textbox: SC.TextFieldView.design({
        classNames: 'comment-box'.w(),
        layout: {left: 20, top: 20, bottom: 20, right: 200},
        isTextArea: YES,
        keyDown: function(evt) {
          if (evt.keyCode === 13) {
            Sbir.statechart.sendEvent('addComment');
          } else {
            return NO;
          }
        }
      }),
      button: SC.ButtonView.design({
        layout: {right: 20, width: 120, top: 20, height: 24},
        title: 'Add Comment',
        action: 'addComment'
      })
    })
  }),
  
  emptyAgencyView: SC.View.design({
    classNames: 'empty brushed'.w(),
    childViews: 'label'.w(),
    label: SC.LabelView.design({
      layout: {top: 20, left: 0, right: 0, height: 100},
      value: 'There are currently no solicitations for this agency'
    })
  })

});
