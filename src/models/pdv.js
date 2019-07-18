import { Schema, model } from 'mongoose';

const MultiPolygonSchema = new Schema({
  type: {
    type: String,
    enum: ['MultiPolygon'],
    required: true
  },
  coordinates: {
    type: [[[[Number]]]],
    required: true
  }
});

const PointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const pdv = new Schema({
  id: {
    type: Number,
    required: true
  },
  tradingName: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  document: {
    type: String,
    unique : true,
    dropDups: true,
    required: true
  },
  coverageArea: MultiPolygonSchema,
  address: PointSchema
});

pdv.index({ coverageArea: '2dsphere' });
pdv.index({ address: '2dsphere' });
const Pdv = model('Pdv', pdv);
export default Pdv;