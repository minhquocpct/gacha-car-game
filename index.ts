import fastify from 'fastify'
import Redis from 'ioredis';
import 'dotenv/config';

const server = fastify()
const redisPort = process.env.REDIS_PORT
const redisHost = process.env.REDIS_HOST

try {
  new Redis({
    port: redisPort,
    host: redisHost,
  }); 
} catch (error) {
  console.log(error)
}

server.get('/', async (request, reply) => {
  reply.send("Hello, Ubisoft Da Nang")
})

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})