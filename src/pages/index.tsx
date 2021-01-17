import React from 'react';
import { NextPage } from 'next';

import { HomeContent } from '@/home/contents';

type HomePagePropsType = {};

const HomePage: NextPage<HomePagePropsType> = () => {
  return <HomeContent />;
};

export default HomePage;
