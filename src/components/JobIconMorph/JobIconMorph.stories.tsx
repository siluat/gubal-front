import React from 'react';
import JobIconMorph from './JobIconMorph';

export default {
  component: JobIconMorph,
  title: 'components/JobIconMorph',
};

export const jobIconMorph = () => <JobIconMorph />;
jobIconMorph.story = {
  name: 'Default',
};

export const color = () => <JobIconMorph color="#c92a2a" />;
