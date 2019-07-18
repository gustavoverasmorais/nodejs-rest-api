import PdvRespository from '../repository/pdv.repository';
import { body, validationResult } from 'express-validator';

class PdvController {

  static async create(req, res) {

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }

      let result = await PdvRespository.create(req);
      return res.status(200).send(result);
    } catch(exception) {

      if (exception.name === 'MongoError' && exception.code === 11000) {
        return res.status(422).send({ success: false, message: 'Document already exist!' });
      } 
      else if (exception.name === 'MongoError' && exception.code === 16755) {
         return res.status(422).send({ success: false, message: 'Cant extract geo keys!' });
      }
      return res.status(500).send(exception);
    }
  }

  static validate(method) {
    switch (method) {
      case 'create': {
       return [ 
          body('id', 'id doesnt exists').exists(),
          body('tradingName', 'tradingName doesnt exists').exists(),
          body('ownerName', 'ownerName doesnt exists').exists(),
          body('document', 'document doesnt exists').exists(),
          body('coverageArea', 'coverageArea doesnt exists').exists(),
          body('address', 'address doesnt exists').exists()
         ]   
      }
    }
  }

  /**
   *  GET /pdvs
   */
  static async getPdvById(req, res) {

    try {
      let pdv = await PdvRespository.find(req.query.id);

      if (!pdv || pdv.length == 0) {
        return res.status(404).send("Pdv not found.");
      }
      res.status(200).send(pdv);
    } catch(exception) {

      return res.status(500).send(exception);
    }
  }

  /**
   *  GET pdvs/search
   */
  static async search(req, res) {

    try {
      let pdv = await PdvRespository.search(req);

      if (!pdv || pdv.length == 0) {
        return res.status(404).send("Cannot find any closest Pdv.");
      }
      res.status(200).send(pdv);
    } catch(exception) {

      return res.status(500).send(exception);
    }
  }
}

export default PdvController;