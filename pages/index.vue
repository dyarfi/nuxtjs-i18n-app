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
    <div
      v-if="faqs && faqs.data && faqs.data.length"
      class="mt-8 flex flex-wrap mx-auto container gap-2"
    >
      <div v-if="$apollo.loading">Loading...</div>
      <div
        v-for="(page, n) in faqs.data"
        :key="n"
        class="bg-white overflow-hidden shadow sm:rounded-lg p-6 w-1/3"
      >
        <div v-for="attributes in page" :key="attributes.title">
          <nuxt-link
            v-if="attributes.title && attributes.slug"
            :to="
              localePath({
                name: 'slug',
                params: {
                  slug: attributes.slug
                }
              })
            "
          >
            <h1>{{ attributes.title }}</h1>
            <p>{{ attributes.description }}</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Pages from '~/components/Pages.vue'
// import Cards from '~/components/Cards.vue'

/* Gql queries */
import { getDataPages, getDataFaqs } from '~/queries'

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
    },
    faqs: {
      query: getDataFaqs,
      variables() {
        return { locale: this.$i18n.locale }
      },
      fetchPolicy: 'cache-and-network'
    }
  }
})
</script>
