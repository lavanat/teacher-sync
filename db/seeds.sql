INSERT INTO students (student_name)
VALUES ("Anna"),
       ("Bobby"),
       ("Cody"),
       ("Debra"),
       ("Elenor"),
       ("Frank"),
       ("Gabriel"),
       ("Henry"),
       ("Isabel"),
       ("John");

INSERT INTO grade (class_date, grade, student_id)
VALUES ("2023-04-03",95,1),
       ("2023-04-03",75,2),
       ("2023-04-03",35,3),
       ("2023-04-03",85,4),
       ("2023-04-03",91,5),
       ("2023-04-03",75,6),
       ("2023-04-03",92,7),
       ("2023-04-03",55,8),
       ("2023-04-03",99,9),
       ("2023-04-03",55,10),
       ("2023-04-04",35,1),
       ("2023-04-04",78,2),
       ("2023-04-04",75,3),
       ("2023-04-04",89,4),
       ("2023-04-04",41,5),
       ("2023-04-04",79,6),
       ("2023-04-04",72,7),
       ("2023-04-04",59,8),
       ("2023-04-04",89,9),
       ("2023-04-04",75,10),
       ("2023-04-05",39,1),
       ("2023-04-05",73,2),
       ("2023-04-05",77,3),
       ("2023-04-05",85,4),
       ("2023-04-05",81,5),
       ("2023-04-05",74,6),
       ("2023-04-05",92,7),
       ("2023-04-05",39,8),
       ("2023-04-05",84,9),
       ("2023-04-05",79,10),
       ("2023-04-06",79,1),
       ("2023-04-06",74,2),
       ("2023-04-06",87,3),
       ("2023-04-06",83,4),
       ("2023-04-06",91,5),
       ("2023-04-06",79,6),
       ("2023-04-06",42,7),
       ("2023-04-06",79,8),
       ("2023-04-06",89,9),
       ("2023-04-06",39,10),
       ("2023-04-07",72,1),
       ("2023-04-07",64,2),
       ("2023-04-07",84,3),
       ("2023-04-07",73,4),
       ("2023-04-07",41,5),
       ("2023-04-07",77,6),
       ("2023-04-07",62,7),
       ("2023-04-07",73,8),
       ("2023-04-07",82,9),
       ("2023-04-07",79,10);

INSERT INTO attendance (class_date, attendance, student_id)
VALUES ("2023-04-03","Present",1),
       ("2023-04-03","Present",2),
       ("2023-04-03","Present",3),
       ("2023-04-03","Present",4),
       ("2023-04-03","Present",5),
       ("2023-04-03","Present",6),
       ("2023-04-03","Present",7),
       ("2023-04-03","Present",8),
       ("2023-04-03","Present",9),
       ("2023-04-03","Present",10),
       ("2023-04-04","Present",1),
       ("2023-04-04","Present",2),
       ("2023-04-04","Present",3),
       ("2023-04-04","Present",4),
       ("2023-04-04","Present",5),
       ("2023-04-04","Absent",6),
       ("2023-04-04","Present",7),
       ("2023-04-04","Present",8),
       ("2023-04-04","Present",9),
       ("2023-04-04","Present",10),
       ("2023-04-05","Present",1),
       ("2023-04-05","Present",2),
       ("2023-04-05","Present",3),
       ("2023-04-05","Present",4),
       ("2023-04-05","Present",5),
       ("2023-04-05","Present",6),
       ("2023-04-05","Present",7),
       ("2023-04-05","Present",8),
       ("2023-04-05","Present",9),
       ("2023-04-05","Absent",10),
       ("2023-04-06","Present",1),
       ("2023-04-06","Present",2),
       ("2023-04-06","Present",3),
       ("2023-04-06","Present",4),
       ("2023-04-06","Present",5),
       ("2023-04-06","Present",6),
       ("2023-04-06","Present",7),
       ("2023-04-06","Present",8),
       ("2023-04-06","Present",9),
       ("2023-04-06","Present",10),
       ("2023-04-07","Present",1),
       ("2023-04-07","Present",2),
       ("2023-04-07","Present",3),
       ("2023-04-07","Absent",4),
       ("2023-04-07","Present",5),
       ("2023-04-07","Present",6),
       ("2023-04-07","Present",7),
       ("2023-04-07","Present",8),
       ("2023-04-07","Present",9),
       ("2023-04-07","Present",10);

INSERT INTO conduct (class_date, conduct, student_id)
VALUES ("2023-04-03","A",1),
       ("2023-04-03","A",2),
       ("2023-04-03","D",3),
       ("2023-04-03","C",4),
       ("2023-04-03","B",5),
       ("2023-04-03","A",6),
       ("2023-04-03","F",7),
       ("2023-04-03","B",8),
       ("2023-04-03","B",9),
       ("2023-04-03","A",10),
       ("2023-04-04","D",1),
       ("2023-04-04","B",2),
       ("2023-04-04","A",3),
       ("2023-04-04","C",4),
       ("2023-04-04","B",5),
       ("2023-04-04","D",6),
       ("2023-04-04","D",7),
       ("2023-04-04","B",8),
       ("2023-04-04","C",9),
       ("2023-04-04","C",10),
       ("2023-04-05","A",1),
       ("2023-04-05","A",2),
       ("2023-04-05","C",3),
       ("2023-04-05","B",4),
       ("2023-04-05","B",5),
       ("2023-04-05","A",6),
       ("2023-04-05","C",7),
       ("2023-04-05","C",8),
       ("2023-04-05","B",9),
       ("2023-04-05","A",10),
       ("2023-04-06","C",1),
       ("2023-04-06","C",2),
       ("2023-04-06","F",3),
       ("2023-04-06","A",4),
       ("2023-04-06","B",5),
       ("2023-04-06","B",6),
       ("2023-04-06","B",7),
       ("2023-04-06","D",8),
       ("2023-04-06","C",9),
       ("2023-04-06","A",10),
       ("2023-04-07","B",1),
       ("2023-04-07","A",2),
       ("2023-04-07","C",3),
       ("2023-04-07","B",4),
       ("2023-04-07","D",5),
       ("2023-04-07","C",6),
       ("2023-04-07","B",7),
       ("2023-04-07","A",8),
       ("2023-04-07","A",9),
       ("2023-04-07","F",10);

    