<template>
  <div>
    <div class="bg-white fixed w-full top-0 left-0 h-12 px-12 py-4 flex justify-between z-40">
      <div>
        <img src="~assets/images/logo-black.svg" class="h-full">
      </div>

      <div class="flex items-center gap-6 h-full">
        <nuxt-link exact to="/about-us">ABOUT US</nuxt-link>
        <nuxt-link to="/">FOR UNIVERSITY</nuxt-link>
        <nuxt-link to="/">FOR LANDLORD</nuxt-link>
        <nuxt-link to="/">FOR STUDENTS</nuxt-link>
        <nuxt-link to="/">APARTMENTS</nuxt-link>
        <nuxt-link to="/">CONTACTS</nuxt-link>
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
.nuxt-link-active {
  /* @apply bg-black text-white; */
}
</style>