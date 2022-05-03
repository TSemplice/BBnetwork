<template>
  <div>
    <div class="mt-32 container">
      <h1 class="w-3/4 text-[6.5rem] leading-[6rem]">
        BB Network, leaders in Rome student housing.
      </h1>
    </div>

    <div class="mt-24 container px-32">
      <h2 class="text-[5.5rem] leading-[6rem]">
        We have been connecting universities with property owners to provide
        quality
        <nuxt-link :to="localePath('/about-us')"
          ><nuxt-img
            src="/images/about1.jpg"
            format="webp"
            class="h-28 rounded-2xl cursor-pointer w-56 inline-block"
        /></nuxt-link>
        housing for students in
        <nuxt-link :to="localePath('/about-us')"
          ><nuxt-img
            src="/images/apartments1.jpg"
            format="webp"
            class="h-28 rounded-2xl cursor-pointer w-56 inline-block"
        /></nuxt-link>
        Rome and Barcelona for over twenty years.
      </h2>
    </div>

    <div
      class="mt-32 h-[500px] bg-[url(/images/university1.jpg)] bg-center bg-cover"
    />

    <div class="mt-32 container px-32">
      <h3 class="text-[5.2rem] leading-[6rem]">
        BB Network offers 3 distinct services related to student housing
        connecting universities, landlords and students
      </h3>
    </div>

    <div class="mt-32 grid grid-cols-3 gap-4 px-4">
      <div class="card">
        <nuxt-img src="/images/home2.jpg" format="webp"></nuxt-img>
        <h4 class="text-2xl">
          Are you a university looking for available homes for students?
        </h4>
        <nuxt-link to="/" class="button-primary-simple w-auto"
          >Discover More</nuxt-link
        >
      </div>
      <div class="card">
        <nuxt-img src="/images/home3.jpg" format="webp"></nuxt-img>
        <h4 class="text-2xl">
          Are you a university looking for available homes for students?
        </h4>
        <nuxt-link to="/" class="button-primary-simple w-auto"
          >Discover More</nuxt-link
        >
      </div>
      <div class="card">
        <nuxt-img src="/images/home4.jpg" format="webp"></nuxt-img>
        <h4 class="text-2xl">
          Are you a university looking for available homes for students?
        </h4>
        <nuxt-link to="/" class="button-primary-simple w-auto"
          >Discover More</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.card {
  @apply flex flex-col gap-4 items-start;
  img {
    @apply w-full rounded-2xl;
  }
}
</style>
