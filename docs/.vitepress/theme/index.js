import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'

import lclUi from 'lcl-test-ui/dist/lcl-test-ui.mjs'
import 'lcl-test-ui/dist/style.css'
export default {
    ...DefaultTheme,
    enhanceApp (ctx) {
        DefaultTheme.enhanceApp(ctx)
        useComponents(ctx.app)
        ctx.app.use(lclUi)
    }
}
