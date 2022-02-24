<template>
  <div v-chakra position="relative">
    <div
      v-chakra
      :width="['100%', '75%']"
      :px="[0, 0]"
      mx="auto"
      display="block"
      position="relative"
      zIndex="1"
    >
      <CBox :width="['100%']" :px="[2, 0]" mx="auto" :py="[4]">
        <header
          v-chakra
          display="flex"
          justifyItems="center"
          flexDirection="row"
          justifyContent="space-between"
          alignContent="stretch"
          verticalAlign="middle"
        >
          <nuxt-link v-chakra to="/" :mr="[0, 4]" :mb="[2, 4]" :w="['120px']">
            <img
              v-chakra
              h="39"
              :mb="[0]"
              display="inline"
              :src="require('~/static/img/link-simple-light.svg')"
            />
            <h2
              v-chakra
              color="white"
              fontSize="1.25rem"
              fontWeight="bolder"
              display="inline"
              verticalAlign="middle"
            >
              NUXT<span v-chakra color="green.500">JS</span>
            </h2>
          </nuxt-link>
          <Languages />
          <CBox mb="3" float="right">
            <CIconButton
              :mr="[0]"
              :icon="colorMode === 'light' ? 'moon' : 'sun'"
              :aria-label="`Switch to ${
                colorMode === 'light' ? 'dark' : 'light'
              } mode`"
              @click="toggleColorMode"
            />
          </CBox>
        </header>
      </CBox>
    </div>
    <div
      v-chakra
      :width="['100%']"
      mx="auto"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      minH="320px"
      position="absolute"
      top="0"
      left="0"
      right="0"
      zIndex="0"
    ></div>
  </div>
</template>

<script>
export default {
  inject: ['$chakraColorMode', '$toggleColorMode'],
  computed: {
    colorMode() {
      return this.$chakraColorMode()
    },
    theme() {
      return this.$chakraTheme()
    },
    toggleColorMode() {
      return this.$toggleColorMode
    }
  }
  // props: {
  //   // type: Array,
  //   // required: true,
  //   // default: () => []
  //   colorMode: { type: String, default: () => '' },
  //   theme: { type: String, default: () => '' },
  //   toggleColorMode: { type: Boolean, default: () => false }
  // }
}
</script>
