// app.js
const fs = require('fs');
const path = require('path');
const express = require('express');
const chalk = require('chalk')
const app = express();
app.use(express.static(path.resolve(__dirname, './dist')))//生产环境目录

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')//生产环境目录index文件
    res.send(html)
})
app.listen(8688, res => {//端口
  console.log(chalk.yellow('Start Service On 8688'));
});

