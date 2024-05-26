exports.validations = async function (req, next) {
    const body = req.request.body
    if(body.nombre==""||body.nombre==null||body.razon_social==""||body.razon_social==null||body.direccion==""||body.direccion==null||body.estatus==""){
        req.body={
            mensaje:"Campos vacios detectados, favor de verificar"
        }
    }else{
        return next();
    }
}