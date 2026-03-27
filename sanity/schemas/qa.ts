import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'qa',
  title: 'Consultation Log (臨床相談)',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question (照会内容)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'question',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer (回答/臨床助言)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Clinical (技術/臨床)', value: 'clinical' },
          { title: 'Business (経営/戦略)', value: 'business' },
          { title: 'Mindset (心理/マインド)', value: 'mindset' },
        ],
      },
    }),
    defineField({
      name: 'isGated',
      title: '閲覧制限 (Gated)',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'password',
      title: '閲覧パスワード',
      type: 'string',
      hidden: ({ document }) => !document?.isGated,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
