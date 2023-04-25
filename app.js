'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

module.exports = async function (fastify) {
    require('./database/mongo')
    fastify.register(require('@fastify/formbody'))
    fastify.register(require("@fastify/multipart"));
    fastify.register(require('@fastify/cors'), {
        origin: '*',
        methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    })

    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'routes')
    })
}
