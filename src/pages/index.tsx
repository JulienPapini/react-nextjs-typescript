import React from 'react';

import { HomePage } from '@/home/pages';
import { I18nPage, includeDefaultNs } from '@/i18n/services';

const HomeRoute: I18nPage = () => <HomePage />;

HomeRoute.getInitialProps = async () => ({
  namespacesRequired: includeDefaultNs(['home']),
});

export default HomeRoute;
