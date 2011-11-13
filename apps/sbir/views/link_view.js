// ==========================================================================
// Project:   Sbir.LinkView
// ==========================================================================
/*globals Sbir */

/** @class

  This is a custom view that represents a simple text link.
  
  When clicked on, an action is fired.

  @extends SC.View
*/

Sbir.LinkView = SC.View.extend(Sbir.TargetAction,{

  classNames: ['link'],
  tagName: 'span',

  /**
    The value is the text that will be shown in the view.

    @property {String}
  */
  value: "Click here".loc(),

  /**
    The target on which to call the action when a user clicks on the view. (optional if you already have a defaultResponder set on the pane).

    @property {String}
  */
  target: null,
  
  /**
    The action which will be called on the target when a user clicks the view.

    @property {String}
  */
  action: null,
  
  render: function(context) {
    context.push(this.get('value'));
  },
  
  click: function(evt) {
    this.performAction(evt, null, this.get('action'));
  }

});
