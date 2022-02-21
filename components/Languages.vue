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
    <!-- {{ languageType }} -->
    <c-box mb="3" w="150px">
      <c-select
        v-model="languageType"
        placeholder="Language"
        variant="filled"
        size="sm"
      >
        <option value="grilled" selected>English</option>
        <option value="pub-style">Indonesia</option>
        <option value="jucy-lucy">Japan</option>
      </c-select>
    </c-box>
  </span>
</template>

<script>
import { CText, CBox, CSelect } from '@chakra-ui/vue'
export default {
  name: 'Languages',
  components: { CText, CBox, CSelect },
  data() {
    // console.log(this.languageType)
    return { languageType: '' }
  },
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
