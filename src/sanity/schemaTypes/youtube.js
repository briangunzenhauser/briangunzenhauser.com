import {defineField, defineType} from 'sanity'

export const youtube = defineType({
  name: 'youtube',
  title: 'YouTube Embed',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({scheme: ['https']}).custom((url) => {
          if (!url) return true
          return url.includes('youtube.com') || url.includes('youtu.be')
            ? true
            : 'Must be a YouTube URL'
        }),
    }),
  ],
  preview: {
    select: {url: 'url'},
    prepare({url}) {
      return {title: 'YouTube Embed', subtitle: url}
    },
  },
})
