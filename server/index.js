import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
const db = createConnection({
    user: 'root',
    host:'localhost',
    password: 'YOURPASSWORD',
    database: 'employeesystem'
})

app.post('/create',(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const salary = req.body.salary;

    db.query('INSERT INTO employees(name,age,country,position,salary) VALUES (?,?,?,?,?)',
    [name,age,country,position,salary],
    (err,result)=>{
        if (err){
            console.log(err);
        }else{
            res.send("Values Inserted");
        }
    })
});

app.get('/employees',(req,res)=>{
    db.query(
        'SELECT * FROM employeesystem.employees',
        (err,result)=>{
            if (err){
                console.log(err);
            }else{
                res.send(result);
            } 
        }
    )
})

app.listen(5000,()=>console.log("Server running on port 5000"));