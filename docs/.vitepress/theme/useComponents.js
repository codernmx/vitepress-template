/*
 * @Date: 2023-04-10 12:40:03
 * @LastEditTime: 2023-04-12 13:00:14
 */
// Don't remove this file, because it registers the demo components.


import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents (app) {

    //上边是自己的
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
}