import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('game', {
  // Specify the other units that are required for this test.
  needs: ["model:league", "model:organization", "model:activity", "model:team"]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
