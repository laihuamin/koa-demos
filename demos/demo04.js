const fs = require('fs');  
//fs是一个文件系统模块，负责读写文件
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./demos/template.html');
}

app.use(main);
app.listen(3000);

