<template>
  <div>
    <div class="xl:px-12 h-[600px]">
      <div data-aos="fade-down"
        class="h-full rounded-b-3xl bg-[url(/images/about1.jpg)] bg-center bg-cover bg-no-repeat filter brightness-150"
      />
    </div>

    <div class="mt-12 container">
      <p class="uppercase mb-6 text-[16px] leading-[20px]">{{$t('aboutus.subtitle')}}</p>
      <h1 class="text-4xl xl:w-[80%] xl:text-[96px] xl:leading-[100px]">
        {{$t('aboutus.intro')}}
      </h1>
    </div>

    <div class="mt-24 grid grid-cols-1 xl:grid-cols-2 gap-x-44 gap-y-12 container">
      <div class="text-lg xl:pr-24 text-brand-secondary">
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

    <div class="mt-24 container xl:mx-12 xl:px-0">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-6" data-aos="fade-right">
        <div class="xl:col-start-1 xl:col-span-5">
          <h3 class="text-3xl text-brand-secondary">{{$t('aboutus.cta1_q')}}</h3>
          <nuxt-link class="mt-4 button-primary" :to="localePath('/for-university')"
            >{{$t('discover')}}</nuxt-link
          >
        </div>
        <div class="xl:col-span-4 xl:col-start-8">
          <h4 class="text-bold text-xl">
            {{$t('aboutus.cta1_title')}}
          </h4>
          <p class="mt-6 text-brand-secondary">
            {{$t('aboutus.cta1_p')}}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-6 mt-20" data-aos="fade-right">
        <div class="xl:col-start-1 xl:col-span-5">
          <h3 class="text-3xl text-brand-secondary">{{$t('aboutus.cta2_q')}}</h3>
          <nuxt-link class="mt-4 button-primary" :to="localePath('/for-landlords')"
            >{{$t('discover')}}</nuxt-link
          >
        </div>
        <div class="xl:col-span-4 xl:col-start-8">
          <h4 class="text-bold text-xl">
            {{$t('aboutus.cta2_title')}}
          </h4>
          <p class="mt-6 text-brand-secondary">
            {{$t('aboutus.cta2_p')}}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-6 mt-20" data-aos="fade-right">
        <div class="xl:col-start-1 xl:col-span-5">
          <h3 class="text-3xl text-brand-secondary">{{$t('aboutus.cta3_q')}}</h3>
          <nuxt-link class="mt-4 button-primary" :to="localePath('/for-students')"
            >{{$t('discover')}}</nuxt-link
          >
        </div>
        <div class="xl:col-span-4 xl:col-start-8">
          <h4 class="text-bold text-xl">
            {{$t('aboutus.cta3_title')}}
          </h4>
          <p class="mt-6 text-brand-secondary">
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
