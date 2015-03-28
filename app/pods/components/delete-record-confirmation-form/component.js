import Ember from 'ember';

export default Ember.Component.extend({
	name: null,
	record: null,

	isDisabled: function () {
		return this.get("name") !== this.get("record.id");
	}.property("name", "record.id"),

	actions: {
		delete: function () {
			this.sendAction("delete");
		}
	}
});
