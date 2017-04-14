import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // namespace: 'api/1.0',
  host: 'https://makeloveland.com/',
  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL();
    return `${baseUrl}/${modelName}/${id}.json`;
  }
});
