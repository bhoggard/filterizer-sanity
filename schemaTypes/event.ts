import { defineField, defineType, rule } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule: rule) => rule.required()
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: [{ type: 'venue' }],
      validation: (rule: rule) => rule.required()
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (rule: rule) => rule.required()
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (rule: rule) => rule.required()
    }),
    defineField({
      name: 'website',
      type: 'url',
    }),
  ],
})