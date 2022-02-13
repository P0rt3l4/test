
const Sequelize = require('sequelize')
const sequelize = require('../database');

    const Usuario = sequelize.define("usuarios",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        username: {
            allowNull: false,
            type: Sequelize.STRING
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING
        },
        perfil_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            defaultValue: 1                    
        },
        correo:{
            allowNull: false,
            type: Sequelize.STRING
        },
        telefono:{
            allowNull: false,
            type: Sequelize.STRING
        },
        estatus:{
            allowNull: false,
            type: Sequelize.INTEGER
        },
        fecha_creacion:{
            allowNull: true,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        fecha_actualizacion:{
            allowNull: true,
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        usuario_id_creacion:{
            allowNull: false,
            type: Sequelize.INTEGER,
            defaultValue: 1
        },
        usuario_id_actualizacion:{
            allowNull: false,
            type: Sequelize.INTEGER,
            defaultValue: 1
        },
        token:{
            allowNull: true,
            type: Sequelize.STRING
        },
        token_expiracion:{
            allowNull: true,
            type: Sequelize.DATE
        },
    },
    {
        createdAt: {
            field: 'fecha_creacion',
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            field: 'fecha_actualizacion',
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
    });


module.exports = Usuario;
