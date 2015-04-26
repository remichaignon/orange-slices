import DS from "ember-data";

var Gameweek = DS.Model.extend({
	league: DS.belongsTo("gameweek", { async: true }),
	fixtures: DS.hasMany("fixture", { async: true })
});

Gameweek.reopenClass({
    FIXTURES: [
        { id: "week-1", gameweek: "week-1", fixtures: ["fixture-bunga-bunga-sprained-ankles"] }
    ]
});

export default Gameweek;
