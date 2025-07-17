const resource = {
  name: "resource",
  title: "Recurso",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
    },
    {
      name: "shortDescription",
      title: "Descripción corta",
      type: "text",
    },
    {
      name: "mainCategory",
      title: "Categoría temática",
      type: "string",
      options: {
        list: ["Web3", "IA", "IoT", "Ciberseguridad"],
        layout: "dropdown",
      },
    },
    {
      name: "type",
      title: "Tipo de recurso",
      type: "string",
      options: {
        list: ["Guía", "Curso", "Tutorial", "E-book", "Video", "Whitepaper"],
        layout: "dropdown",
      },
    },
    {
      name: "icon",
      title: "Ícono del recurso",
      type: "string", // Puedes cambiar a "image" si quieres íconos personalizados
      description: "Puedes usar un nombre de ícono (ej. Heroicons) o un emoji",
    },
    {
      name: "coverImage",
      title: "Imagen de portada (opcional)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "internalContent",
      title: "¿El contenido está en la web?",
      type: "boolean",
      description: "Si está en la web, se mostrará el contenido completo en la página interna.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      hidden: (context: { parent: Record<string, any> }) => !context.parent?.internalContent,
    },
    {
      name: "externalUrl",
      title: "Enlace externo",
      type: "url",
      hidden: (context: { parent: Record<string, any> }) => !context.parent?.internalContent,
    },
    {
      name: "body",
      title: "Contenido del recurso",
      type: "blockContent",
      hidden: (context: { parent: Record<string, any> }) => !context.parent?.internalContent,
    },
  ],
}

export default resource
