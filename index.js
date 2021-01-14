var inquirer = require("inquirer");
var mysql = require("mysql")
require("console.table")

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    passwrd:"Smaia123",
    database: "employeetracker"
})

connection.connect(function(error){
    if (error) throw error;
    displayHRsystem()
})

function displayHRsystem(_){
    console.log("Welcome to Arl's Employee tracker")
}