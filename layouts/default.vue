<!--template>
  <div
    class="relative min-h-screen bg-gray-100 sm:items-center sm:pt-0 z-0 py-4"
  >
    <Nuxt />
  </div>
</template-->
<template>
  <CThemeProvider>
    <CColorModeProvider>
      <CBox fontFamily="body" as="main">
        <CReset />
        <Nuxt />
      </CBox>
    </CColorModeProvider>
  </CThemeProvider>
</template>

<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox
} from '@chakra-ui/vue'

export default {
  name: 'DefaultLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox
  },
  head({ $i18n }) {
    return {
      htmlAttrs: {
        lang: $i18n.locale
      }
    }
  }
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  /* transition-delay: 0s; */
  transition: opacity 0.15s ease-out 0.2;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
