# Message 消息提示

常用的提示消息。

## 基础用法

全局消息提示，借鉴Ant Design 风格

:::demo 
```vue
<template>
    <div style="display: flex;justify-content: space-between;">
        <lcl-button type="success" @click="openMessage('success')">success</lcl-button>
        <lcl-button type="warning" @click="openMessage('warning')">warning</lcl-button>
        <lcl-button type="danger" @click="openMessage('error')">error</lcl-button>
        <lcl-button type="primary" @click="openMessage('info')">info</lcl-button>
    </div>
</template>
<script>
import { defineComponent,getCurrentInstance, ref } from 'vue';
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const openMessage = (type) => {
        proxy.$lclMessage({ type, str: `this is a ${type} message !` })
    }
    return { openMessage };
  },
});
</script>
```
:::



## Attributes

| 参数 | 说明     | 类型   | 可选值                            | 默认值 |
| ---- | -------- | ------ | --------------------------------- | ------ |
| type | 消息类型 | string | success / warning  / error / info |        |
| str  | 消息文字 |        |                                   |        |

