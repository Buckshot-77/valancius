import { z } from 'zod'

import {
  configSchema,
  environmentSchema,
} from '@sharedModules/config/util/config.schema'

export type Environment = z.infer<typeof environmentSchema>

export type Config = z.infer<typeof configSchema>
