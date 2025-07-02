     db.posts.insertMany([
  { _id: "p1", post: "post1" },
  { _id: "p2", post: "post2" }
 ])

db.comments.insertMany([
    {_id:"c1",pid:"p1",comment:"Comment1"},
    {_id:"c2",pid:"p1",comment:"Comment2"},
    {_id:"c3",pid:"p2",comment:"Comment1"},
    {_id:"c4",pid:"p2",comment:"Comment2"},
    {_id:"c5",pid:"p2",comment:"Comment3"}
])

db.posts.aggregate([
    {
        $lookup:{
            from:"comments",
            localField:"_id",
            foreignField:"pid",
            as:"comments",
        },
    },
    {$unwind:"$comments"},
    {$Project:{_id:0,post:1,"comments.comment":1}}
]);


db.result.insertMany([
    {name:"Diya",term:"t1",subject:"Maths",score:95},
    {name:"Diya",term:"t2",subject:"Maths",score:90},
    {name:"Diya",term:"t3",subject:"Maths",score:91},
    {name:"Diya",term:"t1",subject:"Science",score:97},
    {name:"Diya",term:"t2",subject:"Science",score:100},
    {name:"Diya",term:"t3",subject:"Science",score:93},
    {name:"Mohit",term:"t1",subject:"Maths",score:92},
    {name:"Mohit",term:"t2",subject:"Maths",score:91},
    {name:"Mohit",term:"t3",subject:"Maths",score:90},
    {name:"Mohit",term:"t1",subject:"Science",score:98},
    {name:"Mohit",term:"t2",subject:"Science",score:96},
    {name:"Mohit",term:"t3",subject:"Science",score:89},
])

db.result.aggregate([
    {$group:{_id:"$name",Avgscore:{$avg:"$score"}}},
    {$sort:{_id:1}}
])

db.result.aggregate([
    {$group:{_id:"$name",Avgscore:{$avg:"$score"}}},
    {$match:{_id:"Mohit"}}
])

db.studentinfo.insertOne({ _id:"s1",name:"Diya"})
db.studentinfo.insertOne({ _id:"s2",name:"Mohit"})

db.result.updateMany({},{$rename:{name:"sid"}});

db.result.updateMany()

db.studentinfo.aggregate([
    {
        $lookup:{
            from:"result",
            localField:"_id",
            foreignField:"sid",
            as:"result"
        },
    },
    {$unwind:"$marks"},
])

db.employees.aggregate([
    {$project:
        {
            _id:0,
            name:1,
            salary:1,
            Grade:{$cond:{if:{$gt:["salary",3000]},then:"Grade A",else:"Grade B"}}
        }
    },
    {
        $out:"GradeWiseSalary"
    }
])

db.createView("salaryView","employees"[
    {
        $project:
        {
            _id:0,
            name:1,
            salary:1,
            Grade:{$cond:{if:{$gt:["salary",3000]},then:"Grade A",else:"Grade B"}}
        }
    },
    
])