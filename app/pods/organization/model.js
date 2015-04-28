import DS from "ember-data";

var Organization = DS.Model.extend({
    name: DS.attr("string"),
    
    leagues: DS.hasMany("league", { async: true })
});

Organization.reopenClass({
    FIXTURES: [
        { id: "boulder-co", name: "Boulder Park & Rec", leagues: ["boulder-outdoor-soccer-coed-gold", "boulder-outdoor-soccer-coed-silver"] },
        { id: "pawnee-in", name: "Pawnee Park & Rec", leagues: ["pawnee-coed-dodgeball"] },
        { id: "boulder-indoor-soccer", name: "Boulder Indoor Soccer", leagues: ["boulder-indoor-soccer-coed-a"] }
    ]
});

export default Organization;
