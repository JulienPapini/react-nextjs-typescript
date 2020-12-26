import React from 'react';
import NextError, { ErrorProps } from 'next/error';

import { I18nPage, includeDefaultNs } from '@/i18n/services';

const Error: I18nPage<ErrorProps> = (errorProps: ErrorProps) => <NextError {...errorProps} />;

Error.getInitialProps = async ({ res, err }) => {
  let statusCode: number | undefined = 404;
  if (res) statusCode = res.statusCode;
  if (err) statusCode = err.statusCode;
  return {
    namespacesRequired: includeDefaultNs([]),
    statusCode,
  };
};

export default Error;
