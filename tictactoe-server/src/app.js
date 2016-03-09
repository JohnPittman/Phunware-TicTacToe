'use strict';

const path = require('path');
var koa = require('koa');
var app = koa();
var logger = require('koa-logger');
var route = require('koa-route');
var parse = require('co-body');
var koaStatic = require('koa-static');

var publicFiles = koaStatic(path.join(__dirname, 'public'));
publicFiles._name = 'static /public';

app.use(logger());

app.use(route.get('/', list));

function *list() {
  this.body = 'blah';
}

app.listen(3000);