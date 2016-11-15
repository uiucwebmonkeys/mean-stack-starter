/*
 * Connect all of your endpoints together here.
 */

var Task = require('../models/task.js');

module.exports = function (app, router) {
    app.get('/api/tasks', function(req, res) {
        Task.find(function(err, tasks) {
            if (err)
                res.send(err);

            res.json(tasks); // return all nerds in JSON format
        });
    });

    app.post('/api/tasks', function(req, res) {
        Task.create({
            name : req.body.name,
        }, function(err, todo) {
            if (err)
                res.send(err);

            Task.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });
};
