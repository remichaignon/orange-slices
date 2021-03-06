import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.resource("organizations", function () {
    this.route("create");
  });
  this.resource("organization", { path: "/organization/:organization_id" }, function () {
    this.route("edit");
    this.route("delete");
  });

  this.resource("activities", function () {
    this.route("create");
  });
  this.resource("activity", { path: "/activity/:activity_id" }, function () {
    this.route("edit");
    this.route("delete");
  });

  this.resource("leagues", function () {
    this.route("create");
  });
  this.resource("league", { path: "/league/:league_id" }, function () {
    this.route("edit");
    this.route("delete");

    this.route("add-team");
    this.route("remove-team");

    this.route("add-game");
    this.route("remove-game");
  });

  this.resource("teams", function () {
    this.route("create");
  });
  this.resource("team", { path: "/team/:team_id" }, function () {
    this.route("edit");
    this.route("delete");

    this.route("add-player");
    this.route("remove-player");
  });

  this.resource("games", function () {
    this.route("create");
  });
  this.resource("game", function () {
    this.route("edit");
    this.route("delete");
  });

  this.resource("users", function () {
    this.route("create");
  });
  this.resource("user", { path: "/user/:user_id" }, function () {
    this.route("edit");
    this.route("delete");
  });
});

export default Router;
