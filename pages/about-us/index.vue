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

      <div class="overflow-x-hidden">
        <nuxt-img
          data-aos="fade-left"
          class="mt-24 rounded-2xl"
          src="/images/about2.jpg"
          format="webp"
        />
      </div>
    </div>

    <div class="mt-24 container xl:mx-0 xl:px-[120px] xl:max-w-[100%]">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-6" data-aos="fade-right">
        <div class="xl:col-start-1 xl:col-span-5">
          <h3 class="text-3xl text-brand-secondary">{{$t('aboutus.cta1_q')}}</h3>
          <nuxt-link
            :class="[$style.button]"
            :to="localePath('/for-university')"
          >
            <span>
              {{$t('discover')}}
            </span>
            <span>
              <Arrow />
            </span>
          </nuxt-link>
        </div>
        <div class="xl:col-span-4 xl:col-start-9">
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
          <nuxt-link
            :class="[$style.button]"
            :to="localePath('/for-landlords')"
          >
            <span>
              {{$t('discover')}}
            </span>
            <span>
              <Arrow />
            </span>
          </nuxt-link>
        </div>
        <div class="xl:col-span-4 xl:col-start-9">
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
          <nuxt-link
            :class="[$style.button]"
            :to="localePath('/for-students')"
          >
            <span>
              {{$t('discover')}}
            </span>
            <span>
              <Arrow />
            </span>
          </nuxt-link>
        </div>
        <div class="xl:col-span-4 xl:col-start-9">
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

<style module lang="postcss">
.button {
  @apply mt-[18px]
    inline-block
    flex
    gap-2;

  & > span:first-of-type {
    @apply inline-block
      px-6
      py-3
      bg-brand-primary
      text-brand-light
      text-[18px]
      font-bold;

    border-radius: 24px;
    letter-spacing: 0.04em;
    border: 1px solid #30279A;
    transition: all 0.4s;
  }

  & > span:last-of-type {
    @apply inline-block
      w-[53px]
      h-[53px]
      flex
      justify-center
      items-center
      px-3
      bg-brand-primary;

    border-radius: 100%;
    border: 1px solid #30279A;
    transition: all 0.4s;

    & svg {
      @apply w-[24px]
        h-auto;

      & path {
        fill: #ffffff;
        transition: all 0.4s;
      }
    }
  }

  &:hover {
    & > span {
      @apply bg-transparent
        text-brand-primary;

      & svg {
        & path {
          fill: #30279A;
        }
      }
    }
  }
}
</style>
