var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/tokenizer', (err, db) => {
        if(err){
            return console.log(err);
        }
        closure(db);
    });
}

let response = {
    status: 200,
    message : null,
    data: []
}

var sendError = (err,res) => {
    response.status = 501;
    response.message = typeof err == "object" ? err.message : err;
    res.status(501).json(response);
}

router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users').find().toArray().then((users) => {
            response.data = users;
            res.json(response);
        })
    })
})

router.get('/projects', (req, res) => {
    connection((db) => {
        db.collection('projects').find().toArray().then((projects) => {
            response.data = projects;
            res.json(response);
        })
    })
})

router.post('/projects', function(req, res) {
    // Insert JSON straight into MongoDB
    connection((db) => {
        db.collection('projects').insert(req.body, function (err, result) {
            if (err)
                res.send('Error');
            else
                res.send('Success');
        })
 
   })
 });

 router.get('/groups', (req, res) => {
    connection((db) => {
        db.collection('projects').find().toArray().then((projects) => {
            response.data = projects;
            res.json(response);
        })
    })
})

router.get('/teams', (req, res) => {
    connection((db) => {
        db.collection('teams').find().toArray().then((teams) => {
            response.data = teams;
            res.json(response);
        })
    })
})

router.delete('/projects/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    connection((db) => {
        db.collection('projects').remove(details, (err, item) => {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send('Project ' + id + ' deleted!');
        } 
        });
    })
  });

module.exports = router;