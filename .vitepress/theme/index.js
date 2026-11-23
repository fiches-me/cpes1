import PrimaryTheme from 'primary-vitepress'
import DonateLayout from './DonateLayout.vue'
import './override.css'

export default {
  ...PrimaryTheme,
  Layout: DonateLayout,
  enhanceApp(ctx) {
    if (PrimaryTheme.enhanceApp) {
      PrimaryTheme.enhanceApp(ctx)
    }
  }
}
