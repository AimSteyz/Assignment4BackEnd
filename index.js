const fastify = require('fastify')({logger: true, pluginTimeout: 20000})
// const env = require('dotenv')

PORT = process.env.port | 8080

require('./app')(fastify, {})

fastify.listen({port: PORT, host: '0.0.0.0'}, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server listening on port ${PORT}`)
})
