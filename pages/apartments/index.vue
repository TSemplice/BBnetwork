<template>
  <div>
    <div class="xl:px-6 h-[600px]">
      <div data-aos="fade-down"
        class="h-full rounded-b-xl bg-[url(/images/apartments1.jpg)] bg-center bg-cover bg-no-repeat"
      />
    </div>

    <div class="mt-24 container">
      <p class="text-lg xl:text-2xl xl:leading-10" v-html="$t('apartments.intro')">
      </p>
    </div>

    <section class="mt-24 overflow-hidden relative">
      <div class="flex flex-nowrap gap-8 first-of-type:mt-0 mt-4" :class="`selector${i}`" v-for="i in 3" :key="i">
        <nuxt-img
          v-for="j in 4"
          :key="j"
          :src="`/images/apartments-grid/${j + 4*(i-1)}.jpg`"
          format="webp"
          class="lg:w-1/3 rounded-2xl"
        ></nuxt-img>
      </div>
    </section>

    <section class="mt-24 py-12 container">
      <div class="flex justify-center items-center flex-col gap-4">
        <h3 class="text-2xl text-center" data-aos="fade-up">{{$t('contact_us')}}</h3>
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
      meta: [
        // {
        //   hid: "title",
        //   name: "title",
        //   content: this.metas.meta_title,
        // },
        // {
        //   hid: "description",
        //   name: "description",
        //   content: this.metas.meta_description,
        // },
        // {
        //   hid: "og:title",
        //   name: "og:title",
        //   content: this.fetchSocialTitle,
        // },
        // {
        //   hid: "og:description",
        //   name: "og:description",
        //   content: this.fetchSocialDescription,
        // },
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: this.fetchSocialImage,
        // },
        // {
        //   hid: "og:url",
        //   property: "og:url",
        //   content: "https://www.smartpricing.it/" + this.$i18n.locale + "/",
        // },
        ...i18nHead.meta,
      ],
    };
  },

  data() {
    return {
      scroll: undefined,
    };
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

<style></style>
