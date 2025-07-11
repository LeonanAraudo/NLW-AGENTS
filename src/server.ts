import fastify from "fastify";
import { serializerCompiler,validatorCompiler,type ZodTypeProvider } from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
import { env } from "./env.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { createRoomsRoute } from "./http/routes/create-room.ts";
import { getRoomQuestions } from "./http/routes/get-room-questions.ts";
import { createQuestionRoute } from "./http/routes/create-question.ts";

//Fastify é um facilitador de construção de apis
const app = fastify().withTypeProvider<ZodTypeProvider>()

//Libera o acesso da api para o frontend que roda no localhost
app.register(fastifyCors,{
    origin: 'http://localhost:5173',
})

//Vai informar ao fastify para usar o zod como validator(para validações) e serializer(para formatar respostas)
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

//É uma rota de check, ou seja uma rota para ver se o servidor ta rodando. Pode jogar no navegador pra checar
app.get("/health",() => {
    return 'OK'
})

app.listen({port: env.PORT })

app.register(getRoomsRoute)
app.register(createRoomsRoute)
app.register(getRoomQuestions)
app.register(createQuestionRoute)


  // package.json --experimental-strip-types isso aqui remove toda a parte de tipos da aplicação
  // package.json--no-warning remove o aviso de experimental do console