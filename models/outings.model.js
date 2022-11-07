import mongoose, { Schema } from "mongoose";

const outingSchema = new Schema({
  o_date: {
    type: Date,
    unique: false,
    required: true
  },
  t_num: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'tours'
    }
  ],
  g_empId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employees'
    }
  ] 
},{
  collection: 'outings'
});

const outingModel = mongoose.model(outingSchema);

export default outingModel;