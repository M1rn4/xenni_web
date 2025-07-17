// lib/queries.ts
import { client } from './sanity'

export async function getXenniEvents() {
  const query = `*[_type == "xenniLive"] | order(date desc){
  _id,
  title,
  date,
  speaker,
  speakerRole,
  "speakerImage": speakerImage.asset->url,
  description,
  videoUrl,
  "thumbnail": thumbnail.asset->url,
  tags,
  isUpcoming,
  duration,
  registrants,
  views,
  rating
}`;

  return await client.fetch(query)
}
