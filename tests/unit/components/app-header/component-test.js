import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-header', 'Unit | Component | app header', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it trigger click on button', function(assert) {

  // Creates the component instance
  const component = this.subject();
  // Renders the component to the page
  component.set('actions', { handleRedirectSave() {} });
  component.set('redirectToSave', function(){ assert.ok(true); });
  this.render(hbs`{{app-header redirectToSave = (action 'handleRedirectSave')}}`);
  this.$('button').click();
});
