# Backend - Spring Boot (Employee Management)
Requirements:
- Java 17+
- Maven
- MySQL running and a database configured

Steps:
1. Edit src/main/resources/application.properties and set spring.datasource.username and spring.datasource.password
2. Run `mvn spring-boot:run` from the backend directory.
API endpoints:
GET /api/employees
GET /api/employees/{id}
POST /api/employees
PUT /api/employees/{id}
DELETE /api/employees/{id}
