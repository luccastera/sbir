// ==========================================================================
// Project:   Sbir - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

// This page describes the main user interface for your application.  
Sbir.loadingPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  loadingPane: SC.MainPane.design({

    defaultResponder: 'Sbir.statechart',
    classNames: 'loading-page'.w(),

    childViews: 'loadingLabel'.w(),

    loadingLabel: SC.LabelView.design({
      layout: { top: 100, centerX: 0, width: 600, height: 200 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Loading..."
    })
  })

});
