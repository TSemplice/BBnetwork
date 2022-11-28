<template>
  <div>
    <div class="mt-12 container">
      <h1 class="text-4xl xl:w-2/3 xl:text-7xl">Cerchi degli alloggi per i tuoi studenti?</h1>

      <div class="mt-24 xl:w-2/3">
        <div class="text-lg text-brand-secondary">
          <p v-html="$t('students.p1')">
          </p>
          <p class="mt-6" v-html="$t('students.p2')">
          </p>
          <p class="mt-6" v-html="$t('students.p3')">
          </p>
        </div>
      </div>
    </div>

    <div data-aos="zoom-in"
      class="mt-24 h-[500px] bg-[url(/images/students1.png)] bg-center bg-cover"
    />

    <div class="mt-24 container">
      <h3 data-aos="fade-right" class="text-4xl uppercase lg:w-1/2">{{$t('students.list_title')}}</h3>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-40 gap-y-12 mt-12">
        <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="200">
          <p>01.</p>
          <h3 class="text-2xl">{{$t('students.list1_title')}}</h3>
          <p class="text-lg text-brand-secondary">{{$t('students.list1_p')}}</p>
        </div>
        <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="400">
          <p>02.</p>
          <h3 class="text-2xl">{{$t('students.list2_title')}}</h3>
          <p class="text-lg text-brand-secondary">{{$t('students.list2_p')}}</p>
        </div>
        <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="200">
          <p>03.</p>
          <h3 class="text-2xl">{{$t('students.list3_title')}}</h3>
          <p class="text-lg text-brand-secondary">{{$t('students.list3_p')}}</p>
        </div>
        <div class="flex flex-col gap-8" data-aos="fade-up" data-aos-delay="400">
          <p>04.</p>
          <h3 class="text-2xl">{{$t('students.list4_title')}}</h3>
          <p class="text-lg text-brand-secondary">{{$t('students.list4_p')}}</p>
        </div>
      </div>
    </div>

    <section class="mt-24 overflow-hidden relative">
      <div class="flex flex-nowrap gap-8 first-of-type:mt-0 mt-4" :class="`selector${i}`" v-for="i in 3" :key="i">
        <nuxt-img
          v-for="j in 4"
          :key="j"
          :src="`/images/students-grid/${j + 4*(i-1)}.jpg`"
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

        <Accordion :contents="contents" />
      </div>
    </section>

    <section class="mt-24 py-12 container">
      <div class="flex justify-center items-center flex-col gap-4 text-black">
        <h3 class="text-3xl text-center uppercase" data-aos="fade-up">{{$t('contact_us')}}</h3>
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
      title: this.$t('seo.students.title'),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t('seo.students.description'),
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.$t('seo.students.title'),
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$t('seo.students.description'),
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
          text: "test"
        },
        {
          title: "test",
          text: "test"
        },
        {
          title: "test",
          text: "test"
        }
      ],
      scroll: undefined
    }
  },

  mounted() {
    this.$lax.init(); // Add a driver that we use to control our animations
    this.$lax.addDriver(
      "scrollY1",
      () => {
        return window.scrollY/1.8;
      },
      {
        inertiaEnabled: true,
      }
    );
    this.$lax.addDriver(
      "scrollY2",
      () => {
        return window.scrollY/1.8;
      },
      {
        inertiaEnabled: true,
      }
    );
    this.$lax.addDriver(
      "scrollY3",
      () => {
        return window.scrollY/1.8;
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
          {inertia: 2}
        ],
      },
    });
    this.$lax.addElements(".selector2", {
      scrollY2: {
        translateX: [
          ["elInY-1000", "elOutY+200"],
          [0, -800],
          {inertia: 2}
        ],
      },
    });
    this.$lax.addElements(".selector3", {
      scrollY3: {
        translateX: [
          ["elInY-1300", "elOutY+200"],
          [-800, 0],
          {inertia: 2}
        ],
      },
    });
  },

  beforeDestroy(){
    this.$lax.removeElements()
  }

};
</script>

<style lang="postcss" scoped>
.bullet {
  @apply flex gap-5 items-center;
  img {
    @apply w-6;
  }
  p {
    @apply text-lg xl:w-1/2;
  }
}
</style>
