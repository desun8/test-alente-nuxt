<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },

  computed: {
    value () {
      return this.$store.state.filter.category;
    }
  },

  methods: {
    handleChange (value) {
      this.$store.commit('setFilterCategory', value);
    }
  }

};
</script>

<template>
  <CatalogFilterField>
    <template #title>
      Category
    </template>
    <div class="grid gap-4">
      <BaseInputCustom
        v-for="item in items"
        :id="`category-${item.id}`"
        :key="item.id"
        :label="item.name"
        :value="item.id"
        :checked="value.includes(item.id)"
        :name="item.name"
        type="checkbox"
        @change="handleChange"
      >
        1820
      </BaseInputCustom>
    </div>
  </CatalogFilterField>
</template>
