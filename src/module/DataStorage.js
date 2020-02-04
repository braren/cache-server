/**
 * Class for data storage on server as hash table.
 * @class
 */
class DataStorage {
  constructor () {
    this.table = {};
  }

  delete (key) {
    return delete this.table[key];
  }

  get (key) {
    return this.table[key];
  }

  set (key, data) {
    this.table[key] = data;
  }
}

module.exports = DataStorage;
