var inquirer = require("inquirer");
var mysql = require("mysql")
require("console.table")

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database: "employeetracker"
})

connection.connect(function(error){
    if (error) throw error;
    displayHRsystem()
})

function displayHRsystem(){
    console.log("Welcome to Arl's Employee tracker");
    inquirer.prompt([
        {
            type:"list",
            name:"entry",
            choices:["View Employee", 
            "View Role","View Department","Add Department","Add Role","Add Employee","Exit App"]
        }
    ]).then(response => {
        switch(response.entry){
            case "View Employee":
                viewemployee();
                break;
            case "View Role":
                viewrole() ;
                break;
            case "View Department":
                viewdepartment();
                break;
            case  "Add Department"    :
                adddepartment();
                break;
            case "Add Role":
                addrole();
                break;
            case "Add Employee"        :
                addemployee();
                break;
            default:
                   connection.end();
                   process.exit(0)  
        } 
    
    })
}




function viewemployee(){
    connection.query("select * from employee", function(error, data){
        if (error) throw error;
        console.table(data)
        displayHRsystem()

    })
}



function viewrole(){
    connection.query("select * from role", function(error, data){
        if (error) throw error;
        console.table(data)
        displayHRsystem()

    })
}

function viewdepartment(){
    connection.query("select * from department", function(error, data){
        if (error) throw error;
        console.table(data)
       displayHRsystem()

    })
}


function adddepartment(){
   inquirer.prompt([
       {
           type: "input",
           message:"Enter department name",
           name:"name"
       }
   ]).then(function (response){
       connection.query("insert into department(name) values (?);",response.name,function(err,data){
           if (err) throw err;
           console.table("Added department",data)
           displayHRsystem()})
   })
}    

function addrole(){
    inquirer.prompt([
        {
            type: "input",
            message:"Enter Role Title",
            name:"title"
        },  {
            type: "input",
            message:"Enter Role salary",
            name:"salary"
        },  {
            type: "list",
            message:"Enter Role for department no",
            name:"department",
            choices: [1,2,3]
        }

    ]).then(function (response){
        connection.query("insert into role(title,salary,department_id) values (?,?,?);",[response.title,response.salary,response.department],function(err,data){
            if (err) throw err;
            console.table("Added roles for department",data)
            displayHRsystem()
    })
})
 }   
    
 function addemployee(){
    inquirer.prompt([
        {
            type: "input",
            message:"Enter employeefirstname",
            name:"firstname"
        },  {
            type: "input",
            message:"employeelastname",
            name:"lastname"
        },  {
            type: "list",
            message:"Enter Role id",
            name:"roleid",
            choices: [1,2,3]
        },
        {
            type: "list",
            message:"Enter manager id",
            name:"managerid",
            choices: [1,2,3]
        }

    ]).then(function (response){
        connection.query("insert into employee(first_name,last_name,role_id,manager_id) values (?,?,?,?);",[response.firstname,response.lastname,response.roleid,response.managerid],function(err,data){
            if (err) throw err;
            console.table("Added roles for department",data)
            displayHRsystem()
    })
})
 }   