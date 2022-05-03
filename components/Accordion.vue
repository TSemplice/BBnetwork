<template>
  <div class="accordion">
    <div class="grid grid-cols-1 gap-4 items-start">
      <article
        v-for="(content, i) in contents"
        :key="i"
        class="label p-2 cursor-pointer border-b-4 border-black"
      >
        <header class="flex justify-between items-center min-h-[51px]">
          <h4 class="text-black text-2xl font-black w-5/6">
            {{ content.title }}
          </h4>
          <div class="more">
            <nuxt-img format="webp" src="/images/plus.svg" class="w-6"></nuxt-img>
          </div>
          <div class="hide">
            <nuxt-img format="webp" src="/images/plus.svg" class="rotate-45 w-6"></nuxt-img>
          </div>
        </header>
        <p class="mt-2 hidden">
          {{ content.text }}
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
  },

  mounted() {
    const labels = document.querySelectorAll(".accordion .label");

    for (let label of labels) {
      label.addEventListener("click", (e) => {
        const active = document.querySelector(".accordion article.active");
        label.classList.add("active");
        if (active) {
          active.classList.remove("active");
        }
      });
    }
  },
};
</script>

<style lang="postcss" scoped>
.accordion {
  .label.active > p {
    @apply block;
  }
  article.active {
    .more {
      @apply hidden;
    }
    .hide {
      @apply block;
    }
  }
  article {
    .more {
      @apply block;
    }
    .hide {
      @apply hidden;
    }
  }
}
</style>
