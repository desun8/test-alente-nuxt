<script>
export default {
  computed: {
    search: {
      get () {
        return this.$store.state.filter.search;
      },
      set (value) {
        this.$store.commit('setFilterSearch', value);
      }
    }
  },

  methods: {
    handleSumbit () {
      this.$store.commit('setFilterSearch', this.search);
    }
  }
};
</script>

<template>
  <form id="search" class="relative shadow-default overflow-hidden rounded-lg bg-white" action="" @submit.prevent="handleSumbit">
    <div>
      <label for="search-input" class="sr-only">Search</label>
      <input
        id="search-input"
        v-model.trim="search"
        class="input"
        type="text"
        placeholder="Search here"
      >
    </div>
    <button class="submit" aria-label="Searching.">
      <svg fill="none" viewBox="0 0 22 20" aria-hidden="true">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.297 17c4.631 0 8.385-3.582 8.385-8s-3.754-8-8.384-8C5.666 1 1.912 4.582 1.912 9s3.754 8 8.384 8Z"
          clip-rule="evenodd"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m20.778 19-5.24-5"
        />
      </svg>
    </button>
  </form>
</template>

<style scoped>
.input {
  @apply w-full pl-8 pr-12 py-5 rounded-lg hover:placeholder-site-main;
}

.submit {
  @apply absolute top-1/2 right-9 w-5 h-5 p-[1px] transform -translate-y-1/2  hover:text-site-main before:w-[200%] before:h-[200%] before:absolute before:top-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2;

  color: #606060;
}
</style>
