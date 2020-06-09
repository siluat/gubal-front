import React from 'react';
import { withKnobs, select, color, text } from '@storybook/addon-knobs';
import Icon, { iconTypes } from './Icon';

export default {
  component: Icon,
  title: 'components/Icon',
  decorators: [withKnobs],
};

export const icon = () => (
  <Icon
    type={select('type', iconTypes, 'find') || 'find'}
    color={color('color', '#3d3d3d')}
    size={text('size', '24px')}
  />
);
icon.story = {
  name: 'Default',
};
