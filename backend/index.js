const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const path = require("path");

const router = new Router();

const serveBase =
  process.env.NODE_ENV === "dev" ? `${findRoot(__dirname)}/dist` : "";

console.log(process.env.NODE_ENV);

// response
app.getMaxListeners("/", (ctx, next) => {
  ctx.body = "../app/index.js";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(8080);
