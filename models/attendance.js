const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attendance extends Model {}

Attendance.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        class_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        attendance: {
          type: DataTypes.CHAR,
          allowNull: false,
        },
        student_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'student',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'attendance',
      }
);

module.exports = Attendance;