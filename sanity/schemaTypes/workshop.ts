import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'workshop',
  title: 'Workshop',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    defineField({ name: 'image', title: 'Imagen', type: 'image' }),
  ],
})
