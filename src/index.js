import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from './App';

Sentry.init({
  dsn: "https://4aa3698b34584e548f3a2ca4d1369c2b@o1080390.ingest.sentry.io/6169629",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render( < React.StrictMode >
    <App />
    </React.StrictMode>,
    document.getElementById('root')
);