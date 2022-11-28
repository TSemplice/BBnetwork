<template>
  <div>
    <div class="mt-16 xl:mt-32 px-4 xl:px-6">
      <h1 class="w-full xl:w-3/4 text-4xl xl:text-[6.5rem] xl:leading-[6rem]">
        <span class="text-outline">{{ $t("home.intro1") }}</span>
      </h1>
    </div>

    <div class="mt-24 container">
      <h2 class="text-3xl xl:text-[5.5rem] xl:leading-[6rem]">
        {{ $t("home.intro2") }}
        <nuxt-link :to="localePath('/about-us')"
          ><nuxt-img
            src="/images/about1.jpg"
            format="webp"
            class="h-12 xl:h-28 rounded-2xl cursor-pointer w-20 xl:w-56 inline-block"
        /></nuxt-link>
        {{ $t("home.intro3") }}
        <nuxt-link :to="localePath('/about-us')"
          ><nuxt-img
            src="/images/apartments1.jpg"
            format="webp"
            class="h-12 xl:h-28 rounded-2xl cursor-pointer w-20 xl:w-56 inline-block"
        /></nuxt-link>
        <span>{{ $t("home.intro4") }}</span>
      </h2>
    </div>

    <div
      data-aos="zoom-in"
      class="mt-32 h-[500px] bg-[url(/images/university1.jpg)] bg-center bg-cover"
    />

    <div class="mt-32 container">
      <h3 class="text-3xl 2xl:text-[5.2rem] 2xl:leading-[6rem]">
        {{ $t("home.p") }}
      </h3>
    </div>

    <div class="mt-32 grid grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-8 px-4">
      <div class="card" data-aos="fade-up">
        <nuxt-img src="/images/home2.jpg" format="webp"></nuxt-img>
        <h4 class="text-2xl">
          {{ $t("home.cta1") }}
        </h4>
        <nuxt-link
          :to="localePath('/for-university')"
          class="button-primary-simple w-auto"
          >{{ $t("discover") }}</nuxt-link
        >
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="200">
        <nuxt-img src="/images/home3.jpg" format="webp"></nuxt-img>
        <h4 class="text-2xl">
          {{ $t("home.cta2") }}
        </h4>
        <nuxt-link
          :to="localePath('/for-landlords')"
          class="button-primary-simple w-auto"
          >{{ $t("discover") }}</nuxt-link
        >
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="400">
        <nuxt-img src="/images/home4.jpg" format="webp"></nuxt-img>
        <h4 class="text-2xl">
          {{ $t("home.cta3") }}
        </h4>
        <nuxt-link
          :to="localePath('/for-students')"
          class="button-primary-simple w-auto"
          >{{ $t("discover") }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      link: [...i18nHead.link],
      title: this.$t("seo.home.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("seo.home.description"),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t("seo.home.title"),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t("seo.home.description"),
        },
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: this.fetchSocialImage,
        // },
        ...i18nHead.meta,
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.card {
  @apply flex flex-col gap-4 items-start;
  img {
    @apply w-full rounded-2xl;
  }
  h4 {
    @apply text-brand-secondary
  }
}
</style>
