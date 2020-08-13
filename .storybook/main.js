module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
  ],
};
