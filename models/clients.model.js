import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema({
  c_fname: {
    type: String,
    unique: false,
    required: true
  },
  c_lname: {
    type: String,
    unique: false,
    required: true
  },
  c_street: {
    type: String,
    unique: false,
    required: true
  },
  c_city: {
    type: String,
    unique: false,
    required: true
  },
  c_state: {
    type: String,
    unique: false,
    required: true
  },
  c_zip: {
    type: Number,
    unique: false,
    required: true
  },
  c_status: {
      type: String,
      unique: false,
      required: true
  },
  c_booking: new mongoose.Schema([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'outings'
    }
  ]),
},
{
  collection: 'clients'
});

const clientModel = mongoose.model(clientSchema);

export default clientModel;