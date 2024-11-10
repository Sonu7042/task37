const express = require("express");
const mongoConnect = require("./db");
const mongoose = require("mongoose");
const cors= require('cors')

mongoConnect();
const app = express();
app.use(express.json());
app.use(cors())

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});
const studentModel = mongoose.model("student", studentSchema);

app.post("/save", async (req, res) => {
  try {
    const student = req.body;
    const saveStudent = await studentModel.create(student);
    res.status(201).json({
      message: "Student save Successfully",
      error: false,
      success: true,
      data: saveStudent,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      success: false,
      error: true,
    });
  }
});

app.get("/", async (req, res) => {
  try {
    const average= await studentModel.aggregate([
        {
            $group: {
              _id: null,
              average: { $avg: "$age" },
            }
          }
    ])

    const student = await studentModel.aggregate([
      {
        $group: {
          _id: "$age",
          name: {$push:"$name"},
          count: { $sum: 1 },
        }
      },

      {
        $sort: { _id: 1 },
      },
      
    ]);


    

    res.status(200).json({
      message: "Student got successfully",
      success: true,
      error: false,
      data:[student, average]
    });

  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      success: false,
      error: true,
    });
  }
});

app.listen(9000, () => console.log("server is listening..."));
