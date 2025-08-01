//Tabela para armazenar as perguntas
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { rooms } from "./rooms.ts";

export const questions = pgTable('questions', {
    id: uuid().primaryKey().defaultRandom(),
    roomID: uuid().references(() => rooms.id).notNull(),
    question: text().notNull(),
    answer: text(),
    createdAt: timestamp().defaultNow().notNull(),
})