import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema({
  g_fname: {
    type: String,
    unique: false,
    required: true
  },
  g_lname: {
    type: String,
    unique: false,
    required: true
  },
  g_street: {
    type: String,
    unique: false,
    required: true
  },
  g_city: {
    type: String,
    unique: false,
    required: true
  },
  g_state: {
    type: String,
    unique: false,
    required: true
  },
  g_zip: {
    type: Number,
    unique: false,
    required: true
  },
  g_hiredate: {
    type: Date,
    unique: false,
    required: true
  },
  g_qualifications: new mongoose.Schema([
    {
      tour_num: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tours'
      },
      qual_date:{
        type: Date
      }
    }
  ])
},{
  collection: 'employees'
});

const employeeModel = mongoose.model(employeeSchema);

export default employeeModel;