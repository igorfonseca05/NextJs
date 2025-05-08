
import { z } from 'zod'


export const teste = z.object({
    name: z.string()
        .min(2, { message: 'Nome deve conter pelo menos 2 caracteres' })
        .trim()
})