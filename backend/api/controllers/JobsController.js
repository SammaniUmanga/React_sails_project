/**
 * JobsController
 *
 * @description :: Server-side logic for managing jobs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    // add job
    addjob: function(req, res) {
        Jobs.create(req.body).exec(function (err, newJob) {
           if (err) {
               return res.serverError(err);
           }
               return res.send({ message: "SUCCESS", data: newJob})
        });
    },






};

