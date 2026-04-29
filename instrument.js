import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://5b5806b07a3bcd0c1d4b8185845142f0@o4511265137426432.ingest.us.sentry.io/4511265142079488",
 
  sendDefaultPii: true,
  tracesSampleRate: 1.0
});

