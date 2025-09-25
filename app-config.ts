import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'EarlyAge Development',
  pageTitle: 'Customer Support Agent',
  pageDescription: 'A voice agent built with LiveKit',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/earlyagelogo.png',
  accent: '#002cf2',
  logoDark: '/earlyagelogo.png',
  accentDark: '#1fd5f9',
  startButtonText: 'START CALL',

  agentName: undefined,
};
