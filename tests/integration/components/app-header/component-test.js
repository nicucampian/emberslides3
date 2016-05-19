import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-header', 'Integration | Component | app header', {
  integration: true,
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('actions', { handleRedirectSave() {} });
  this.render(hbs`{{app-header redirectToSave = (action 'handleRedirectSave')}}`);

  assert.equal(this.$().text().trim(), 'Save');
});

test('it renders one button', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('actions', { handleRedirectSave() {} });
  this.render(hbs`{{app-header redirectToSave = (action 'handleRedirectSave')}}`);

  assert.equal(this.$('button').length, 1);
});
