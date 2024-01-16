'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Jayprakash Narayan International Airport',
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jaipur International Airport',
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kempegowda International Airport',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysuru Airport',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mengaluru International Airport',
        cityId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
