import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    delete: function () {
      this.get("model")
        .destroyRecord()
        .then(function () {
          this.transitionToRoute("leagues");
        }.bind(this));
    }
  }
});
