'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Current timestamp for createdAt and updatedAt
    const timestamp = new Date();

    // Inserting data into the Books table
    await queryInterface.bulkInsert('Books', [
      {
        name: 'The Hobbit',
        author: 'J.R.R. Tolkein',
        year_published: 1937,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        year_published: 1997,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year_published: 1925,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
      {
        name: '1984',
        author: 'George Orwell',
        year_published: 1949,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Deleting all entries from the Books table
    await queryInterface.bulkDelete('Books', null, {});
  },
};
