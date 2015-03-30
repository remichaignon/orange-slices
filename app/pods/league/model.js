import DS from "ember-data";

var League = DS.Model.extend({
    name: DS.attr("string"),

	organization: DS.belongsTo("organization", { async: true }),
    activity: DS.belongsTo("activity", { async: true }),
 	seasons: DS.hasMany("season", { async: true })
});

League.reopenClass({
    FIXTURES: [
        { id: "coed-a", name: "Outdoor Coed Soccer", organization: "boulder-co", activity: "soccer", seasons: ["spring"] }
    ]
});

export default League;
