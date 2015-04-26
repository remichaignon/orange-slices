import DS from "ember-data";

var Activity = DS.Model.extend({
    name: DS.attr("string")
});

Activity.reopenClass({
    FIXTURES: [
        { id: "indoor-coed-soccer", name: "Indoor Coed Soccer" },
        { id: "coed-dodgeball", name: "Coed Dodgeball" },
		{ id: "outdoor-coed-soccer", name: "Outdoor Coed Soccer" },
		{ id: "indoor-men-soccer", name: "Indoor Men Soccer"}
    ]
});

export default Activity;
