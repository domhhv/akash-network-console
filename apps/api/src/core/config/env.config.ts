import { z } from "zod";

export const envSchema = z.object({
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]).optional().default("info"),
  STD_OUT_LOG_FORMAT: z.enum(["json", "pretty"]).optional().default("json"),
  SQL_LOG_FORMAT: z.enum(["raw", "pretty"]).optional().default("raw"),
  FLUENTD_TAG: z.string().optional().default("pino"),
  FLUENTD_HOST: z.string().optional(),
  FLUENTD_PORT: z.number({ coerce: true }).optional().default(24224),
  NODE_ENV: z.enum(["development", "production", "test"]).optional().default("development"),
  POSTGRES_DB_URI: z.string(),
  POSTGRES_MAX_CONNECTIONS: z.number({ coerce: true }).optional().default(20),
  DRIZZLE_MIGRATIONS_FOLDER: z.string().optional().default("./drizzle"),
  DEPLOYMENT_ENV: z.string().optional().default("production"),
  AMPLITUDE_API_KEY: z.string(),
  AMPLITUDE_SAMPLING: z.number({ coerce: true }).optional().default(1)
});

export const envConfig = envSchema.parse(process.env);
