import DS from 'ember-data';

export default DS.Model.extend({
  path: DS.attr(),
  parent: DS.attr(),
  parent_names: DS.attr(),
  children: DS.attr(),
  styles: DS.attr()
});
