const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {
}

// Student.hasMany(Attendance);
// Attendance.belongsTo(Student, {
//     onDelete: 'SET NULL'
// });

Student.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      student_name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'students',
    }
  );

  module.exports = Student;