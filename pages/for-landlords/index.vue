<template>
  <div>
    <div class="mt-12 container">
      <h1 class="w-1/2 text-7xl">Cerchi degli alloggi per i tuoi studenti?</h1>

      <div class="mt-24 grid grid-cols-2 gap-44">
        <div class="text-lg">
          <p>
            You’ve decided to study in one of the most beautiful cities in the
            world, <strong>Rome!</strong> Enjoy your stay to the fullest with
            one of the leaders in European student accommodation.
          </p>
          <p class="mt-6">
            <strong>BB Network</strong> has provided
            <strong>student housing in Rome for over 20 years</strong>, making
            it one of the leaders in quality accommodation for international
            students studying in the eternal city. We are partnered with some of
            the most well known universities of Rome and prides itself on
            finding clean, safe and comfortable apartments in central Rome for
            students to have a successful experience abroad.
            <strong>BB Network</strong> also offers accommodation throughout the
            rest of Italy and Europe as well.
          </p>
          <p class="mt-6">
            Our bilingual <strong>support team is on call 24/7</strong> and are
            trained to resolve any issue that may arise at any time of day in
            their home away from home.
          </p>
        </div>
      </div>
    </div>

    <div
      class="mt-24 h-[500px] bg-[url(/images/university1.jpg)] bg-center bg-cover"
    />

    <div class="mt-24 container">
      <div class="grid grid-cols-2 gap-40">
        <div class="flex flex-col gap-8">
          <p>01.</p>
          <h3 class="text-2xl">Servizio di pulizia</h3>
          <p class="text-lg">Offriamo servizi di pulizia giornalieri, settimanali e mensili per tutti i nostri appartamenti. Crediamo che fornendo questo, permettiamo agli studenti di trascorrere il tempo risparmiato esplorando la città e facendo di Roma una casa.</p>
        </div>
        <div class="flex flex-col gap-8">
          <p>01.</p>
          <h3 class="text-2xl">Servizio di pulizia</h3>
          <p class="text-lg">Offriamo servizi di pulizia giornalieri, settimanali e mensili per tutti i nostri appartamenti. Crediamo che fornendo questo, permettiamo agli studenti di trascorrere il tempo risparmiato esplorando la città e facendo di Roma una casa.</p>
        </div>
        <div class="flex flex-col gap-8">
          <p>01.</p>
          <h3 class="text-2xl">Servizio di pulizia</h3>
          <p class="text-lg">Offriamo servizi di pulizia giornalieri, settimanali e mensili per tutti i nostri appartamenti. Crediamo che fornendo questo, permettiamo agli studenti di trascorrere il tempo risparmiato esplorando la città e facendo di Roma una casa.</p>
        </div>
        <div class="flex flex-col gap-8">
          <p>01.</p>
          <h3 class="text-2xl">Servizio di pulizia</h3>
          <p class="text-lg">Offriamo servizi di pulizia giornalieri, settimanali e mensili per tutti i nostri appartamenti. Crediamo che fornendo questo, permettiamo agli studenti di trascorrere il tempo risparmiato esplorando la città e facendo di Roma una casa.</p>
        </div>
      </div>
    </div>

    <section class="mt-24" data-scroll-section>
      <div 
        data-scroll-speed="0.5"
        class="flex gap-8"
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

    <section class="mt-24 container">
      <div class="grid grid-cols-2 gap-12">
        <div class="flex flex-col gap-6">
          <h3 class="text-6xl">FAQ</h3>
          <h4 class="text-2xl">FOR UNIVERSITY</h4>
          <p class="text-xl">Domande sui servizi offerti da BBNetwork</p>
        </div>

        <Accordion :contents="contents" />
      </div>
    </section>

    <section class="mt-24 py-12">
      <div class="flex justify-center items-center flex-col gap-4">
        <h3 class="text-2xl">CONTACT US ABOUT STUDENT HOUSING</h3>
        <a href="mailto:" class="button-primary-simple">Email Us</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
      ]
    }
  }
};
</script>

<style></style>
