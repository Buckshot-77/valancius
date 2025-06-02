import { ConfigException } from '../exception/config.exception'
import { configSchema } from './config.schema'
import { Config } from './config.type'

export const factory = (): Config => {
  const result = configSchema.safeParse({
    env: process.env.NODE_ENV,
    port: process.env.APPLICATION_PORT,
    database: {
      name: process.env.POSTGRES_NAME,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      url: process.env.DATABASE_URL,
      localDataPath: process.env.DATABASE_LOCAL_DATA_PATH,
    },
  })

  if (result.success) {
    return result.data
  }

  throw new ConfigException(
    `Invalid application configuration: ${result.error.message}`,
  )
}
