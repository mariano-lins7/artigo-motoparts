import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.artigomotoparts.app',
  appName: 'Artigo Moto Parts',
  webDir: 'www',
  bundledWebRuntime: false,
  server: { androidScheme: 'https' }
};

export default config;
