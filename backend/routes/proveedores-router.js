const Router = require("koa-router");
const router = new Router();
const controller = require("../controllers/proveedores-controller")
const untils = require("../utils/validation")


router.put("/proveedor",untils.validations , controller.putProveedor)
router.get("/proveedores", controller.getProveedores)
router.get("/proveedor/:id",controller.getProveedor)
router.delete("/proveedor/:id",controller.deleteProveedor)
router.post("/proveedor/:id",untils.validations,controller.postProveedor)

module.exports = router;