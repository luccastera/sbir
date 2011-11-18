require('views/link_view');
require('views/user_info_view');

Sbir.userInfoPage = SC.Page.design({

  userInfoPanel: SC.PanelPane.design({
    layout: {centerX: 0, centerY: 0, height: 300, width: 400},
    defaultResponder: 'Sbir.statechart',
    contentView: SC.View.design({
      backgroundColor: '#fff',
      childViews: 'topbar userInfo'.w(),
      topbar: SC.View.design({
        layout: {top: 0, left: 0, right: 0, height: 30},
        classNames: 'popup-toolbar'.w(),
        childViews: 'titleLabel closeButton'.w(),
        titleLabel: SC.LabelView.design({
          layout: {height: 20, left: 10, centerY: 0, right: 20},
          value: 'User Information'
        }),
        closeButton: Sbir.LinkView.design({
          layout: {right: 5, top: 5, height: 16, width: 16},
          value: '<img src="' + sc_static('popup_close_button.png') + '" title="' + "click to close".loc() + '" style="cursor: pointer" />',
          action: 'cancel'
        })
      }),
      userInfo: Sbir.UserInfoView.design({
        layout: {left: 10, right: 10, top: 40, bottom: 10},
        contentBinding: 'Sbir.userController.content'
      })
    })
  })
});
