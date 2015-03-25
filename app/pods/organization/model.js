import DS from "ember-data";

var Organization = DS.Model.extend({
    name: DS.attr("string"),

    sports: DS.hasMany("sport", { async: true })
});

Organization.reopenClass({
    FIXTURES: [
        { id: "boulder-co", name: "Boulder Park & Rec", sports: ["soccer", "dodgeball"] },
        { id: "pawnee-in", name: "Pawnee Park & Rec", sports: ["soccer", "dodgeball"] }
    ]
});

export default Organization;
