import Ember from "ember";

export default Ember.Component.extend({
    organization: null,

    actions: {
        save: function () {
            this.sendAction("save");
        }
    }
});
