'use strict';
const {
  DataTypes
} = require('sequelize');
const User = require('./user');
module.exports = (sequelize, DataTypes) => {

  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    projectManagerId: DataTypes.INTEGER,
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null
    }
  }, { paranoid: true });


  return Project;
};