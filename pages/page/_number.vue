<script>
export default {
  async asyncData ({ store, $axios, params }) {
    const pageNumber = params.number;

    store.commit('setPaginationCurr', pageNumber);

    let products = await $axios.get(
      'https://611a2bc9cbf1b30017eb5559.mockapi.io/product'
    );
    let brands = await $axios.get(
      'https://611a2bc9cbf1b30017eb5559.mockapi.io/brand'
    );
    let categories = await $axios.get(
      'https://611a2bc9cbf1b30017eb5559.mockapi.io/category'
    );

    products = await products.data;
    brands = await brands.data;
    categories = await categories.data;

    store.commit('setProducts', products);
    store.commit('setBrands', brands);
    store.commit('setCategories', categories);
  }
};
</script>

<template>
  <Catalog />
</template>
