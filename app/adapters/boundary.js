import ApplicationAdapter from './application'

export default ApplicationAdapter.extend({
  urlForQueryRecord(query) {
    let path = query.path;
    if (path.slice(-1) === '/') {
      path = path.slice(0, -1);
    }
    let baseUrl = this.buildURL();
    delete query.path;
    return `${baseUrl}${path}/boundaries.json`;
  }
});
