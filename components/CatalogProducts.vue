<script>
export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  computed: {
    view () {
      return this.$store.state.view;
    }
  }
};
</script>

<template>
  <div v-if="products" class="gap-x-8 gap-y-7 md:grid-cols-2 xl:grid-cols-3" :class="{'grid': view === 'grid'}">
    <CatalogProductsItem
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :desc="product.desc"
      :img-path="product.image"
      :price="product.price"
      :rating="product.rating"
    />
  </div>
</template>
