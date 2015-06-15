import Ember from "ember";

export default Ember.Component.extend({
  user: null,

  actions: {
    save: function () {
      this.sendAction("save");
    }
  },

  focusNameField: function () {
    this.$().find("[name='name']").focus();
  }.on("didInsertElement")
});
