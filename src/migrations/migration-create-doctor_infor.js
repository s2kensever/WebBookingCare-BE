'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('doctor_infor', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            doctorID: {
                type: Sequelize.STRING
            },
            priceID: {
                type: Sequelize.STRING
            },
            provinceID: {
                type: Sequelize.STRING
            },
            paymentID: {
                type: Sequelize.STRING
            },
            addressClinic: {
                type: Sequelize.STRING
            },
            nameClinic: {
                type: Sequelize.STRING
            },
            note: {
                type: Sequelize.TEXT
            },
            count: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('doctor_infor');
    }
};