<template>
  <div>
    <div class="xl:px-12 h-[600px]">
      <div data-aos="fade-down"
        class="h-full rounded-b-xl bg-[url(/images/contacts1.jpg)] bg-center bg-cover bg-no-repeat"
      />
    </div>

    <div class="mt-12 container">
      <p class="uppercase mb-6 text-[16px] leading-[20px]">{{$t('contacts.subtitle')}}</p>
      <h1 class="text-4xl xl:w-1/2 xl:text-7xl">BB Network, leaders in Rome student housing.</h1>

      <div class="mt-12">
        <p class="font-bold">BB Network srl</p>
        <p>Piazzale Gregorio VII 39</p>
        <p>00164 Roma</p>
        <a href="https://goo.gl/maps/87Q1TSopykn3LxkZA" target="_blank" class="font-bold underline">COME RAGGIUNGERCI</a>
      </div>

      <div class="mt-12">
        <p>E. <a class="font-bold underline" href="mailto:info@bb.network">INFO@BB.NETWORK</a> </p>
        <p>T. <a class="font-bold underline" href="tel:+39063334567">+39 063334567</a> </p>
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
