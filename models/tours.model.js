import mongoose, { Mongoose, Schema } from "mongoose";

const toursSchema = new Schema({
  t_name: {
    type: String,
    unique: false,
    required: true
  },
  t_length: {
    type: Number,
    unique: false,
    required: true
  },
  t_fee: {
    type: Number,
    unique: false,
    required: true
  },
  stop: new mongoose.Schema([
    {
      location: new mongoose.Schema({
        loc_name: {
          type: String,
          unique: false,
          required: true
        },
        loc_type: {
          type: String,
          unique: false,
          required: true
        },
        loc_desc: {
          type: String,
          unique: false,
          required: true
        }
      })
    }
  ])
},{
  collection: 'tours'
});

const toursModel = mongoose.model(toursSchema);

export default toursModel;