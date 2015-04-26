import DS from "ember-data";

var Activity = DS.Model.extend({
    name: DS.attr("string")
});

Activity.reopenClass({
    FIXTURES: [
        { id: "indoor-coed-soccer", name: "Indoor Coed Soccer" },
        { id: "outdoor-coed-soccer", name: "Outdoor Coed Soccer" },
        { id: "coed-dodgeball", name: "Coed Dodgeball" }
    ]
});

export default Activity;
