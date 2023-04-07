const User = require('./user');
const Students = require('./student')
const Conduct = require('./conduct')
const Grades= require('./grade')
const Attendance = require('./attendance')

Students.hasMany(Conduct,{
foreignKey: "student_id",
onDelete: "CASCADE"
});

Conduct.belongsTo(Students,{
    foreignKey: "student_id"
});

Students.hasMany(Grades,{
foreignKey: "student_id",
onDelete: "CASCADE"
});

Grades.belongsTo(Students,{
    foreignKey: "student_id"
});

Students.hasMany(Attendance,{
foreignKey: "student_id",
onDelete: "CASCADE"
});

Attendance.belongsTo(Students,{
    foreignKey: "student_id"
});

module.exports = { User, Students, Grades, Attendance, Conduct};