import express from 'express';
import sqlite3 from 'sqlite3';
const app = express();


const dbPath = '/home/daniel/.local/share/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db';
async function db() {
    new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Conexión exitosa a la base de datos SQLite');
    });
}

export default db