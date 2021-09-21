import { compose } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    localStream: any;
    config: {
      devTools: boolean;
      connection: {
        backendUrl: string;
        confUrl: string;
        daemonUrl: string;
        sessionManagerUrl: string;
      };
    };
  }
}
