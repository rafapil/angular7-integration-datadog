import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs'

if (environment.production) {
  enableProdMode();
}

datadogRum.init({
  applicationId: 'f1a99618-f1f4-4995-914e-e343a83e0007', // id gerado no datadog
  clientToken: 'TOKEN_DATADOG',
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: 'us5.datadoghq.com',
  service: 'angular-7-teste',
  env: 'des',
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sampleRate: 100,
  replaySampleRate: 0, // não sera usada a mesmo que necessário manter em 0
  trackInteractions: true,
  trackSessionAcrossSubdomains: true,
  useCrossSiteSessionCookie: true
});

datadogLogs.init({
  clientToken: 'pub95f24e3b1981ac40312108ca5fd70357',
  site: 'us5.datadoghq.com',
  forwardErrorsToLogs: true,
  sampleRate: 100,
})

// inicializa o session replay para gravar a tela não necessário nesse momento
// datadogRum.startSessionReplayRecording();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
