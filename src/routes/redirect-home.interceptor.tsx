import React from 'react';
import History from './History';

export const RedirectHomeInterceptor: React.FC = ({
  children,
}): JSX.Element => {
  const history = History.getHistory();

  if (history.location.pathname !== '/') history.push('/');

  return <>{children}</>;
};
