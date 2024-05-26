const fs = require("fs/promises")
const path = require("path")
const crypto = require("crypto");

exports.putProveedor = async function (req, res) {
    const id = crypto.randomBytes(10).toString("hex");
    let nuevo = req.request.body
    nuevo.id = id
    nuevo.fecha_creado = new Date().toDateString()
    const pathJson = path.join(__dirname, '../bd.json')
    let data = await fs.readFile(pathJson, 'utf-8')
    let myObject = JSON.parse(data);
    let dublicados = 0
    myObject.forEach(function (currentValue, index, arr) {
        if (myObject[index].nombre == nuevo.nombre) {
            dublicados++
        }
    })
    if (dublicados > 0) {
        req.body = {
            mensaje: "El nombre que decea ingresar esta duplicado, intente con otro nombre"
        }
    } else {
        myObject.push(nuevo)
        await fs.writeFile(pathJson, JSON.stringify(myObject))
        req.body = {
            mensaje: "nuevo proveedor ingresado"
        }
    }

}

exports.getProveedores = async function (req, res) {
    try {
        let inicio = req.query.inicio
        let limite = req.query.limite
        const pathJson = path.join(__dirname, '../bd.json')
        const data = await fs.readFile(pathJson, 'utf-8')
        req.body = JSON.parse(data).slice(inicio, limite);
    } catch {
        req.body = "ocurrio un error inesperado"
    }
}

exports.deleteProveedor = async function (req, res) {
    const pathJson = path.join(__dirname, '../bd.json')
    let data = await fs.readFile(pathJson, 'utf-8')
    let myObject = JSON.parse(data);
    let eliminados = 0
    let mensaje
    myObject.forEach(function (currentValue, index, arr) {
        if (myObject[index].id == req.params.id) {
            myObject.splice(index, 1);
            eliminados++
        }
    })
    if (eliminados > 0) {
        mensaje = "Proveedor eliminado"
    } else {
        mensaje = "No se encontro coincidencia"
    }
    await fs.writeFile(pathJson, JSON.stringify(myObject))
    req.body = {
        mensaje: mensaje
    }
}

exports.getProveedor = async function (req, res) {
    const pathJson = path.join(__dirname, '../bd.json')
    let data = await fs.readFile(pathJson, 'utf-8')
    let myObject = JSON.parse(data);
    let encontrados = 0
    let mensaje
    let proveedor = ""
    myObject.forEach(function (currentValue, index, arr) {
        if (myObject[index].id == req.params.id) {
            proveedor = myObject[index]
            encontrados++
        }
    })
    if (encontrados > 0) {
        mensaje = "Proveedor encontrado"
    } else {
        mensaje = "No se encontro coincidencia"
    }
    req.body = {
        mensaje: mensaje,
        proveedor: proveedor
    }
}

exports.postProveedor = async function (req, res) {
    let nuevo = req.request.body
    nuevo.id = req.params.id
    const pathJson = path.join(__dirname, '../bd.json')
    let data = await fs.readFile(pathJson, 'utf-8')
    let myObject = JSON.parse(data);
    let eliminados = 0
    let mensaje
    myObject.forEach(function (currentValue, index, arr) {
        if (myObject[index].id == req.params.id) {
            myObject.splice(index, 1);
            eliminados++
        }
    })
    if (eliminados > 0) {
        mensaje = "Proveedor modificado"
    } else {
        mensaje = "No se encontro coincidencia"
    }
    myObject.push(nuevo)
    await fs.writeFile(pathJson, JSON.stringify(myObject))
    req.body = {
        mensaje: mensaje
    }
}