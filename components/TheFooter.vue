<template>
  <div>
    <div class="bg-brand-primary text-white pt-[64px] pb-[72px] xl:py-12 px-5 xl:px-0">
      <div class="grid grid-cols-1 xl:grid-cols-2 xl:px-12">
        <FooterLogo class="w-[277px] h-auto xl:w-[344px]"/>
        <div :class="[$style.links, `flex flex-col xl:flex-row gap-[64px] xl:gap-[122px] justify-end mt-[80px] xl:mt-0`]">
          <div :class="[$style.column]">
            <nuxt-link :to="localePath('about-us')">About us</nuxt-link>
            <nuxt-link :to="localePath('apartments')">Appartments</nuxt-link>
            <nuxt-link :to="localePath('contacts')">Contacts</nuxt-link>
          </div>
          <div :class="[$style.column]">
            <nuxt-link :to="localePath('for-university')">For university</nuxt-link>
            <nuxt-link :to="localePath('for-landlords')">For lanlord</nuxt-link>
            <nuxt-link :to="localePath('for-students')">For students</nuxt-link>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-[64px] xl:gap-0 xl:px-12 xl:flex-row justify-between mt-40">
        <div class="flex flex-col xl:flex-row gap-x-8 gap-y-6 order-last xl:order-1">
          <p class="uppercase">©2022 bbnestork srl</p>
          <a class="uppercase" href="">Privacy Policy</a>
          <a class="uppercase" href="">Cookie Policy</a>
          <a class="uppercase" href="">Credits</a>
        </div>

        <div class="flex gap-8 mt-4 xl:mt-0 order-1 xl:order-last">
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

<style lang="postcss" module>
.column {
  @apply flex
    flex-col
    gap-6;

  & a {
    @apply block
      uppercase
      font-bold
      text-sm
      leading-6;
  }
}

.links {
  & a {
    transition: all 0.8s;

    &:global(.nuxt-link-exact-active) {
      @apply text-brand-tertiary;
    }
  }
}
</style>
