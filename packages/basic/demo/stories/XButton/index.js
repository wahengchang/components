import { text, number } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XButton, { propOptions } from '../../../src/components/XButton';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(XButton, propOptions, {
    content: text('content', 'download'),
    borderRadius: number('borderRadius', 4)
  })
);
