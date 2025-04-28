import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset'
import { defineConfig } from 'cypress'

const baseConfig = nxE2EPreset(__filename, {
  cypressDir: 'src',
  webServerCommands: {
    default: 'npx nx run shell:serve',
    production: 'npx nx run shell:preview',
  },
  ciWebServerCommand: 'npx nx run shell:preview',
  ciBaseUrl: 'http://localhost:4200',
})

export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    baseUrl: 'http://localhost:4200',
  },
})
