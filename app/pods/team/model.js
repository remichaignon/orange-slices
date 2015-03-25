import DS from "ember-data";

var Team = DS.Model.extend({
    name: DS.attr("string"),

    organization: DS.belongsTo("organization"),
    sport: DS.belongsTo("sport")
});

Team.reopenClass({
    FIXTURES: [
        { id: 1, name: "Bunga Bunga", organization: "boulder-co", sport: "soccer" },
        { id: 2, name: "FC Hot Mess", organization: "boulder-co", sport: "soccer" },
        { id: 3, name: "Average Joe", organization: "boulder-co", sport: "dodgeball" },
        { id: 4, name: "Purple Cobras", organization: "boulder-co", sport: "dodgeball" }
    ]
});

export default Team;
