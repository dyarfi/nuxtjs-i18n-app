<template>
  <div
    class="relative min-h-screen bg-gray-100 sm:items-center sm:pt-0 z-0 py-4"
  >
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style>
.page-enter-active,
.page-leave-active {
  /* transition-delay: 0s; */
  transition: opacity 0.15s ease-out;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
