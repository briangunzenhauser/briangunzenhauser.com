import {defineField, defineType} from 'sanity'
import {CATEGORY_OPTIONS} from './projectCategories'

// Deliberately has no slug field. Projects render only as entries in the
// curated list on /work — never as individual pages — so that a project write-up
// here can't outrank a client's own site for their own name.
//
// There is no plain "title" field on purpose. For most build work the client IS
// the project, so a title would just restate the client's name. Instead the
// client reference carries the identity and `engagement` is the optional
// override for work that has its own name — a workshop, a program, a product.
export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{type: 'client'}],
      description:
        'Becomes the heading unless there is also an engagement name. Leave empty only for work with no client to point at.',
    }),
    defineField({
      name: 'engagement',
      title: 'Engagement Name',
      type: 'string',
      description:
        'The name of the program, workshop, or product — used when the work has an identity of its own. Leave empty when the client is the project, and the client name becomes the heading.',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {list: CATEGORY_OPTIONS},
      description: 'Rendered as pills. Add as many as genuinely apply.',
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      description:
        'A short summary — a few sentences. For facilitation work under NDA, what you taught is usually the safe part. Full case studies live on boxandpixel.com.',
      // Deliberately narrow: paragraphs, emphasis, and links only. No headings,
      // lists, or images — this renders inside a card, not as page content.
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({scheme: ['http', 'https', 'mailto']}),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description:
        'Where to send someone for more — the case study on boxandpixel.com, or the live site itself. The link only renders when this is set.',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description:
        'Lower numbers appear first. Leave empty to fall to the bottom of the list.',
    }),
  ],
  // One of the two has to be set, or the entry renders with no heading at all.
  validation: (Rule) =>
    Rule.custom((doc) =>
      doc?.client || doc?.engagement
        ? true
        : 'Set a client, an engagement name, or both — otherwise this entry has nothing to head it.'
    ),
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [
        {field: 'displayOrder', direction: 'asc'},
        {field: 'engagement', direction: 'asc'},
      ],
    },
  ],
  preview: {
    select: {engagement: 'engagement', client: 'client.name'},
    prepare({engagement, client}) {
      return {
        title: engagement || client || 'Untitled',
        subtitle: engagement && client ? client : undefined,
      }
    },
  },
})
