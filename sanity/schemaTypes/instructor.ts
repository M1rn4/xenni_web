import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'string' }),
    defineField({ name: 'role', title: 'Rol', type: 'string' }),
    defineField({ name: 'bio', title: 'Biografía', type: 'text' }),
    defineField({ name: 'photo', title: 'Foto', type: 'image' }),
  ],
})
