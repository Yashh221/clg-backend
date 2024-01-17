/*import express from "express";
import dotenv from "dotenv";
// import * as path from "path";
import { model as classRoomModel} from "./models/classRoom.js";
import { model as classRoomModel} from "./models/classRoom.js";
import { model as studentModel} from "./models/student.js";
import { model as teacherModel} from "./models/teacherData.js";
import { model as timetableModel} from "./models/timetable.js";
import connectDB from "./config/db.js";
// import cors from "cors";
// import questionRouter from "./routes/questionRoutes";
dotenv.config();
const app = express();
app.use(express.json())
import { model as studentModel} from "./models/student.js";
import { model as teacherModel} from "./models/teacherData.js";
import { model as timetableModel} from "./models/timetable.js";
import connectDB from "./config/db.js";
// import cors from "cors";
// import questionRouter from "./routes/questionRoutes";
dotenv.config();
const app = express();
app.use(express.json())
connectDB();
const PORT = process.env.PORT || "6000";
app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
});

app.post("/api/classRoom",async(req,res)=>{
    try {
        //console.log(req.body)
        const { buildingName, floorNo, roomNo, capacity, type} = req.body;
        const newClassRoomData = new model({
            buildingName,
            floorNo,
            roomNo,
            capacity,
            type
        })
        await newClassRoomData.save();
        res.status(200).json({message:"success",json:newClassRoomData})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        
    }

})


app.post("/api/Teacher",async(req,res)=>{
    try {
        console.log(req.body)
        const { Name, DOB, Gender, Age, Qualification, PhoneNo, Subjects} = req.body;
        const newTeacherData = new model({
            Name,
            DOB,
            Gender,
            Age,
            Qualification,
            PhoneNo,
            Subjects
        })
        await newTeacherData.save();
        res.status(200).json({message:"success",json:newTeacherData})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        
    }

})

app.post("/api/Student",async(req,res)=>{
    try {
        console.log(req.body)
        const { SName, SDOB, Division, USN, Rno, Sem, Course} = req.body;
        const newStudentData = new model({
            SName,
            SDOB,
            Division,
            USN,
            Rno,
            Sem,
            Course
        })
        await newStudentData.save();
        res.status(200).json({message:"success",json:newStudentData})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        
    }

})

app.post("/api/Timetable",async(req,res)=>{
    try {
        console.log(req.body)
        const { BName, RoomNo, Date, Subject, Sem, Time} = req.body;
        const newTimetableData = new model({
            BName,
            RoomNo,
            Date,
            Subject,
            Sem,
            Time
        })
        await newTimetableData.save();
        res.status(200).json({message:"success",json:newTimetableData})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        
    }

})
*/
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ClassRoomModel } from "./models/classRoom.js";
import { model as StudentModel } from "./models/student.js";
import { model as TeacherModel } from "./models/teacherData.js";
import { model as TimetableModel } from "./models/timetable.js";
import { model as AttendanceModel } from "./models/attendance.js";
import { model as LoginDataModel } from "./models/login.js";

import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
const PORT = process.env.PORT || "6000";
app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
});

app.post("/api/Login", async (req, res) => {
  try {
    console.log(req.body);
    const { User, Password, Role } = req.body;
    const newLoginData = new LoginDataModel({
      User,
      Password,
      Role,
    });
    await newLoginData.save();
    res.status(200).json({ message: "success", json: newLoginData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/classRoom", async (req, res) => {
  try {
    const { buildingName, floorNo, roomNo, capacity, type } = req.body;
    const newClassRoomData = await ClassRoomModel.create({
      buildingName,
      floorNo,
      roomNo,
      capacity,
      type,
    });
    res.status(200).json({ message: "success", data: newClassRoomData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/Teacher", async (req, res) => {
  try {
    const { Name, DOB, Gender, Age, Qualification, PhoneNo, Subjects } =
      req.body;
    const newTeacherData = new TeacherModel({
      Name,
      DOB,
      Gender,
      Age,
      Qualification,
      PhoneNo,
      Subjects,
    });
    await newTeacherData.save();
    res.status(200).json({ message: "success", json: newTeacherData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/Student", async (req, res) => {
  try {
    const { SName, SDOB, Division, USN, Rno, Sem, Course } = req.body;
    const newStudentData = new StudentModel({
      SName,
      SDOB,
      Division,
      USN,
      Rno,
      Sem,
      Course,
    });
    await newStudentData.save();
    res.status(200).json({ message: "success", json: newStudentData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/Timetable", async (req, res) => {
  try {
    const { BName, RoomNo, Date, Subject, Sem, Time } = req.body;
    const newTimetableData = new TimetableModel({
      BName,
      RoomNo,
      Date,
      Subject,
      Sem,
      Time,
    });
    await newTimetableData.save();
    res.status(200).json({ message: "success", json: newTimetableData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/Attendance", async (req, res) => {
  try {
    const { Buname, RoomNo, Absentees } = req.body;
    const newAttendanceData = new AttendanceModel({
      Buname,
      RoomNo,
      Absentees,
    });
    await newAttendanceData.save();
    res.status(200).json({ message: "success", json: newAttendanceData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
