import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset'
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run exampleComponent:serve',
        production: 'npx nx run exampleComponent:preview',
      },
      ciWebServerCommand: 'npx nx run exampleComponent:preview',
      ciBaseUrl: 'http://localhost:4200',
    }),
    baseUrl: 'http://localhost:4202',
  },
})
