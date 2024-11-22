import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '65a1z499',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  studioHost: 'filterizer',
})
