import Ember from "ember";

export default Ember.Controller.extend({
  teams: [],
  selectedTeam: null,

  actions: {
    save: function () {
      if (!team) return;

      // TODO: Does this make sense?
      this.get("model.teams").addObject(selectedTeam);

      this.get("model")
        .save()
        .then(function (model) {
          this.transitionToRoute("league.index", model);
        }.bind(this));
    }
  }
});
