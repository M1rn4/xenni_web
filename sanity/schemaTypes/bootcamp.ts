import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'bootcamp',
  title: 'Bootcamp',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Bootcamp',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'duration',
      title: 'Duración',
      type: 'string',
    }),
    defineField({
      name: 'modality',
      title: 'Modalidad',
      type: 'string',
    }),
    defineField({
      name: 'certificate',
      title: 'Certificado',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'string',
    }),
    defineField({
      name: 'includes',
      title: 'Incluye',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'nextStart',
      title: 'Próximo Inicio',
      type: 'string',
    }),
    defineField({
      name: 'level',
      title: 'Nivel',
      type: 'string',
    }),
    defineField({
      name: 'students',
      title: 'Número de Estudiantes',
      type: 'number',
    }),
    defineField({
      name: 'technologies',
      title: 'Tecnologías',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'color',
      title: 'Color de fondo (Tailwind)',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Ícono (Emoji)',
      type: 'string',
    }),
    defineField({
      name: 'workshops',
      title: 'Workshops',
      type: 'array',
      of: [{ type: 'workshop' }],
    }),
    defineField({
      name: 'syllabus',
      title: 'Plan de Estudios (Syllabus)',
      type: 'array',
      of: [{ type: 'bootcampStage' }],
    }),
    defineField({
      name: 'instructors',
      title: 'Instructores',
      type: 'array',
      of: [{ type: 'instructor' }],
    }),
    defineField({
      name: 'faqs',
      title: 'Preguntas Frecuentes',
      type: 'array',
      of: [{ type: 'faqItem' }],
    }),
  ],
})
