import { Sequelize, DataTypes } from "sequelize";
import generateId from '../helpers/generateId.js'
import bcrypt from "bcrypt"

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '/home/daniel/.local/share/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db', // Ruta a tu base de datos SQLite
});

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.STRING,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        defaultValue: generateId()
    },
})

Users.beforeCreate(async (user, options) => {
    if (user.changed('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
    }
});

Users.prototype.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
};

export default Users;