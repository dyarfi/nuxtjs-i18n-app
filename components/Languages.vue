<template>
  <span class="lang-switcher">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :to="switchLocalePath(locale.code)"
      class="font-bold"
    >
      i18n: {{ locale.name }}
    </nuxt-link>
  </span>
</template>

<script>
export default {
  name: 'Languages',
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
