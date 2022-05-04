<template>
  <div class="fixed w-full z-40">
    <div
      class="bg-white top-0 left-0 h-14 xl:h-12 px-4 xl:px-12 py-4 flex justify-between items-center"
    >
      <nuxt-link :to="localePath('/')" @click="toggleMenu">
        <img
          src="~assets/images/logo-black.svg"
          class="h-auto w-1/2 xl:h-full xl:w-auto"
        />
      </nuxt-link>

      <div class="nav hidden xl:flex items-center gap-6 h-full">
        <nuxt-link :to="localePath('about-us')">ABOUT US</nuxt-link>
        <nuxt-link :to="localePath('for-university')">FOR UNIVERSITY</nuxt-link>
        <nuxt-link :to="localePath('for-landlords')">FOR LANDLORD</nuxt-link>
        <nuxt-link :to="localePath('for-students')">FOR STUDENTS</nuxt-link>
        <nuxt-link :to="localePath('apartments')">APARTMENTS</nuxt-link>
        <nuxt-link :to="localePath('contacts')">CONTACTS</nuxt-link>
        <nuxt-link class="!bg-white !text-black" to="/">IT</nuxt-link>
      </div>

      <div class="flex items-center xl:hidden gap-4" @click="toggleMenu">
        <span v-if="!isMenuOpen">MENU</span>
        <span v-else>CLOSE</span>
        <nuxt-img src="/images/menu.svg" class="w-8" v-if="!isMenuOpen" />
        <nuxt-img src="/images/plus.svg" class="w-8 rotate-45" v-else/>
      </div>
    </div>

    <div
      class="absolute top-[100%] left-0 w-full bg-white border-b-2 border-black"
      v-if="isMenuOpen"
    >
      <div class="nav py-8 flex flex-col items-center gap-6 container" @click="toggleMenu">
        <nuxt-link :to="localePath('about-us')">ABOUT US</nuxt-link>
        <nuxt-link :to="localePath('for-university')">FOR UNIVERSITY</nuxt-link>
        <nuxt-link :to="localePath('for-landlords')">FOR LANDLORD</nuxt-link>
        <nuxt-link :to="localePath('for-students')">FOR STUDENTS</nuxt-link>
        <nuxt-link :to="localePath('apartments')">APARTMENTS</nuxt-link>
        <nuxt-link :to="localePath('contacts')">CONTACTS</nuxt-link>
        <nuxt-link class="!bg-white !text-black" to="/">IT</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="postcss" scoped>
a {
  @apply text-black uppercase font-bold;
}
.nav .nuxt-link-active {
  @apply bg-black text-white;
}
</style>
