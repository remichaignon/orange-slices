import DS from "ember-data";

var Season = DS.Model.extend({
    name: DS.attr("string"),

	organization: DS.belongsTo("organization", { async: true }),
    activity: DS.belongsTo("activity", { async: true }),
/* 	leagues: DS.hasMany("league", { async: true }) */
});

Season.reopenClass({
    FIXTURES: [
        { id: "spring", name: "Spring", organization: "boulder-co", activity: "soccer", leagues: ["coed-a", "coed-b"] }
    ]
});

export default Season;
