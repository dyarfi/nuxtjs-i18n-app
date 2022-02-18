<template>
  <div
    v-if="items.data && items.data.length"
    class="mt-8 flex flex-wrap mx-auto container gap-2"
  >
    <div v-if="$apollo.loading">Loading...</div>
    <div
      v-for="(page, n) in items.data"
      :key="n"
      class="bg-white overflow-hidden shadow sm:rounded-lg p-6 w-1/3"
    >
      <div v-for="attributes in page" :key="attributes.slug">
        <nuxt-link
          v-if="attributes.slug"
          :to="
            attributes.slug === 'home' || attributes.slug === 'beranda'
              ? '/'
              : localePath({
                  name: 'slug',
                  params: {
                    slug: attributes.slug
                  }
                })
          "
        >
          <h1>{{ attributes.title }}</h1>
          <img
            v-if="
              attributes.image &&
              attributes.image.data &&
              attributes.image.data.attributes &&
              attributes.image.data.attributes.url
            "
            :src="`http://localhost:1337${attributes.image.data.attributes.url}`"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pages',
  props: {
    items: {
      type: Object,
      required: false,
      default: () => {}
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
