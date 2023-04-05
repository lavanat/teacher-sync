DROP DATABASE IF EXISTS teacher_db;
CREATE DATABASE teacher_db;

USE teacher_db;

CREATE TABLE students (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL
);

CREATE TABLE grades (
    grade_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    class_date DATE NOT NULL,
    grade INT NOT NULL,
    student_id INT NOT NULL
    FOREIGN KEY (student_id)
    REFERENCES students(id)
    ON DELETE SET NULL
)