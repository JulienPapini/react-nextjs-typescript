import React from 'react';
import { NextPage } from 'next';

import { HomeContent } from '@/home/contents';

type HomePageProps = {};

const HomePage: NextPage<HomePageProps> = () => {
  return <HomeContent />;
};

export default HomePage;
