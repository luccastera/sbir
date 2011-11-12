// ==========================================================================
// Project:   Sbir.solicitationController
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sbir */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Sbir.solicitationController = SC.ObjectController.create(
/** @scope Sbir.solicitationController.prototype */ {

  contentBinding: SC.Binding.from('Sbir.solicitationsController.selection').single(),
  contentBindingDefault: SC.Binding.single()

}) ;
