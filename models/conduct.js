const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Conduct extends Model {}

Conduct.init(
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
        conduct: {
          type: DataTypes.CHAR,
        },
        student_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'conduct',
      }
);

module.exports = Conduct;