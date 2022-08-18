'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('markdown', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            doctorID: {
                type: Sequelize.STRING
            },
            clinicID: {
                type: Sequelize.STRING
            },
            specialtyID: {
                type: Sequelize.STRING
            },
            contentHTML: {
                type: Sequelize.STRING
            },
            contentMarkdown: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('markdown');
    }
};