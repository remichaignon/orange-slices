import DS from "ember-data";

var Activity = DS.Model.extend({
    name: DS.attr("string"),
	
	organizations: DS.hasMany("organization", { async: true })
});

Activity.reopenClass({
    FIXTURES: [
        { id: "soccer", name: "Soccer", organizations: ["boulder-co", "pawnee-in"] },
        { id: "dodgeball", name: "Dodgeball", organizations: ["boulder-co", "pawnee-in"] }
    ]
});

export default Activity;
