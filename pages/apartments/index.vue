<template>
  <div>
    <div class="xl:px-6 h-[600px]">
      <div
        class="h-full rounded-b-xl bg-[url(/images/apartments1.jpg)] bg-center bg-cover bg-no-repeat"
      />
    </div>

    <div class="mt-24 container">
      <p class="text-lg xl:text-2xl xl:leading-10">
        <strong>BB Network</strong> has been providing quality student
        accommodation <strong>in Rome and Spain</strong> for decades. Our
        student housing is carefully chosen based on their location, comfortable
        and spacious bedrooms, bathrooms, kitchens and common areas. Our
        properties are located in Trastevere, a charming cobblestoned lined
        neighborhood known for its lively nightlife, as well as other popular
        Rome neighborhoods such as the elegant Prati, the historic center of
        Rome and the central residential area of San Giovanni.
      </p>
    </div>

    <section class="mt-24" data-scroll-section>
      <div 
        data-scroll-speed="0.5"
        class="flex gap-8 overflow-clip"
      >
        <nuxt-img
          src="/images/apartments1.jpg"
          format="webp"
          class="w-1/3 rounded-2xl"
        ></nuxt-img>
        <nuxt-img
          src="/images/apartments1.jpg"
          format="webp"
          class="w-1/3 rounded-2xl"
        ></nuxt-img>
        <nuxt-img
          src="/images/apartments1.jpg"
          format="webp"
          class="w-1/3 rounded-2xl"
        ></nuxt-img>
        <nuxt-img
          src="/images/apartments1.jpg"
          format="webp"
          class="w-1/3 rounded-2xl"
        ></nuxt-img>
      </div>
    </section>

    <section class="mt-24 py-12 container">
      <div class="flex justify-center items-center flex-col gap-4">
        <h3 class="text-2xl text-center">CONTACT US ABOUT STUDENT HOUSING</h3>
        <a href="mailto:" class="button-primary-simple">Email Us</a>
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
      scroll: undefined
    }
  },

  mounted() {
    this.scroll = new this.$LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      direction: "horizontal"
    });
  },
};
</script>

<style></style>
