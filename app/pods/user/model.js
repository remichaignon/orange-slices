import DS from "ember-data";

var User = DS.Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string")
});

User.reopenClass({
  FIXTURES: [
    { id: "remi", name: "Rémi Chaignon", email: "remi@chaignon.fr" }
  ]
});

export default User;
