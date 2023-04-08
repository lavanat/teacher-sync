const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Grade extends Model {}

Grade.init(
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
        grade: {
          type: DataTypes.INTEGER,
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
        modelName: 'grade',
      }
);

module.exports = Grade;