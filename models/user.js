'use strict';
const {
  Model
} = require('sequelize');
const Project = require('./project');
const usersprojects = require('./usersprojects');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {});

  // User.associate = (models) => {
  //   // associations can be defined here
  //   // User.belongsToMany(models.Project, {
  //   //   as: 'projects',
  //   //   foreignKey: 'userId',
  //   // });
  // };

  return User;
};