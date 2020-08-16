import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import JobIconMorph, { JobIconMorphProps } from './JobIconMorph';
import colors from '../../styles/colors';

export default {
  title: 'Components/JobIconMorph',
  component: JobIconMorph,
  argTypes: {
    color: { control: 'color' },
  },
  args: {
    color: colors.highlight,
  },
} as Meta;

const Template: Story<JobIconMorphProps> = (args) => <JobIconMorph {...args} />;

export const Default = Template.bind({});
