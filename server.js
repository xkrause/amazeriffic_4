var express = require("express"),
    http = require("http"),
    app = express(),
    //define the todos list
    toDos = [
        { 
            "description" : "Get groceries",
            "tags"  : [ "shopping", "chores" ]
        },
        { 
            "description" : "Make up some new ToDos",
            "tags"  : [ "writing", "work" ]
        },
        {
            "description" : "Prep for Monday's class",
            "tags"  : [ "work", "teaching" ]
        },
        { 
            "description" : "Answer emails",
            "tags"  : [ "work" ]
        },
        { 
            "description" : "Take Gracie to the park",
            "tags"  : [ "chores", "pets" ]
        },
        { 
            "description" : "Finish writing this book",
            "tags"  : [ "writing", "work" ]
        }
    ]
        
app.use(express.static(__dirname + "/client"));

// tell Express to parse the incoming
// JSON objects
app.use(express.urlencoded());

http.createServer(app).listen(3000);

// This route takes the place of our
// todos.json file in our example from
// Chapter 5
app.get("/todos.json", function (req, res) {
    res.json(toDos);
});

app.post("/todos", function (req, res) {
    //now the object is stored in req.body
    var newToDo = req.body;

    console.log(newToDo);

    toDos.push(newToDo);

    //confirm that data was posted to the server
    res.json({"message":"You posted to the server!"});
});