import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bootcampStage',
  title: 'Etapa del Bootcamp',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    defineField({ name: 'sessions', title: 'Sesiones', type: 'array', of: [{ type: 'string' }] }),
  ],
})
