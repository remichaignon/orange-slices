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
    this.route("create");
    this.route("edit");
    this.route("delete");
  });
});

export default Router;
