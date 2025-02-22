const express=require('express')
var app=express()
let students=[
    {"id":"1","names":"Raj","branch":"IT"},
    {"id":"2","name":"Ram","branch":"CSE"}
]
app.get("/students",(req,res)=>{
    res.json(students)
})
  const id=req.params.id
    let student=students.find(s=>s.id==id)
   app.get("/student/:id",(req,res)=>{
   if(student){
        res.status(200).json({
            "message":"studentfound","student":student
        })
    }
    else{
        res.status(404).json({"message":"student not found"})
    }
})
// app.delete("/deletestudent/:id",(req,res)=>{
//     const id=req.params.id
//    let stud=students.find(s=>s.id==id)
//    if(stud){
//     students=students.filter(s=>s.id!=id)
//     res.status(200).json({
//        "message":"Deleted successfully","student":students
//     })}
//     else{
//         res.status(404).json({"message":"student not found"}) 
//     }
// })
app.listen(3000,()=>{
    console.log("server started on http://localhost:3000")
})
// app.use(express.json())
// app.post("/addstudent",(req,res)=>{
//     let student=req.body
//     students.push(student)
//     res.status(200).json({
//         "message":"student added succesfully",
//         "students":students
//     })
// })

// app.put("/updatestudent/:id",(req,res)=>{
//     const id=req.params.id
//     studentIndex=students.findIndex(s=s.id==id)
//     if(studentIndex!=-1){
//         students[studentIndex].name=req.body.name
//         students[studentIndex].branch=req.body.branch
//         res.status(200).json({
//             "message":"student added succesfully",
//             "students":students
//         })
//     }

// })