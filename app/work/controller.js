import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['path'],
  path: null,
  init() {
    this._super(...arguments);
  },
  items: Ember.computed('model', function() {
    return this.get('model');
  }),
  actions: {
    updateQuery(param) {
      let pathHold = this.get('path');
      if (pathHold === null) {
        pathHold = param;
      } else {
        pathHold = pathHold + "/" + param;
      }
      this.set('path', pathHold);
    },
  },
});
