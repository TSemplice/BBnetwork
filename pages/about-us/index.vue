<template>
  <div>
    <div class="px-6 h-[600px]">
      <div
        class="h-full rounded-b-xl bg-[url(/images/about1.jpg)] bg-center bg-cover bg-no-repeat filter brightness-150"
      />
    </div>

    <div class="mt-12 container">
      <h1 class="w-1/2 text-7xl">
        “Welcome to Rome student housing - your home away from home”
      </h1>
    </div>

    <div class="mt-24 grid grid-cols-2 gap-44 container">
      <div class="text-lg pr-24">
        <p>
          You’ve decided to study in one of the most beautiful cities in the
          world, <strong>Rome!</strong> Enjoy your stay to the fullest with one
          of the leaders in European student accommodation.
        </p>
        <p class="mt-6">
          <strong>BB Network</strong> has provided
          <strong>student housing in Rome for over 20 years</strong>, making it
          one of the leaders in quality accommodation for international students
          studying in the eternal city. We are partnered with some of the most
          well known universities of Rome and prides itself on finding clean,
          safe and comfortable apartments in central Rome for students to have a
          successful experience abroad. <strong>BB Network</strong> also offers
          accommodation throughout the rest of Italy and Europe as well.
        </p>
        <p class="mt-6">
          Our bilingual <strong>support team is on call 24/7</strong> and are
          trained to resolve any issue that may arise at any time of day in
          their home away from home.
        </p>
      </div>

      <div>
        <nuxt-img
          class="mt-24 rounded-2xl"
          src="/images/about2.jpg"
          format="webp"
        />
      </div>
    </div>

    <div class="mt-24 container">
      <div class="grid grid-cols-12">
        <div class="col-start-3 col-span-2">
          <h3 class="text-xl">ARE YOU A UNIVERSITY?</h3>
          <nuxt-link class="mt-4 button-primary" to="/"
            >Discover more</nuxt-link
          >
        </div>
        <div class="col-span-6 col-start-6">
          <p class="underline uppercase text-3xl">
            Connects Students to house in rome
          </p>
          <p class="mt-6">
            Join BB Network’s extensive team of trusted affiliate universities
            and find student accommodation in Rome for your enrolled students.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-12 mt-20">
        <div class="col-start-3 col-span-2">
          <h3 class="text-xl">ARE YOU A UNIVERSITY?</h3>
          <nuxt-link class="mt-4 button-primary" to="/"
            >Discover more</nuxt-link
          >
        </div>
        <div class="col-span-5 col-start-6">
          <p class="underline uppercase text-3xl">
            Connects Students to house in rome
          </p>
          <p class="mt-6">
            Join BB Network’s extensive team of trusted affiliate universities
            and find student accommodation in Rome for your enrolled students.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-12 mt-20">
        <div class="col-start-3 col-span-2">
          <h3 class="text-xl">ARE YOU A UNIVERSITY?</h3>
          <nuxt-link class="mt-4 button-primary" to="/"
            >Discover more</nuxt-link
          >
        </div>
        <div class="col-span-5 col-start-6">
          <p class="underline uppercase text-3xl">
            Connects Students to house in rome
          </p>
          <p class="mt-6">
            Join BB Network’s extensive team of trusted affiliate universities
            and find student accommodation in Rome for your enrolled students.
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
};
</script>

<style></style>
