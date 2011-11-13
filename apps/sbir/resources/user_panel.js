require('views/link_view');

Sbir.userPage = SC.Page.design({

  userPanel: SC.PanelPane.design({
    layout: {centerX: 0, centerY: 0, height: 350, width: 400},
    defaultResponder: 'Sbir.statechart',
    contentView: SC.View.design({
      backgroundColor: '#fff',
      childViews: 'topbar instructions form'.w(),
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
      instructions: SC.LabelView.design({
        layout: {top: 50, left: 20, right: 20, height: 40},
        value: 'Please enter your information before submitting this comment.'
      }),
      form: SC.View.design({
        layout: {top: 90, left: 20, right: 20, bottom: 20},
        childViews: 'firstname lastname email company website submit'.w(),
        firstname: SC.View.design({
          classNames: 'firstname'.w(),
          layout: {left: 0, right: 0, top: 0, height: 40},
          childViews: 'label input'.w(),
          label: SC.LabelView.design({
            layout: {left: 0, width: 70, top: 5, height: 30},
            value: 'First Name'
          }),
          input: SC.TextFieldView.design({
            layout: {left: 80, right: 20, top: 0, height: 30}
          })
        }),
        lastname: SC.View.design({
          classNames: 'lastname'.w(),
          layout: {left: 0, right: 0, top: 40, height: 40},
          childViews: 'label input'.w(),
          label: SC.LabelView.design({
            layout: {left: 0, width: 70, top: 5, height: 30},
            value: 'Last Name'
          }),
          input: SC.TextFieldView.design({
            layout: {left: 80, right: 20, top: 0, height: 30}
          })
        }),
        email: SC.View.design({
          classNames: 'email'.w(),
          layout: {left: 0, right: 0, top: 80, height: 40},
          childViews: 'label input'.w(),
          label: SC.LabelView.design({
            layout: {left: 0, width: 70, top: 5, height: 30},
            value: 'Email'
          }),
          input: SC.TextFieldView.design({
            layout: {left: 80, right: 20, top: 0, height: 30}
          })
        }),
        company: SC.View.design({
          classNames: 'company'.w(),
          layout: {left: 0, right: 0, top: 120, height: 40},
          childViews: 'label input'.w(),
          label: SC.LabelView.design({
            layout: {left: 0, width: 70, top: 5, height: 30},
            value: 'Company'
          }),
          input: SC.TextFieldView.design({
            layout: {left: 80, right: 20, top: 0, height: 30}
          })
        }),
        website: SC.View.design({
          classNames: 'website'.w(),
          layout: {left: 0, right: 0, top: 160, height: 40},
          childViews: 'label input'.w(),
          label: SC.LabelView.design({
            layout: {left: 0, width: 70, top: 5, height: 30},
            value: 'Website'
          }),
          input: SC.TextFieldView.design({
            layout: {left: 80, right: 20, top: 0, height: 30}
          })
        }),
        submit: SC.ButtonView.design({
          layout: {right: 20, width: 100, top: 210, height: 40},
          title: 'Submit',
          action: 'submitUserInfo'
        })
      })
    })
  })
});
