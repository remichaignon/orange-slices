import DS from "ember-data";

var Activity = DS.Model.extend({
  name: DS.attr("string"),

  leagues: DS.hasMany("league", { async: true })
});

Activity.reopenClass({
  FIXTURES: [
    { id: "indoor-coed-soccer", name: "Indoor Coed Soccer", leagues: ["boulder-indoor-soccer-coed-a"] },
    { id: "outdoor-coed-soccer", name: "Outdoor Coed Soccer", leagues: ["boulder-outdoor-soccer-coed-gold", "boulder-outdoor-soccer-coed-silver"] },
    { id: "coed-dodgeball", name: "Coed Dodgeball", leagues: ["pawnee-coed-dodgeball"] }
  ]
});

export default Activity;
