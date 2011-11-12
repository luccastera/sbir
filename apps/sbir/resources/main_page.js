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
        classNames: 'scrollbars'.w(),
        backgroundColor: '#fff',
        childViews: 'menuItems'.w(),
        menuItems: SC.SourceListView.design({
          backgroundColor: '#fff',
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
    }),

    mainColumn: SC.WorkspaceView.design({
      className: 'main-column'.w(),
      layout: {left: 301, right: 0, top: 0, bottom: 0},
      topToolbar: SC.ToolbarView.design({
        layout: {left: 0, right: 0, top: 0, bottom: 0},
        anchorLocation: SC.ANCHOR_TOP,
        childViews: 'label'.w(),
        label: SC.LabelView.design({
          classNames: 'text-centered'.w(),
          layout: {height: 20, centerY: 0, centerX: 0, width: 400},
          fontWeight: SC.BOLD_WEIGHT,
          valueBinding: 'Sbir.agencyController.longName'
        })
      }),
      contentView: SC.ContainerView.design({
        contentView: null,
        nowShowingBinding: 'Sbir.containerNowShowing'
      })
    })
  }),
  
  solicitationsView: SC.View.design({
    classNames: 'scrollbars solicitations'.w(),
    backgrounColor: '#fff',
    childViews: 'list'.w(),
    list: SC.ListView.design({
      layout: {left: 0, top: 0, bottom: 0, right: 0},
      contentBinding: 'Sbir.solicitationsController.content',
      exampleView: Sbir.SolicitationView
    })
  }),
  
  summaryView: SC.View.design({
    classNames: 'scrollbars summary'.w(),
    backgrounColor: '#fff',
    childViews: 'about graph'.w(),
    about: Sbir.AboutView.design({
      layout: {left: 0, right: 0, top: 0, height: 100}
    }),
    graph: Sbir.GraphView.design({
      layout: {left: 0, right: 0, bottom: 0, top: 100}
    })
  })

});
