import DS from 'ember-data';

export default DS.Model.extend({
  subtitle: DS.attr(),
  map: DS.attr(),
  outline: DS.attr(),

  bounds: Ember.computed('map', function() {
    let map = this.get('map');
    let extent = map.extent;
    return [ [extent[0].lat, extent[0].lon], [extent[1].lat, extent[1].lon] ];
  }),

  // outlineGeojson: Ember.computed('map', function() {
  //   let outline = this.get('outline');
  //   console.log('xxxx place outline', outline.elements);
  //   return outline.elements;
  // }),

  // outlineStyle: Ember.computed('map', function() {
  //   let outline = this.get('outline');
  //   console.log('xxxx place outline style', outline.style);
  //   return outline.style;
  // })
});
