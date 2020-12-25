import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { HomePage, HomePageProps } from './home-page';

export default {
  title: 'Home/Pages/HomePage',
  component: HomePage,
} as Meta;

const Template: Story<HomePageProps> = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.storyName = 'HomePage';
