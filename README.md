# Node-MySQL-React
 CRUD porject using node, mySQL and React
 
 # Required 
Node.js

NPM node pagage management

MySQL: Create a database before running the application. 
You can use any database visual design tool such as mySQL Workbench or sQLyog.
1. Create a database named employeesystem.
2. in employeesystem database, create a employees.
3. employees table should have the following attributes:
4. Table create:

Field     Type
id        int NOT NULL

name      text NOT NULL

age       int NOT NULL

country   text NOT NULL

position  text NOT NULL

salary    int NOT NULL

CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `age` int NOT NULL,
  `country` text NOT NULL,
  `position` text NOT NULL,
  `salary` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3


Client side: 

Axios: send request to server


Server side:

Express: node.js Web Framework

mysql: database for connect and CRUD

cors: Cross-origin-resource-sharing


#How to run:
1. For client side: run "npm start" in client directory. If complied success, your default browser will promot at http://localhost:3000
2. For server side: run "node index.js" in server directory. "Server running on port 5000" will print in console if success.

You can insert new employee or display current employees in the database.
