<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getFilteredProducts']),
    products () {
      return this.$store.getters.getProducts;
    }
  },

  watch: {
    getFilteredProducts (newVal) {
      this.$store.commit('setPaginationTotal', Math.ceil(newVal.length / this.$store.state.pagination.perPage));
    }
  }
};
</script>

<template>
  <div
    class="grid gap-7 md:grid-cols-[minmax(auto,280px),1fr] lg:grid-cols-[minmax(auto,388px),1fr]"
  >
    <BaseHeader />
    <CatalogFilter />

    <div class="grid gap-6 content-start">
      <div class="grid gap-[22px]">
        <div class="flex flex-wrap-reverse gap-5 justify-between items-center">
          <span class="text-lg leading-5">7,618 results found in 5ms</span>
          <CatalogView />
        </div>
        <CatalogSearch />
      </div>
      <CatalogProducts :products="products" />
    </div>
    <BasePagination class="col-span-full" />
  </div>
</template>
