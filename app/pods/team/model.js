import DS from "ember-data";

var Team = DS.Model.extend({
  name: DS.attr("string"),

  leagues: DS.hasMany("league", { async: true }),
  players: DS.hasMany("player", { async: true }),

  currentLeagues: function () {
    return this.get("leagues").filter(function (league) {
      var now = moment();
      return now.isAfter(league.get("start")) && now.isBefore(league.get("end"));
    });
  }.property("leagues.@each"),
  currentPlayers: function () {
    return this.get("players").filter(function (player) {
      var now = moment();
      return now.isAfter(player.get("joined")) && now.isBefore(player.get("left"));
    });
  }.property("players.@each")
});

Team.reopenClass({
  FIXTURES: [
    { id: 1, name: "Bunga Bunga", leagues: [], players: [] },
    { id: 2, name: "FC Hot Mess", leagues: [], players: [] },
    { id: 3, name: "Average Joe", leagues: [], players: [] },
    { id: 4, name: "Purple Cobras", leagues: [], players: [] }
  ]
});

export default Team;
