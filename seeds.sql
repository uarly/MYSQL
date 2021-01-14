use employeetracker;

insert into department(name) values ("customer");
insert into department(name) values ("Marketing");
insert into department(name) values ("Sales");
insert into department(name) values ("Managment");

select * from department;

insert into role(title,salary,department_id)
values("Manager",3043,1);

insert into role(title,salary,department_id)
values("Manager",3043,2);

insert into role(title,salary,department_id)
values("Manager",3043,3);

insert into role(title,salary,department_id)
values("Manager",3043,4);

insert into role(title,salary,department_id)
values("Customer Representative",2043,1);

insert into role(title,salary,department_id)
values("Advertising lead",3243,2);

insert into role(title,salary,department_id)
values("Sales Rep",2043,3);

insert into role(title,salary,department_id)
values("HR lead",2043,4);


select * from role;

insert into employee(first_name,last_name,role_id) values
("John","Doe",1);
insert into employee(first_name,last_name,role_id) values
("Walter","Doe",2);
insert into employee(first_name,last_name,role_id) values
("Tyler","Doe",3);
insert into employee(first_name,last_name,role_id) values
("Ernest","Doe",4);

select * from employee;

insert into employee(firsT_name,last_name,role_id,manager_id)
values("Johin","Smith",5,1);


insert into employee(firsT_name,last_name,role_id,manager_id)
values("Bob","Smith",6,2);



insert into employee(firsT_name,last_name,role_id,manager_id)
values("Marc","Smith",7,3);



insert into employee(firsT_name,last_name,role_id,manager_id)
values("Kayla","Smith",8,4);


select * from employee;




