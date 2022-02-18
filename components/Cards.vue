<template>
  <div class="flex flex-wrap mx-auto container">
    <div
      v-for="item of items"
      :key="item.title"
      class="w-1/3 h-28 shadow-lg p-4 m-3 bg-white"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentCards',
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        { title: 'asdasdasd', desc: 'dasdasd' },
        { title: 'asdasdasdadasd', desc: 'dasdcxcasdasdas' },
        { title: 'asdasdasxcxcxc', desc: 'dcxcxasdasdasdas' },
        { title: 'asdasdasdwewe', desc: 'sdsdasdasdasdas' },
        { title: 'asdasdasdadxcxcasd', desc: 'xcxdasdasdasdas' }
      ]
    },
    layout: {
      type: String,
      default: ''
    },
    compact: {
      type: Boolean,
      default: false
    }
  }
}
</script>
