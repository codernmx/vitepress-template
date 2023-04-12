# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。



:::demo 使用 `type` 属性来定义 Button 的样式。

```vue
<div style="display:flex;justify-content: space-between;">
    <lcl-button>default</lcl-button>
    <lcl-button type="primary">primary</lcl-button>
    <lcl-button type="success">success</lcl-button>
    <lcl-button type="warning">warning</lcl-button>
    <lcl-button type="danger">danger</lcl-button>
</div>
```

:::

## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| type    | 类型   | string  | primary / success / warning  / danger  | default |