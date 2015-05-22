import Ember from "ember";

export default Ember.Component.extend({
  league: null,
  organizations: null,
  activities: null,

  actions: {
    save: function () {
      this.sendAction("save");
    }
  },

  focusNameField: function () {
    this.$().find("[name="name"]").focus();
  }.on("didInsertElement")
});
