<template>
  <div>
    <div class="mt-16 xl:mt-[80px] px-4 xl:px-12">
      <h1 class="w-full xl:w-3/4 text-4xl xl:text-[96px] xl:leading-[100px]">
        <span class="text-outline">{{ $t("home.intro1") }}</span>
      </h1>
    </div>

    <div class="mt-24 container xl:pl-[120px] xl:pr-[120px] xl:max-w-auto xl:w-full">
      <h2 class="text-3xl xl:text-[70px] xl:leading-[73px]">
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
      class="mt-32 w-full pb-[41.6%] bg-[url(/images/university1.jpg)] bg-center bg-cover"
    />

    <div class="mt-32 container xl:pl-[120px] xl:pr-[120px] xl:max-w-auto xl:w-full">
      <h3 class="text-3xl xl:text-[70px] xl:leading-[73px]">
        {{ $t("home.p") }}
      </h3>
    </div>

    <div class="mt-32 grid grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-8 px-4 xl:px-12">
      <div class="card" data-aos="fade-up">
        <nuxt-img src="/images/home2.jpg" format="webp"></nuxt-img>
        <div class="flex flex-col h-full justify-between">
          <h4 class="text-2xl">
            {{ $t("home.cta1") }}
          </h4>
          <nuxt-link
            :to="localePath('/for-university')"
            class="button-primary-simple w-[fit-content] mt-[30px]"
          >
            {{ $t("discover") }}
          </nuxt-link>
        </div>
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="200">
        <nuxt-img src="/images/home3.jpg" format="webp"></nuxt-img>
        <div class="flex flex-col h-full justify-between">
          <h4 class="text-2xl">
            {{ $t("home.cta2") }}
          </h4>
          <nuxt-link
            :to="localePath('/for-landlords')"
            class="button-primary-simple w-[fit-content] mt-[30px]"
          >
            {{ $t("discover") }}
          </nuxt-link>
        </div>
      </div>
      <div class="card" data-aos="fade-up" data-aos-delay="400">
        <nuxt-img src="/images/home4.jpg" format="webp"></nuxt-img>
        <div class="flex flex-col h-full justify-between">
          <h4 class="text-2xl">
            {{ $t("home.cta3") }}
          </h4>
          <nuxt-link
            :to="localePath('/for-students')"
            class="button-primary-simple w-[fit-content] mt-[30px]"
          >
            {{ $t("discover") }}
          </nuxt-link>
        </div>
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
