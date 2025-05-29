import { ConfigException } from '../exception/config.exception'
import { configSchema } from './config.schema'
import { Config } from './config.type'

export const factory = (): Config => {
  const result = configSchema.safeParse({
    env: process.env.NODE_ENV,
    port: process.env.APPLICATION_PORT,
    database: {
      name: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
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
