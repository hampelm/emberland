import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload) {
    console.log("Got boundaries", payload);

    let newPayload = {
      type: "boundaries",
      id: payload.path,
      attributes: payload
    }

    // Remove some leading slashes
    payload.parent = payload.parent.substring(1);

    payload.data = newPayload;
    return this._super(...arguments);
  },

  // Prevent Ember from customizing our keys:
  keyForAttribute(key) { return key; }
});
