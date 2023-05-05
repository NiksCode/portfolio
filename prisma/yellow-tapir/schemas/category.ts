import { FiTag } from 'react-icons/fi';

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FiTag,
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'slugcat',
      title: 'Slugcat',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'parent',
      type: 'reference',
      to: [{ type: 'category' }],
      // This ensures we cannot select other "children"
      options: {
        filter: '!defined(parent)',
      },
    },
  ],
  // Customise the preview so parents are visualised in the studio
  preview: {
    select: {
      title: 'title',
      subtitle: 'parent.title',
      media: 'image',
    },
    prepare: ({ title }: { title: string }, subtitle?: string) => ({
      title,
      subtitle: subtitle ? `– ${subtitle}` : ``,
    }),
  },
};
