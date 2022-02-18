<template>
  <div class="container">
    <header>
      <Languages />
    </header>
    <div class="flex items-top justify-center">
      <Tutorial />
    </div>
    <!-- <Cards /> -->
    <Pages :items="pages" />
  </div>
</template>

<script>
import Vue from 'vue'
import Pages from '~/components/Pages.vue'
// import Cards from '~/components/Cards.vue'

/* Gql queries */
import { getDataPages } from '~/queries'

export default Vue.extend({
  name: 'IndexPage',
  components: { Pages },
  data() {
    return {
      pages: {}
    }
  },
  apollo: {
    pages: {
      query: getDataPages,
      variables() {
        return { locale: this.$i18n.locale }
      },
      fetchPolicy: 'cache-and-network'
    }
  }
})
</script>
