import DS from "ember-data";

var League = DS.Model.extend({
    name: DS.attr("string"),
	start: DS.attr("date"),
	end: DS.attr("date"),
	order: DS.attr("number"),

	organization: DS.belongsTo("organization", { async: true }),
    activity: DS.belongsTo("activity", { async: true }),

    teams:DS.hasMany("team", { async: true }),
    gameweeks: DS.hasMany("gameweek", { async: true })
});

League.reopenClass({
    FIXTURES: [
        { id: "boulder-outdoor-soccer-coed-gold", name: "Boulder Outdoor Soccer Coed Gold", organization: "boulder-co", activity: "outdoor-coed-soccer", teams: [], gameweeks: [] },
        { id: "boulder-outdoor-soccer-coed-silver", name: "Boulder Outdoor Soccer Coed Silver", organization: "boulder-co", activity: "outdoor-coed-soccer", teams: [], gameweeks: [] },
        { id: "pawnee-coed-dodgeball", name: "Pawnee Coed Dodgeball", organization: "pawnee-in", activity: "coed-dodgeball", teams: [], gameweeks: [] },
        { id: "boulder-indoor-soccer-coed-a", name: "Boulder Indoor Soccer Coed A", organization: "boulder-indoor-soccer", activity: "indoor-coed-soccer", teams: [], gameweeks: [] },
    ]
});

export default League;
