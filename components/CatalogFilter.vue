<script>
export default {
  data: () => ({
    isVisible: false
  }),

  computed: {
    brands () {
      return this.$store.state.brands;
    },

    categories () {
      return this.$store.state.categories;
    }
  },

  methods: {
    handleClick () {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<template>
  <div>
    <h2 class="hidden md:block mb-[34px] pt-3 text-lg leading-5">
      Filter
    </h2>

    <button class="mb-4 p-4 rounded-lg shadow-default md:hidden hover:bg-site-main hover:text-white" @click="handleClick">
      {{ isVisible ? 'Hide filter' : 'Show filter' }}
    </button>

    <div class="md:block" :class="{'hidden': !isVisible}">
      <div class="grid gap-[72px] mb-7 pl-6 pr-8 py-7 bg-white shadow-default rounded-lg">
        <CatalogFilterMultiRange />
        <CatalogFilterPriceRange />
        <CatalogFilterBrand v-if="brands" :brands="brands" />
        <CatalogFilterCategory v-if="categories" :items="categories" />
        <CatalogFilterRating />
      </div>

      <CatalogFilterReset />
    </div>
  </div>
</template>
