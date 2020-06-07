import React from 'react';
import JobIconMorph from './JobIconMorph';
import { withKnobs, color } from '@storybook/addon-knobs';

export default {
  component: JobIconMorph,
  title: 'components/JobIconMorph',
  decorators: [withKnobs],
};

export const jobIconMorph = () => (
  <JobIconMorph color={color('color', '#000000')} />
);
jobIconMorph.story = {
  name: 'Default',
};
