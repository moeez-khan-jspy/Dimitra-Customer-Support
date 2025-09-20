import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'LiveKit',
  pageTitle: 'Customer Support Agent',
  pageDescription: 'A voice agent built with LiveKit',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/dimitralogo2023.svg',
  accent: '#002cf2',
  logoDark: '/dimitralogo2023.svg',
  accentDark: '#1fd5f9',
  startButtonText: 'START CALL',

  agentName: undefined,
};
