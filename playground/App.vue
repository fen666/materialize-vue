<template>
  <div style="margin: 20px;">
    <chip-play></chip-play>
  </div>
</template>
<script>
  import Button from './components/button.vue'
  import Icon from './components/icon.vue'
  import Row from './components/row.vue'
  import Col from './components/col.vue'
  import Switch from './components/switch.vue'
  import Breadcrumb from './components/breadcrumb.vue'
  import Input from './components/input.vue'
  import Chip from './components/chip.vue'
  export default {
    components: {
      ButtonPlay: Button,
      IconPlay: Icon,
      RowPlay: Row,
      ColPlay: Col,
      SwitchPlay: Switch,
      BreadcrumbPlay: Breadcrumb,
      InputPlay: Input,
      ChipPlay: Chip
    }
  }
</script>
