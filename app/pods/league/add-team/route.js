import Ember from "ember";

export default Ember.Route.extend({
  model: function () {
    return this.modelFor("league");
  },
  setupController: function (controller, model) {
    controller.set("model", model);

    this.store.find("team")
      .then (function (teams) {
        return teams
          .filterBy("organization", model.organization)
          .filterBy("activity", model.activity);
      })
      .then(function (teams) {
        controller.set("teams", teams);
      });
  }
});
