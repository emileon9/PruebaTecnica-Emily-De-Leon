import mysql from 'mysql2'

//aqui conectamos a la base de datos
export const db = mysql.createConnection({
    host: 'database-1.cgrkeck8stlt.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Db_prueba#1',
    database: 'databaseprueba',
    port: '3306'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err)
        return
    }
    console.log('Connected to the database')
});