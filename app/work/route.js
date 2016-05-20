import Ember from 'ember';

export default Ember.Route.extend({
  init() {
    this._super(...arguments);
  },
  queryParams: {
    path: {
      refreshModel: true,
    },
  },
  model(params) {
    console.log("CALL MODEL", params);
    return this.returnModel(params);
  },
  returnModel(params) {
    let link = '';
    if (params.path === null) {
      link = "/work";
    } else {
       link = "/work?path=" + params.path;
    }
    const request = new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax(link, {
        success(response) {
          resolve(response);
        },
        error(reason) {
          reject(reason);
        },
      });
    });
  return request;
  },
});
