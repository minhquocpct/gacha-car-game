import type { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";

  
const AuthRoute: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {

    server.post('/', {}, async (request, reply) => {
        reply.send("Hello Ubisoft Da Nang")
    });

};
export default AuthRoute;