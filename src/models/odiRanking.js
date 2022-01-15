const express = require('express');
const mongoose = require('mongoose');
/* define schema */
const ranking = new mongoose.Schema({
    position : {
        type : Number,
        required : true,
        unique : true,
    },
    team : {
        type : String,
        required : true,
        trim : true
    }, 
    matches : {
        type : Number,
        required : true
    },
    points : {
        type : Number,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    
})
/* create collection */
const ODIRanking = new mongoose.model("ODI-Ranking", ranking);
/* export module */
module.exports = ODIRanking;