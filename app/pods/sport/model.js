import DS from "ember-data";

var Sport = DS.Model.extend({
    name: DS.attr("string")
});

Sport.reopenClass({
    FIXTURES: [
        { id: "soccer", name: "Soccer" },
        { id: "dodgeball", name: "Dodgeball" }
    ]
});

export default Sport;
