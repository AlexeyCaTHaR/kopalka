const Router = require('koa-router');
const api = new Router();

api.use(require('./auth-router'));
api.use(require('./debug-router'));
api.use(require('./healtchcheck-router'));
api.use(require('./inventory-router'));

module.exports = api;