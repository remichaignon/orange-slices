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
    return this.store.createRecord("user");
  }
});
