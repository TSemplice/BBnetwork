<template>
  <div>
    <div class="mt-12 container">
      <p class="uppercase mb-6 text-[16px] leading-[20px]">{{$t('university.subtitle')}}</p>
      <h1 class="text-4xl xl:w-[80%] xl:text-7xl">
        {{$t('university.intro')}}
      </h1>

      <div class="mt-24 xl:w-[80%]">
        <div class="text-lg text-brand-secondary">
          <p v-html="$t('university.p1')"></p>
          <p class="mt-6" v-html="$t('university.p2')"></p>
          <p class="mt-6" v-html="$t('university.p3')"></p>
        </div>
      </div>
    </div>

    <div
      data-aos="zoom-in"
      class="mt-24 pb-[41.6%] bg-[url(/images/university1.jpg)] bg-center bg-cover"
    />

    <div class="mt-24 container">
      <h3 data-aos="fade-right" class="text-4xl lg:w-1/2">
        {{$t('university.list_title')}}
      </h3>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-40 gap-y-12 mt-12">
        <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="200">
          <p>01.</p>
          <h3 class="text-2xl font-bold">{{$t('university.list1_title')}}</h3>
          <p class="text-lg text-brand-secondary">{{$t('university.list1_p')}}</p>
        </div>
        <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="400">
          <p>02.</p>
          <h3 class="text-2xl font-bold">{{$t('university.list2_title')}}</h3>
          <p class="text-lg text-brand-secondary">{{$t('university.list2_p')}}</p>
        </div>
        <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="200">
          <p>03.</p>
          <h3 class="text-2xl font-bold">{{$t('university.list3_title')}}</h3>
          <p class="text-lg text-brand-secondary">{{$t('university.list3_p')}}</p>
        </div>
        <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="400">
          <p>04.</p>
          <h3 class="text-2xl font-bold">{{$t('university.list4_title')}}</h3>
          <p class="text-lg text-brand-secondary">{{$t('university.list4_p')}}</p>
        </div>
      </div>
    </div>

    <section class="mt-24 overflow-hidden relative">
      <div
        class="flex flex-nowrap gap-8 first-of-type:mt-0 mt-4"
        :class="`selector${i}`"
        v-for="i in 3"
        :key="i"
      >
        <nuxt-img
          v-for="j in 4"
          :key="j"
          :src="`/images/university-grid/${j + 4 * (i - 1)}.jpg`"
          format="webp"
          class="lg:w-1/3 rounded-2xl"
        ></nuxt-img>
      </div>
    </section>

    <section class="mt-24 container" v-if="false">
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-12">
        <div class="flex flex-col gap-6">
          <h3 class="text-6xl">FAQ</h3>
          <h4 class="text-2xl">FOR UNIVERSITY</h4>
          <p class="text-xl">Domande sui servizi offerti da BBNetwork</p>
        </div>

        <Accordion v-if="false" :contents="contents" />
      </div>
    </section>

    <section class="mt-24 py-12 container">
      <div class="flex justify-center items-center flex-col gap-4 text-black">
        <h3 class="text-3xl text-center xl:text-[36px] xl:leading[43px] xl:max-w-[471px] tracking-[0.04em] font-bold" data-aos="fade-up">{{$t('contact_us_2')}}</h3>
        <a href="mailto:" class="button-primary-simple" data-aos="fade-up" data-aos-delay="600">{{$t('email_us')}}</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      link: [...i18nHead.link],
      title: this.$t('seo.university.title'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t('seo.university.description'),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t('seo.university.title'),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t('seo.university.description'),
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

  data() {
    return {
      contents: [
        {
          title: "test",
          text: "test",
        },
        {
          title: "test",
          text: "test",
        },
        {
          title: "test",
          text: "test",
        },
      ],
      scroll: undefined,
    };
  },

  mounted() {
    this.$lax.init(); // Add a driver that we use to control our animations
    this.$lax.addDriver(
      "scrollY1",
      () => {
        return window.scrollY/1.2;
      },
      {
        inertiaEnabled: true,
      }
    );
    this.$lax.addDriver(
      "scrollY2",
      () => {
        return window.scrollY/1.2;
      },
      {
        inertiaEnabled: true,
      }
    );
    this.$lax.addDriver(
      "scrollY3",
      () => {
        return window.scrollY/1.2;
      },
      {
        inertiaEnabled: true,
      }
    );

    // Add animation bindings to elements
    this.$lax.addElements(".selector1", {
      scrollY1: {
        translateX: [
          ["elInY-500", "elOutY+200"],
          [-800, 0],
          {inertia: 1}
        ],
      },
    });
    this.$lax.addElements(".selector2", {
      scrollY2: {
        translateX: [
          ["elInY-1000", "elOutY+200"],
          [0, -400],
          {inertia: 1}
        ],
      },
    });
    this.$lax.addElements(".selector3", {
      scrollY3: {
        translateX: [
          ["elInY-1300", "elOutY+200"],
          [-800, 0],
          {inertia: 1}
        ],
      },
    });
  },

  beforeDestroy() {
    this.$lax.removeElements();
  },
};
</script>

<style></style>
