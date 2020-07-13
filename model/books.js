const Sequelize = require('sequelize')
const connection = require('../config/sequileze')

class Model extends Sequelize.Model{}
Model.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        judul:Sequelize.STRING(225),
        deskripsi: Sequelize.STRING(255),
        harga: Sequelize.STRING(11),
        author:Sequelize.STRING(128),
        isbn_no:Sequelize.STRING(128),
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
        deleted_at:Sequelize.DATE,
    },{
        createdAt: 'created_at',
        deletedAt: 'deleted_at',
        updatedAt: 'updated_at',
        freezeTableName: true,
        timestamps:true,
        paranoid:true,
        underscored:true,
        sequelize:connection,
        modelName:'books',
        tableName: 'books',
    }
);
module.exports = model;