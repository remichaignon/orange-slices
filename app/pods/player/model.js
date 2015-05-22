import DS from "ember-data";

export default DS.Model.extend({
  user: DS.belongsTo("user"),

  joined: DS.attr("date"),
  left: DS.attr("date")
});
