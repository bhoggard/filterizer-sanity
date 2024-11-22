import { defineField, defineType, rule } from 'sanity'

export const venue = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule: rule) => rule.required()
    }),
    defineField({
      name: 'neighborhood',
      type: 'reference',
      to: [{ type: 'neighborhood' }],
      validation: (rule: rule) => rule.required()
    }),
    defineField({
      name: 'address',
      type: 'string',
      validation: (rule: rule) => rule.required()
    }),
    defineField({
      name: 'website',
      type: 'url',
      validation: (rule: rule) => rule.required()

    }),
  ],
})