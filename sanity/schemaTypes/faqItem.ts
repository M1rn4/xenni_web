import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faqItem',
  title: 'Pregunta Frecuente',
  type: 'object',
  fields: [
    defineField({ name: 'question', title: 'Pregunta', type: 'string' }),
    defineField({ name: 'answer', title: 'Respuesta', type: 'text' }),
  ],
})
