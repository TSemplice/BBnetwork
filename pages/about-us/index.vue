<template>
  <div>
    <div class="xl:px-6 h-[600px]">
      <div data-aos="fade-down"
        class="h-full rounded-b-xl bg-[url(/images/about1.jpg)] bg-center bg-cover bg-no-repeat filter brightness-150"
      />
    </div>

    <div class="mt-12 container">
      <h1 class="text-4xl xl:w-1/2 xl:text-7xl">
        {{$t('aboutus.intro')}}
      </h1>
    </div>

    <div class="mt-24 grid grid-cols-1 xl:grid-cols-2 gap-x-44 gap-y-12 container">
      <div class="text-lg xl:pr-24">
        <p v-html="$t('aboutus.p1')">
        </p>
        <p class="mt-6" v-html="$t('aboutus.p2')">
        </p>
        <p class="mt-6" v-html="$t('aboutus.p3')">
        </p>
      </div>

      <div class="overflow-x-hidden lg:overflow-x-auto">
        <nuxt-img
          data-aos="fade-left"
          class="mt-24 rounded-2xl"
          src="/images/about2.jpg"
          format="webp"
        />
      </div>
    </div>

    <div class="mt-24 container">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-6" data-aos="fade-right">
        <div class="xl:col-start-3 xl:col-span-2">
          <h3 class="text-xl">{{$t('aboutus.cta1_q')}}</h3>
          <nuxt-link class="mt-4 button-primary" :to="localePath('/for-university')"
            >{{$t('discover')}}</nuxt-link
          >
        </div>
        <div class="xl:col-span-6 xl:col-start-6">
          <h4 class="underline text-bold text-3xl">
            {{$t('aboutus.cta1_title')}}
          </h4>
          <p class="mt-6">
            {{$t('aboutus.cta1_p')}}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-6 mt-20" data-aos="fade-right">
        <div class="xl:col-start-3 xl:col-span-2">
          <h3 class="text-xl">{{$t('aboutus.cta2_q')}}</h3>
          <nuxt-link class="mt-4 button-primary" :to="localePath('/for-landlords')"
            >{{$t('discover')}}</nuxt-link
          >
        </div>
        <div class="xl:col-span-6 xl:col-start-6">
          <h4 class="underline text-bold text-3xl">
            {{$t('aboutus.cta2_title')}}
          </h4>
          <p class="mt-6">
            {{$t('aboutus.cta2_p')}}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-6 mt-20" data-aos="fade-right">
        <div class="xl:col-start-3 xl:col-span-2">
          <h3 class="text-xl">{{$t('aboutus.cta3_q')}}</h3>
          <nuxt-link class="mt-4 button-primary" :to="localePath('/for-students')"
            >{{$t('discover')}}</nuxt-link
          >
        </div>
        <div class="xl:col-span-6 xl:col-start-6">
          <h4 class="underline text-bold text-3xl">
            {{$t('aboutus.cta3_title')}}
          </h4>
          <p class="mt-6">
            {{$t('aboutus.cta3_p')}}
          </p>
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
      title: this.$t('seo.contacts.title'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t('seo.contacts.description'),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t('seo.contacts.title'),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t('seo.contacts.description'),
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

<style></style>
