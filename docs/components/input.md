# Input 

常用的Input。

## 基础用法


:::demo 
```vue
<template>
  <lcl-input v-model="input"></lcl-input>   {{input}}
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Input',
  setup() {
    const input = ref('');
    return {
     input
    };
  },
});
</script>

```

:::
