import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      place: this.store.queryRecord('place', { path: params.place_path }),
      boundaries: this.store.queryRecord('boundary', { path: params.place_path })
    });
  }
});
