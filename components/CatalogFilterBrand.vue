<script>
export default {
  props: {
    brands: {
      type: Array,
      required: true
    }
  },

  computed: {
    value () {
      return this.$store.state.filter.brand;
    }
  },

  methods: {
    handleChange (value) {
      this.$store.commit('setFilterBrand', value);
    }
  }

};
</script>

<template>
  <CatalogFilterField>
    <template #title>
      Brand
    </template>
    <div class="grid gap-4">
      <BaseInputCustom
        v-for="item in brands"
        :id="`brand-${item.id}`"
        :key="item.id"
        :label="item.title"
        :value="item.id"
        :checked="value.includes(item.id)"
        :name="item.title"
        type="checkbox"
        @change="handleChange"
      >
        8562
      </BaseInputCustom>
    </div>
  </CatalogFilterField>
</template>
