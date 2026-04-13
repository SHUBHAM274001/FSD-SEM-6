const express=require('express');
const app=express();
const port=8000;
app.use(express.json());
//data base(json)
const student=[
    {id:1,name:"Deepak",class:"B.Tech"},
    {id:2,name:"Rahul",class:"BCA"},
    {id:3,name:"Priya",class:"B.Sc"}
];
//API for read(R)
app.get('/',(req,res)=>{
    res.json(student);
});

///api for read(for id)
app.get('/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const student=students.find(s=>s.id===id);
    if(!student){
        return res.status(404).json({message:"Student not found"});
    }
    res.json(student);
});
//api for create(C)
app.post('/add',(req,res)=>{
    const newStudent={
        id:student.length+1,
        ...req.body
    }
    student.push(newStudent);
    res.json({message:"Student add",student:newStudent});
});
//api delete(D)
app.delete('/delete/:id',(req,res)=>{
    const id=parseInt(req.params.id);   
    const studentIndex=student.findIndex(s=>s.id===id);
    res.json({message:"Student deleted",student:student[studentIndex]});

});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});