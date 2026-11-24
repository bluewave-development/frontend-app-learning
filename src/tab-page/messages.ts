import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  failure: {
    id: 'learning.loading.failure',
    defaultMessage: 'There was an error loading this workshop.',
    description: '[BW Custom]Can be because internet connection or any technical other reason',
  },
  loading: {
    id: 'learning.loading',
    defaultMessage: 'Loading workshop page…',
    description: '[BW Custom]When content of the course is still loading...etc',
  },
});

export default messages;
