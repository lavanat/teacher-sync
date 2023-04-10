DROP DATABASE IF EXISTS teacher_db;
CREATE DATABASE teacher_db;

USE teacher_db;

-- Teacher Table
CREATE TABLE teachers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    teacher_name VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Parent Table
CREATE TABLE students (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL
);

-- Child Table
CREATE TABLE grade (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    class_date DATE NOT NULL,
    grade INT NOT NULL,
    student_id INT,
    FOREIGN KEY (student_id)
    REFERENCES students(id)
    ON DELETE SET NULL
);

-- Child Table
CREATE TABLE attendance (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    class_date DATE NOT NULL,
    attendance VARCHAR (100) NOT NULL,
    student_id INT,
    FOREIGN KEY (student_id)
    REFERENCES students(id)
    ON DELETE SET NULL
);

-- Child Table
CREATE TABLE conduct (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    class_date DATE NOT NULL,
    conduct VARCHAR (1) NOT NULL,
    student_id INT,
    FOREIGN KEY (student_id)
    REFERENCES students(id)
    ON DELETE SET NULL
);