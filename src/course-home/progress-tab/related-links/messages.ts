import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  datesCardDescription: {
    id: 'progress.relatedLinks.datesCard.description',
    defaultMessage: 'A schedule view of your workshop due dates and upcoming assignments.',
    description: '[BW Custom]It explain the content of the dates tab',
  },
  datesCardLink: {
    id: 'progress.relatedLinks.datesCard.link',
    defaultMessage: 'Dates',
    description: 'Anchor text for link that redirects to dates tab',
  },
  outlineCardDescription: {
    id: 'progress.relatedLinks.outlineCard.description',
    defaultMessage: 'A birds-eye view of your workshop content.',
    description: '[BW Custom]It explain the content of the course outline tab',
  },
  outlineCardLink: {
    id: 'progress.relatedLinks.outlineCard.link',
    defaultMessage: 'Workshop outline',
    description: '[BW Custom]Anchor text for link that redirects to course outline tab',
  },
  relatedLinks: {
    id: 'progress.relatedLinks',
    defaultMessage: 'Related links',
    description: 'Headline for (related links) section in progress tab',
  },
});

export default messages;
