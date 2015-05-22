import {
  moduleForModel,
  test
} from "ember-qunit";

moduleForModel("organization", {
  // Specify the other units that are required for this test.
  needs: ["model:activity", "model:league", "model:team", "model:game"]
});

test("it exists", function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
