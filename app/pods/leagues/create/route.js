import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    willTransition: function () {
      var model = this.controller.get("model");
      if (model.get("isNew")) {
        this.store.deleteRecord(model);
      }
      return true;
    }
  },
  model: function () {
    return this.store.createRecord("league");
  },
  setupController: function (controller, model) {
    controller.set("model", model);

    this.store
      .find("organization")
      .then(function (organizations) {
        controller.set("organizations", organizations);
      });

    this.store
      .find("activity")
      .then(function (activities) {
        controller.set("activities", activities);
      });
  }
});
