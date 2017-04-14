import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    console.log("Got place", payload);


    // Make the outline a first-level property
    payload.outline = payload.map.layers.find((layer) => {
      return layer.id === 'outline'
    });

    let newPayload = {
      type: "place",
      id: payload.subtitle, // TODO
      attributes: payload
    }

    payload.data = newPayload;

    return this._super(...arguments);
  },

  // Prevent Ember from customizing our keys:
  keyForAttribute(key) { return key; }
});
