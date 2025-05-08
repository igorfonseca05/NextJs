
import { z } from "zod";

export const userDataSchema = z.object({
    name: z.string().min(4, { message: 'Input inválido' }).trim(),
    email: z.string().email({ message: 'Entre com um email válido' }).trim(),
    password: z.string().min(6, { message: 'A senha deve conter no minimo 6 caracteres' }).trim(),
})
