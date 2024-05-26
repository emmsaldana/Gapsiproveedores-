const koa = require("koa")
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const router = require("./routes/proveedores-router")
const app = new koa()

const port = 8000;


app.use(parser())
  .use(cors())
  .use(router.routes())
  .listen(port, () => {
    console.log(`🚀 Server listening ${8000} 🚀`);
  });