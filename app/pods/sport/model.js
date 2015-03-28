import DS from "ember-data";

var Sport = DS.Model.extend({
    name: DS.attr("string"),
	
	organizations: DS.hasMany("organization", { async: true })
});

Sport.reopenClass({
    FIXTURES: [
        { id: "soccer", name: "Soccer", organizations: ["boulder-co", "pawnee-in"] },
        { id: "dodgeball", name: "Dodgeball", organizations: ["boulder-co", "pawnee-in"] }
    ]
});

export default Sport;
