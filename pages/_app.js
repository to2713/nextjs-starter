import '../styles/reset.css';
import '../styles/main.css';

import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const appInsights = new ApplicationInsights({ config: {
  connectionString: 'InstrumentationKey=ac12c1b6-04e0-4896-9903-28da40444b40;IngestionEndpoint=https://japaneast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://japaneast.livediagnostics.monitor.azure.com/;ApplicationId=52cbf1aa-aacd-4a39-9888-f68fe5781311'
  /* ...Other Configuration Options... */
} });
appInsights.loadAppInsights();
appInsights.trackPageView();

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
