export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        REDIS_PORT: number;
        REDIS_HOST: string;
    }
  }
}