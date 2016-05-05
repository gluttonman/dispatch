/**
 * Manager Routers
 * Created by Administrator on 2015/12/1.
 */
'use strict'
const fs = require("fs");
const path = require("path");
module.exports = function (dirPath, app) {
    let files = fs.readdirSync(dirPath);
    files.forEach(function (item, i) {
        if(item=="index.js" || item=="manager.js"){
            app.use(require(dirPath + path.sep + item));
        }else{
            let rootPath = "/"+item.split(".")[0]
            app.use(rootPath,require(dirPath + path.sep + item));
        }
    })
}

