export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        FASTIFY_PORT: number;
        REDIS_PORT: number;
        REDIS_HOST: string;
    }
  }
}