var express = require('express')
var router = express.Router();
var request = require('request');
var bcrypt = require('bcrypt');
var db = require('../models');