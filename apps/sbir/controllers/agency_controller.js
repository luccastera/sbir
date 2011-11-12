// ==========================================================================
// Project:   Sbir.agencyController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Sbir.agencyController = SC.ObjectController.create(
/** @scope Sbir.agencyController.prototype */ {

  contentBinding: SC.Binding.from('Sbir.agenciesController.selection').single(),
  contentBindingDefault: SC.Binding.single(),

  contentDidChange: function() {
    if (this.get('content')) {
      console.log('agency changed', this.get('name'));
      Sbir.statechart.sendEvent('agencyChanged');
    }
  }.observes('name'),
  
  toolbarTitle: function() {
    if (this.get('longName')) {
      return this.get('longName');
    } else {
      return 'SBIR Solicitations';
    }
  }.property('longName')
}) ;
