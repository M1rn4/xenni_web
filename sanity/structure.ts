import { StructureBuilder } from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Contenido')
    .items([
      S.documentTypeListItem('xenniLive').title('Xenni Lives'),
      S.documentTypeListItem('resource').title('Recursos'),
      S.documentTypeListItem('bootcamp').title('bootcamp')

      // Puedes añadir más secciones aquí si tienes otros tipos
    ])
