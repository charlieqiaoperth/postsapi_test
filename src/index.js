const express = require('express');
require('dotenv').config();
const helmet = require('helmet');//保护框架信息和版本信息
const morgan = require('morgan');
const cors =  require('cors');//支持跨域请求
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

const morganLog = 
    process.eventNames.NODE_ENV ==='production' ? morgan('common') : morgan('dev');
app.use(helmet());
app.use(morganLog);
app.use(cors());


app.use(express.json()); //从body取得json数据

app.use('/v1', routes);

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`);
})