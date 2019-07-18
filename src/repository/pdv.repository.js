import Pdv from '../models/pdv';

class PdvRespository {

  static async create(req) {
    let pdv = new Pdv(req.body);

    try {
      return await pdv.save();
    } 
    catch (exception) {
      throw exception;
    }
  }

  static async find(id) {

    try {
      return await Pdv.find({'id':id});
    } 
    catch(exception) {
      throw exception;
    }
  }

  static async search(req) {

    try {
      let query = {
        coverageArea: {
          $nearSphere: {
            $maxDistance: 900 * 1609.34,
            $geometry: {
              type: 'Point',
              coordinates: [parseFloat(req.query.lnt), parseFloat(req.query.lat)]
            }
          }
        }
      };

      return await Pdv.find(query);
    }
    catch(exception) {
      throw exception;
    }
  }
}

module.exports = PdvRespository;