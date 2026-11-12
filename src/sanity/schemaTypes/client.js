import {defineField, defineType} from 'sanity'

// Clients are their own documents so a name is spelled one way everywhere it
// appears, and so projects reference a shared record rather than a loose string.
// Nothing renders a client on its own — the name reaches /work through the
// reference on a project.
export const client = defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description:
        'Use the real name only where the agreement allows it. Otherwise an anonymized descriptor — e.g. "A Fortune 500 healthcare system" — works here too.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
