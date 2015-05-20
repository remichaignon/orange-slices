import DS from "ember-data";

var Game = DS.Model.extend({
  league: DS.belongsTo("league", { async: true })
});

Game.reopenClass({
  FIXTURES: []
});

export default Game;
