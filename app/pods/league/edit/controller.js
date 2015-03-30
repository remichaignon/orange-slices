import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        save: function () {
            this.get("model")
                .save()
                .then(function (model) {
                    this.transitionToRoute("league.index", model);
                }.bind(this));
        }
    }
});
