//vai fazer uma validação para garantir que a aplicação não rode se não tiver os envs obrigatórios

import z from "zod";

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    //Função do zod que vai fazer a conversão de string para numero
    //caso o numero n exista ele vai preencher com 3333
    DATABASE_URL: z.string().url().startsWith('postgresql://')
    //StartWitch ta dizendo que vai começar a ser escrito com postgresql://
})

export const env = envSchema.parse(process.env)

