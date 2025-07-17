const xenniLive = {
  name: 'xenniLive',
  title: 'Xenni Live',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Fecha',
      type: 'datetime',
    },
    {
      name: 'speaker',
      title: 'Ponente',
      type: 'string',
    },
    {
      name: 'speakerRole',
      title: 'Rol del ponente',
      type: 'string',
    },
    {
      name: 'speakerImage',
      title: 'Imagen del ponente',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'registered',
      title: 'Nº de registrados',
      type: 'number',
    },
    {
      name: 'registrationUrl',
      title: 'Enlace de inscripción',
      type: 'url',
    },
    {
      name: 'duration',
      title: 'Duración (en minutos)',
      type: 'number',
    },
    {
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'videoUrl',
      title: 'Enlace del video (grabación)',
      type: 'url',
    },
    {
      name: 'thumbnail',
      title: 'Miniatura del evento',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'views',
      title: 'Número de vistas (solo eventos pasados)',
      type: 'number',
    },
    {
      name: 'rating',
      title: 'Calificación del evento (opcional)',
      type: 'number',
    },
    {
      name: 'isUpcoming',
      title: '¿Es un evento próximo?',
      type: 'boolean',
    },
  ],
}

export default xenniLive
