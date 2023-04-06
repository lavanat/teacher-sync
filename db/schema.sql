DROP DATABASE IF EXISTS teacher_db;
CREATE DATABASE teacher_db;

USE teacher_db;

--Parent Tabel
CREATE TABLE students (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL
);

--Child Table
CREATE TABLE grades (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    class_date DATE NOT NULL,
    grade INT NOT NULL,
    student_id INT NOT NULL
    FOREIGN KEY (student_id)
    REFERENCES students(id)
    ON DELETE SET NULL
)

--Child Table
CREATE TABLE attendance (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    class_date DATE NOT NULL,
    attendance VARCHAR (100) NOT NULL,
    student_id INT NOT NULL
    FOREIGN KEY (student_id)
    REFERENCES students(id)
    ON DELETE SET NULL
)

--Conduct
CREATE TABLE conduct (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    class_date DATE NOT NULL,
    conduct VARCHAR (1) NOT NULL,
    student_id INT NOT NULL
    FOREIGN KEY (student_id)
    REFERENCES students(id)
    ON DELETE SET NULL
)