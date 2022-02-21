<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)"
      :class="`${$i18n.locale === locale.code ? 'active' : ''}`"
    >
      <CText
        fontWeight="bold"
        color="brand.primary"
        textDecoration="underline"
        display="inline"
        mr="3"
        >{{ locale.name }}</CText
      >
    </nuxt-link>
  </span>
</template>

<script>
import { CText } from '@chakra-ui/vue'
export default {
  name: 'Languages',
  components: { CText },
  computed: {
    showLocales() {
      // console.log(this.$route.params)
      // console.log(this.$i18n.locale)
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    }
  }
}
</script>
