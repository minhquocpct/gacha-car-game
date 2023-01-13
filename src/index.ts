import fastify from 'fastify'
import AuthRoute from './routes/authRoute';
import 'dotenv/config';

const port = process.env.FASTIFY_PORT

const server = fastify({
    logger: true
})

server.register(AuthRoute);

const start = async () => {
    try {
        await server.listen({port: port});
        console.log('Server started successfully');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();