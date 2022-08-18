'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('booking', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            statusID: {
                type: Sequelize.STRING
            },
            doctorID: {
                type: Sequelize.STRING
            },
            patientID: {
                type: Sequelize.STRING
            },
            date: {
                type: Sequelize.DATE
            },
            timeType: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('booking');
    }
};