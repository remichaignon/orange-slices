import Ember from "ember";

export default Ember.Route.extend({
    model: function (params) {
        return this.store.find("activity", params.activity_id);
    },
    setupController: function (controller, model) {
        controller.set("model", model);

        // TODO: Figure out where to request the league from?
        this.store
            .find("leagues")
            .filterBy("activity", model.get("id"))
            .then(function (leagues) { controller.set("leagues", leagues); });
    }
});
