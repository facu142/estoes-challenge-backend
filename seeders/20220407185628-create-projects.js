'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('projects', [
      {
        name: 'Project 1',
        description: 'Project 1 description',
        status: true,
        projectManagerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Project 2',
        description: 'Project 2 description',
        status: true,
        projectManagerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('', null, {});
     */
  }
};
