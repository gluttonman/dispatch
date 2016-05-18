/*在项目的主入口文件中（index.js）,引入下面的代码。会将routers目录下面的js文件引入，并以js文件名作为路由的名称。 */

require("dispatch")(path.join(__dirname, "routers"), app)


/* 通常做法如下 */

const demo = require("./routes/demo");

app.use("/demo", demo)

/* 当有多个路由文件时，将产生多行代码，上面的代码很好的解决了这个问题。 */
