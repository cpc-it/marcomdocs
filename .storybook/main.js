/** @type { import('@storybook/react-vite').StorybookConfig } */
import { mergeConfig } from 'vite';

const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  // 👇 CRITICAL: tell Vite that Storybook will live at /components/
  viteFinal: async (viteConfig) =>
    mergeConfig(viteConfig, {
      base: '/components/',
    }),
};

export default config;
