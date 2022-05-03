<template>
  <div>
    <div class="bg-white fixed w-full top-0 left-0 h-12 px-12 py-4 flex justify-between z-40">
      <nuxt-link :to="localePath('/')">
        <img src="~assets/images/logo-black.svg" class="h-full">
      </nuxt-link>

      <div class="nav flex items-center gap-6 h-full">
        <nuxt-link :to="localePath('about-us')">ABOUT US</nuxt-link>
        <nuxt-link :to="localePath('for-university')">FOR UNIVERSITY</nuxt-link>
        <nuxt-link :to="localePath('for-landlords')">FOR LANDLORD</nuxt-link>
        <nuxt-link :to="localePath('for-students')">FOR STUDENTS</nuxt-link>
        <nuxt-link :to="localePath('apartments')">APARTMENTS</nuxt-link>
        <nuxt-link :to="localePath('contacts')">CONTACTS</nuxt-link>
        <nuxt-link to="/">IT</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
a {
  @apply text-black uppercase font-bold;
}
.nav .nuxt-link-active {
  @apply bg-black text-white;
}
</style>