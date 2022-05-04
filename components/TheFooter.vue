<template>
  <div>
    <div class="bg-black text-white py-12">
      <div class="grid grid-cols-1 xl:grid-cols-2 container">
        <nuxt-img src="/images/logo.svg" />
        <div class="grid grid-cols-2 gap-4 mt-8 xl:mt-0">
          <div>
            <nuxt-link to="/">About us</nuxt-link>
            <nuxt-link to="/">Appartments</nuxt-link>
            <nuxt-link to="/">Contacts</nuxt-link>
          </div>
          <div>
            <nuxt-link to="/">For university</nuxt-link>
            <nuxt-link to="/">For properties owner</nuxt-link>
            <nuxt-link to="/">For properties owner</nuxt-link>
          </div>
        </div>
      </div>

      <div class="container flex flex-col xl:flex-row justify-between mt-24">
        <div class="flex flex-col xl:flex-row gap-x-8 gap-y-4">
          <p class="uppercase">©2022 bbnestork srl</p>
          <a class="uppercase" href="">Privacy Policy</a>
          <a class="uppercase" href="">Cookie Policy</a>
          <a class="uppercase" href="">Credits</a>
        </div>

        <div class="flex gap-8 mt-4 xl:mt-0">
          <a class="uppercase" href="">IG</a>
          <a class="uppercase" href="">FB</a>
          <a class="uppercase" href="">IN</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.grid-cols-2 div a {
  @apply block uppercase font-bold mt-6 first-of-type:mt-0;
}
</style>