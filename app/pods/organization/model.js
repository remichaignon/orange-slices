import DS from "ember-data";

var Organization = DS.Model.extend({
    name: DS.attr("string"),

    activities: DS.hasMany("activity", { async: true })
});

Organization.reopenClass({
    FIXTURES: [
        { id: "boulder-co", name: "Boulder Park & Rec", activities: ["soccer", "dodgeball"] },
        { id: "pawnee-in", name: "Pawnee Park & Rec", activities: ["soccer", "dodgeball"] }
    ]
});

export default Organization;
