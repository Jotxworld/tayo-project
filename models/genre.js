/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = Schema({
    name:{type: String, required: true, min: 3, max: 100}
   });
   
   GenreSchema
           .virtual('url')
           .get(function(){
               return '/catalog/genre/' + this._id;
           });
           
   module.exports = mongoose.model('Genre', GenreSchema);
