<script>
export default {
  async asyncData ({ store, $axios, params }) {
    const pageNumber = params.number;

    store.commit('setPaginationCurr', pageNumber);

    if (store.state.products === null) {
      let products = await $axios.get(
        'https://611a2bc9cbf1b30017eb5559.mockapi.io/product'
      );
      products = await products.data;
      store.commit('setProducts', products);
    }

    if (store.state.brands === null) {
      let brands = await $axios.get(
        'https://611a2bc9cbf1b30017eb5559.mockapi.io/brand'
      );
      brands = await brands.data;
      store.commit('setBrands', brands);
    }

    if (store.state.categories === null) {
      let categories = await $axios.get(
        'https://611a2bc9cbf1b30017eb5559.mockapi.io/category'
      );
      categories = await categories.data;
      store.commit('setCategories', categories);
    }
  }
};
</script>

<template>
  <Catalog />
</template>
