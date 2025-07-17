import { type SchemaTypeDefinition } from 'sanity'
import xenniLive from './xennilive'
import resource from './resource'
import blockContent from "./blockContent"
import bootcamp from './bootcamp'
import workshop from './workshop'
import bootcampStage from './bootcampStage'
import instructor from './instructor'
import faqItem from './faqItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, xenniLive, resource, bootcamp, workshop,bootcampStage, instructor, faqItem],
}
