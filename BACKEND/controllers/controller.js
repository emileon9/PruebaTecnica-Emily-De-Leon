import { db } from "../DB/conection.js";


//METODO CREAR PRODUCTO

export const createProduct = (req, res) => {
    const { EAN, OEM, imagen, descripcion, nombre, idCat, idMarca, color } = req.body;
    const sql = "INSERT INTO Productos (EAN, OEM, imagen, descripcion, nombre, idCat, idMarca, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [EAN, OEM, imagen, descripcion, nombre, idCat, idMarca, color], (err, result) => {
        if (err) return res.status(500).json({ messaege: 'Error al crear el producto', error: err });
        res.status(200).json({ message: 'Producto creado correctamente', id: result.insertId });
    });
}

//METODO OBTENER PRODUCTOS
export const getProducts = (req, res) => {
    const sql = "SELECT * FROM Productos";

    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ messaege: 'Error al obtener los productos', error: err });
        res.status(200).json(result);
    });
}

//BUSCAR PRODUCTO POR ID
export const getProductById = (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM Productos WHERE EAN = ?";

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Error al obtener el producto', error: err });
        res.status(200).json(result[0]);
    });
}

//FILTRAR PRODUCTOS POR CATEGORIA
export const getProductsByCategory = (req, res) => {
    const { nombre } = req.params;
    const sql = "SELECT * FROM Productos P INNER JOIN Categoria C ON P.idCat = C.idCategoria WHERE C.nombre = ?";

    db.query(sql, [nombre], (err, result) => {
        if (err) return res.status(500).json({ message: 'Error al obtener los productos', error: err });
        res.status(200).json(result);
    });
}

//FILTRAR POR COLOR 
export const getProductsByColor = (req, res) => {
    const { color } = req.params;
    const sql = "SELECT * FROM Productos WHERE color = ?";

    db.query(sql, [color], (err, result) => {
        if (err) return res.status(500).json({ message: 'Error al obtener los productos', error: err });
        res.status(200).json(result);
    });
}

//FILTRAR POR NOMBRE 
export const getProductsByName = (req, res) => {
    const { nombre } = req.params;
    const sql = "SELECT * FROM Productos WHERE nombre LIKE ?";

    db.query(sql, [`%${nombre}%`], (err, result) => {
        if (err) return res.status(500).json({ message: 'Error al obtener los productos', error: err });
        res.status(200).json(result);
    });
}