import Ember from 'ember';

export default Ember.Controller.extend({
  // lat: 45.519743,
  // lng: -122.680522,
  // zoom: 10
  actions: {
    clickBoundary(e) {
      this.transitionToRoute('place', e.layer.feature.properties.path);
    }
  }
});
