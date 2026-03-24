import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'glossary',
  title: 'Glossary (用語集)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Anatomy (解剖学)', value: 'anatomy' },
          { title: 'Psychology (心理学)', value: 'psychology' },
          { title: 'Neuroscience (神経科学)', value: 'neuroscience' },
          { title: 'Clinical (臨床)', value: 'clinical' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
  ],
})
