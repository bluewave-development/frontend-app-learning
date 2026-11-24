import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  entranceExamTextNotPassing: {
    id: 'learn.sequence.entranceExamTextNotPassing',
    defaultMessage: 'To access workshop materials, you must score {entranceExamMinimumScorePct}% or higher on this exam. Your current score is {entranceExamCurrentScore}%.',
    description: '[BW Custom]',
  },
  entranceExamTextPassed: {
    id: 'learn.sequence.entranceExamTextPassed',
    defaultMessage: 'Your score is {entranceExamCurrentScore}%. You have passed the entrance exam.',
  },
});

export default messages;
