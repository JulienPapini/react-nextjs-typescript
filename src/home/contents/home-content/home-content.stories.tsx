import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { HomeContent, HomeContentPropsType } from './home-content';

export default {
  title: 'Home/Contents/HomeContent',
  component: HomeContent,
} as Meta;

const Template: Story<HomeContentPropsType> = (args) => <HomeContent {...args} />;

export const Default = Template.bind({});
Default.storyName = 'HomeContent';
