import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post (エッセイ)',
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
      title: 'Category (Strategy Pillar)',
      type: 'string',
      options: {
        list: [
          { title: 'Foundation (信頼/マインド)', value: 'foundation' },
          { title: 'Authority (権威/理論)', value: 'authority' },
          { title: 'Narrative (共感/物語)', value: 'narrative' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hook',
      title: 'Hook (冒頭の拡声器)',
      type: 'text',
      description: '冒頭3行で読者を惹きつける結論やフックを記述。',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body (本編)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'ethos',
      title: 'Ethos (業界への視点/倫理)',
      type: 'array',
      description: 'プロとしての覚悟や業界への提言を強調するセクション。',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: '例：「変態の巣窟へ」「秘密結社の扉を叩く」',
      initialValue: '変態 of 巣窟へ',
    }),
    defineField({
      name: 'isGated',
      title: '閲覧制限 (Gated)',
      type: 'boolean',
      description: 'ONにするとパスワード入力が必要になります。',
      initialValue: false,
    }),
    defineField({
      name: 'password',
      title: '閲覧パスワード',
      type: 'string',
      description: '閲覧制限がONの場合にのみ有効です。',
      hidden: ({ document }) => !document?.isGated,
    }),
  ],
})
