class BaseController {
  constructor(model, name) {
    this.model = model;
    this.name = name;
  }

  create(params, callback) {
    this.model.create(params, (err, dbNewObject) => {
      if (err) {
        return callback(err);
      }

      return callback(null, dbNewObject);
    });
  }

  findOneAndUpdate(data1, data2, callback) {
    this.model.findOneAndUpdate(
      data1,
      data2,
      { upsert: true, new: true },
      (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      }
    );
  }

  findOneAndRemove(data, callback) {
    this.model.findOneAndRemove(
      data,
      { upsert: true, new: true },
      (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      }
    );
  }

  find(params, callback) {
    this.model.find(params, (err, dbNewObject) => {
      if (err) {
        return callback(err);
      }
      return callback(null, dbNewObject);
    });
  }
}

module.exports = BaseController;
