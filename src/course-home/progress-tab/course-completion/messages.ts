import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  donutLabel: {
    id: 'progress.completion.donut.label',
    defaultMessage: 'completed',
    description: 'Label text for progress donut chart',
  },
  completionBody: {
    id: 'progress.completion.body',
    defaultMessage: 'This represents how much of the workshop content you have completed. Note that some content may not yet be released.',
    description: '[BW Custom]It explains the meaning of progress donut chart',
  },
  completeContentTooltip: {
    id: 'progress.completion.tooltip.locked',
    defaultMessage: 'Content that you have completed.',
    description: 'It expalains the meaning of content that is completed',
  },
  courseCompletion: {
    id: 'progress.completion.header',
    defaultMessage: 'Workshop completion',
    description: '[BW Custom]Header text for (completion donut chart) section of the progress tab',
  },
  incompleteContentTooltip: {
    id: 'progress.completion.tooltip',
    defaultMessage: 'Content that you have access to and have not completed.',
    description: 'It explain the meaning for content is completed',
  },
  lockedContentTooltip: {
    id: 'progress.completion.tooltip.complete',
    defaultMessage: 'Content that is locked and available only to those who upgrade.',
    description: 'It expalains the meaning of content that is locked',
  },
  percentComplete: {
    id: 'progress.completion.donut.percentComplete',
    defaultMessage: 'You have completed {percent}% of content in this workshop.',
    description: '[BW Custom]It summarize the progress in the course (100% - %incomplete)',
  },
  percentIncomplete: {
    id: 'progress.completion.donut.percentIncomplete',
    defaultMessage: 'You have not completed {percent}% of content in this workshop that you have access to.',
    description: '[BW Custom]It summarize the progress in the course (100% - %complete)',
  },
  percentLocked: {
    id: 'progress.completion.donut.percentLocked',
    defaultMessage: '{percent}% of content in this workshop is locked and available only for those who upgrade.',
    description: '[BW Custom]It indicate the relative size of content that is locked in the course (100% - %open_content)',
  },
});

export default messages;
