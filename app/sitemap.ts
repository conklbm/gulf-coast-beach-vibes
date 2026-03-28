import type { MetadataRoute } from 'next'
import { destinations } from '@/lib/destinations'
import { posts } from '@/lib/posts'

const BASE_URL = 'https://gulfcoastbeachvibes.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const destinationUrls = destinations.map((d) => ({
    url:              `${BASE_URL}/destinations/${d.slug}`,
    lastModified:     new Date(),
    changeFrequency:  'monthly' as const,
    priority:         0.9,
  }))

  const postUrls = posts.map((p) => ({
    url:             `${BASE_URL}/blog/${p.slug}`,
    lastModified:    new Date(p.publishedAt),
    changeFrequency: 'monthly' as const,
    priority:        0.7,
  }))

  return [
    {
      url:             BASE_URL,
      lastModified:    new Date(),
      changeFrequency: 'weekly',
      priority:        1.0,
    },
    {
      url:             `${BASE_URL}/destinations`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.9,
    },
    {
      url:             `${BASE_URL}/stay`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${BASE_URL}/stay/best-places-to-stay-gulf-coast`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${BASE_URL}/activities`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${BASE_URL}/activities/best-things-to-do-gulf-shores`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.8,
    },
    {
      url:             `${BASE_URL}/eat`,
      lastModified:    new Date(),
      changeFrequency: 'monthly',
      priority:        0.7,
    },
    {
      url:             `${BASE_URL}/blog`,
      lastModified:    new Date(),
      changeFrequency: 'weekly',
      priority:        0.8,
    },
    {
      url:             `${BASE_URL}/newsletter`,
      lastModified:    new Date(),
      changeFrequency: 'yearly',
      priority:        0.5,
    },
    ...destinationUrls,
    ...postUrls,
  ]
}
