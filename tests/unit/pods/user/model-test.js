import {
  moduleForModel,
  test
} from "ember-qunit";

moduleForModel("user", {
  // Specify the other units that are required for this test.
  // needs: ["model:organization", "model:activity"]
});

test("it exists", function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
