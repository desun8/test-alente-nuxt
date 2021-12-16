<script>
export default {
  computed: {
    pages () {
      const pages = [];
      const total = this.$store.state.pagination.total;

      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }

      return pages;
    },

    currPage () {
      return this.$store.state.pagination.curr;
    },

    prevPage () {
      if (+this.currPage === 1) {
        return '';
      }

      return `/page/${this.currPage - 1}`;
    },

    nextPage () {
      if (+this.currPage === this.$store.state.pagination.total) {
        return '';
      }

      return `/page/${this.currPage + 1}`;
    },

    isBasePage () {
      return this.$route.path === '/';
    }
  }
};
</script>

<template>
  <div v-if="pages.length > 1" class="mt-2.5">
    <div class="flex justify-center">
      <NuxtLink :to="prevPage" class="link link--prev" aria-label="Prev page.">
        <svg fill="none" viewBox="0 0 9 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.493 1 7.78 7l-6.288 6" /></svg>
      </NuxtLink>

      <ul class="pagination">
        <li v-for="page in pages" :key="page" class="pagination-item">
          <NuxtLink :to="`/page/${page}`" :class="{'active-link': isBasePage && page === 1}">
            <span>{{ page }}</span>
          </NuxtLink>
        </li>
      </ul>

      <NuxtLink :to="nextPage" class="link link--next" aria-label="Next page.">
        <svg fill="none" viewBox="0 0 9 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.493 1 7.78 7l-6.288 6" /></svg>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.pagination {
  @apply flex mx-[18px] px-5 py-2 bg-site-gray rounded-[20px];
}

.pagination-item {
  @apply mx-3 first:ml-0 last:mr-0;
}

.nuxt-link-exact-active:not(.link),
.active-link {
  @apply relative text-white before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-10 before:h-10 before:bg-site-main before:rounded-full;
}

.nuxt-link-exact-active span,
.active-link span {
  @apply relative;
}

.link {
  @apply flex justify-center items-center w-10 h-10 bg-site-gray rounded-full;
}

.link:not(.nuxt-link-exact-active) {
  @apply hover:bg-site-main hover:text-white;
}

.link.nuxt-link-exact-active {
  opacity: 0.75;
  cursor: not-allowed;
}

.link svg {
  width: 8px;
  height: 12px;
}

.link--prev svg {
  transform: scaleX(-1);
}
</style>
