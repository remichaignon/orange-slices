import DS from "ember-data";

var Team = DS.Model.extend({
    name: DS.attr("string"),

    organization: DS.belongsTo("organization", { async: true }),
    activity: DS.belongsTo("activity", { async: true })
});

Team.reopenClass({
    FIXTURES: [
        { id: 1, name: "Bunga Bunga", organization: "boulder-co", activity: "soccer" },
        { id: 2, name: "FC Hot Mess", organization: "boulder-co", activity: "soccer" },
        { id: 3, name: "Average Joe", organization: "boulder-co", activity: "dodgeball" },
        { id: 4, name: "Purple Cobras", organization: "boulder-co", activity: "dodgeball" }
    ]
});

export default Team;
