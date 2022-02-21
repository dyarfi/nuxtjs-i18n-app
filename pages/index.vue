<template>
  <div>
    <CBox :width="['90%', '75%']" mx="auto" py="25">
      <header>
        <Languages />
      </header>
      <div class="flex items-top justify-center">
        <Tutorial />
      </div>
      <!-- <Cards /> -->
      <!-- <CBox my="12">
        <Pages :items="pages" />
      </CBox> -->
      <CSimpleGrid
        v-if="faqs && faqs.data && faqs.data.length"
        maxW="xxl"
        :columns="[1, 1 / 2, '100%']"
        :spacing="10"
        mt="12"
      >
        <!-- <div v-if="$apollo.loading">Loading...</div> -->
        <c-accordion :allow-multiple="true" :default-index="[0]">
          <c-accordion-item
            v-for="(page, n) in faqs.data"
            :key="`${page.attributes.title}_${n}`"
            boxShadow="md"
            borderWidth="1px"
            p="5"
            mb="4"
            :width="[
              //'15%', // 992px upwards
              //'50%', // 480px upwards
              //'50%', // 768px upwards
              //'100%' // base
              [1, 1 / 2, 1 / 2]
            ]"
            :_hover="{ boxShadow: 'lg' }"
          >
            <c-accordion-header>
              <c-box flex="1" text-align="left">
                <CHeading as="h2" size="md">{{
                  page.attributes.title
                }}</CHeading>
              </c-box>
              <c-accordion-icon />
            </c-accordion-header>
            <c-accordion-panel pb="4">
              <span v-html="page.attributes.description"></span> -
              <nuxt-link
                v-if="page.attributes.title && page.attributes.slug"
                :to="
                  localePath({
                    name: 'slug',
                    params: {
                      slug: page.attributes.slug
                    }
                  })
                "
                >Link
              </nuxt-link>
              <CPseudoBox fontSize="sm" color="gray.500" mt="4">
                <!-- {{
                  new Date(page.attributes.createdAt)
                }} -->
                Updated At:
                {{
                  $dateFns.format(
                    page.attributes.updatedAt,
                    'EEEE, yyyy-MM-dd HH:mm',
                    {
                      locale: `${
                        $i18n.locale === 'en' ? 'en-US' : $i18n.locale
                      }`
                    }
                  )
                }}
                <!-- {{ $i18n.locale }} -->
              </CPseudoBox>
            </c-accordion-panel>
          </c-accordion-item>
        </c-accordion>
      </CSimpleGrid>
      <!--CBox
      v-bind="mainStyles[colorMode]"
      d="flex"
      w="100vw"
      h="100vh"
      flex-dir="column"
      justify-content="center"
    >
      <CHeading text-align="center" mb="4" color="brand.primary">
        ⚡️ Hello chakra-ui/vue
      </CHeading>
      <CFlex justify="center" direction="column" align="center">
        <CBox mb="3">
          <CIconButton
            mr="3"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
            @click="toggleColorMode"
          />
          <CButton left-icon="info" variant-color="blue" @click="showToast">
            Show Toast
          </CButton>
        </CBox>
        <CAvatarGroup>
          <CAvatar
            name="Evan You"
            alt="Evan You"
            src="https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg"
          >
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar
            name="Jonathan Bakebwa"
            alt="Jonathan Bakebwa"
            src="https://res.cloudinary.com/xtellar/image/upload/v1572857445/me_zqos4e.jpg"
          >
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar
            name="Segun Adebayo"
            alt="Segun Adebayo"
            src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg"
          >
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar src="pop">
            <CAvatarBadge size="1.0em" border-color="papayawhip" bg="tomato" />
          </CAvatar>
        </CAvatarGroup>
        <CButton
          left-icon="close"
          variant-color="red"
          mt="3"
          @click="showModal = true"
        >
          Delete Account
        </CButton>
        <CModal :is-open="showModal">
          <CModalOverlay />
          <CModalContent>
            <CModalHeader>Are you sure?</CModalHeader>
            <CModalBody>Deleting user cannot be undone</CModalBody>
            <CModalFooter>
              <CButton @click="showModal = false"> Cancel </CButton>
              <CButton
                margin-left="3"
                variant-color="red"
                @click="showModal = false"
              >
                Delete User
              </CButton>
            </CModalFooter>
            <CModalCloseButton @click="showModal = false" />
          </CModalContent>
        </CModal>
      </CFlex>
    </CBox-->
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CPseudoBox,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionPanel,
  // CButton,
  // CAvatarGroup,
  // CAvatar,
  // CAvatarBadge,
  // CModal,
  // CModalContent,
  // CModalOverlay,
  // CModalHeader,
  // CModalFooter,
  // CModalBody,
  // CModalCloseButton,
  CSimpleGrid,
  // CIconButton,
  // CFlex,
  CHeading
} from '@chakra-ui/vue'

import Vue from 'vue'
// import Pages from '~/components/Pages.vue'
// import Cards from '~/components/Cards.vue'

/* Gql queries */
import { getDataPages, getDataFaqs } from '~/queries'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    // Pages,
    CBox,
    CPseudoBox,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionPanel,
    // CButton,
    // CAvatarGroup,
    // CAvatar,
    // CAvatarBadge,
    // CModal,
    // CModalContent,
    // CModalOverlay,
    // CModalHeader,
    // CModalFooter,
    // CModalBody,
    // CModalCloseButton,
    CSimpleGrid,
    // CIconButton,
    // CFlex,
    CHeading
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    return {
      pages: {},
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
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
