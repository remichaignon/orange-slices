import DS from "ember-data";

var Organization = DS.Model.extend({
    name: DS.attr("string")
});

Organization.reopenClass({
    FIXTURES: [
        { id: "boulder-co", name: "Boulder Park & Rec" },
        { id: "pawnee-in", name: "Pawnee Park & Rec" },
		{ id: "boulder-indoor-soccer", name: "Boulder Indoor Soccer"}
    ]
});

export default Organization;
