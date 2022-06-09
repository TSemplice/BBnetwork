<template>
  <div class="sticky w-full z-40 top-0 left-0 transition-[top]" id="navbar">
    <div
      class="desktop-nav bg-white h-14 xl:h-12 transition-all px-4 xl:px-12 py-4 flex justify-between items-center"
    >
      <nuxt-link
        :to="localePath('/')"
        @click="toggleMenu"
        class="!bg-transparent"
      >
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
        <div class="flex gap-2 items-center">
          <nuxt-link :to="switchLocalePath('it')">IT</nuxt-link>
          <span class="text-2xl text-black">|</span>
          <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
        </div>
      </div>

      <div class="flex items-center xl:hidden gap-4" @click="toggleMenu">
        <span v-if="!isMenuOpen">MENU</span>
        <span v-else>CLOSE</span>
        <nuxt-img src="/images/menu.svg" class="w-8" v-if="!isMenuOpen" />
        <nuxt-img src="/images/plus.svg" class="w-8 rotate-45" v-else />
      </div>
    </div>

    <div
      class="mobile-nav fixed top-0 left-0 w-full h-full bg-brand-secondary"
      v-if="isMenuOpen"
    >
      <div class="flex flex-col h-full pt-10 justify-between">
        <div class="flex flex-col gap-4 container" @click="toggleMenu">
          <nuxt-link exact :to="localePath('/')">Home</nuxt-link>
          <nuxt-link :to="localePath('about-us')">About Us</nuxt-link>
          <nuxt-link :to="localePath('for-university')"
            >For University</nuxt-link
          >
          <nuxt-link :to="localePath('for-landlords')">For Landlords</nuxt-link>
          <nuxt-link :to="localePath('for-students')">For Students</nuxt-link>
          <nuxt-link :to="localePath('apartments')">Apartments</nuxt-link>
          <nuxt-link :to="localePath('contacts')">Contacts</nuxt-link>
        </div>
        <div class="flex flex-col gap-4 justify-between">
          <div class="flex gap-2 container" @click="toggleMenu">
            <nuxt-link :to="switchLocalePath('it')">IT</nuxt-link>
            <span class="text-2xl text-white">|</span>
            <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
          </div>

          <div
            class="w-full bg-white h-12 flex justify-end items-center container"
            @click="toggleMenu"
          >
            <p>Close</p>
            <nuxt-img src="/images/plus.svg" class="w-8 rotate-45"></nuxt-img>
          </div>
        </div>
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
      if (this.isMenuOpen) {
        document.body.style.overflowY = "auto";
      } else {
        document.body.style.overflowY = "hidden";
      }
      this.isMenuOpen = !this.isMenuOpen;
    },
  },

  mounted() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").classList.remove("!-top-14");
      } else {
        document.getElementById("navbar").classList.add("!-top-14");
      }
      prevScrollpos = currentScrollPos;
    };
  },
};
</script>

<style lang="postcss" scoped>
.desktop-nav a {
  @apply text-black uppercase font-bold;
}
.mobile-nav a {
  @apply text-white text-3xl font-bold;
}
.desktop-nav .nuxt-link-active {
  @apply bg-black text-white;
}
.desktop-nav .nuxt-link-active{
  @apply underline bg-transparent text-black;
} 
.mobile-nav .nuxt-link-active {
  @apply underline bg-transparent text-white;
}
</style>
