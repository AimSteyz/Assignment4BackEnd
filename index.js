const fastify = require('fastify')({logger: true, pluginTimeout: 20000})

PORT = process.env.port | 8080

// Initialize fastify
require('./app')(fastify, {})

// Run the server!
fastify.listen({port: PORT, host: '0.0.0.0'}, (err) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log(`Server listening on port ${PORT}`)
})
