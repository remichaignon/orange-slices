import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('team', {
  // Specify the other units that are required for this test.
  needs: ["model:organization", "model:sport"]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
