import { Sequelize, DataTypes } from "sequelize";


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/home/daniel/.local/share/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db', // Ruta a tu base de datos SQLite
});

const Products = sequelize.define('Products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


export default Products;