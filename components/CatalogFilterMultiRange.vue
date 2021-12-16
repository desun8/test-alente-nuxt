<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    priceRange: ['10', '10,100', '100,500', '500', 'all'],
    price: false
  }),

  computed: {
    prices () {
      const prices = this.priceRange.map((item) => {
        if (item === 'all') {
          return item;
        }

        return item
          .split(',')
          .map(el => `$${el}`)
          .join('-');
      });
      return prices;
    },

    value () {
      return this.$store.state.filter.price;
    },

    values () {
      const val = this.priceRange.map((item) => {
        if (item.includes(',')) {
          return item.split(',').map(el => +el);
        } else if (item === 'all') {
          return item;
        }

        return +item;
      });

      return val;
    }

  },

  methods: {
    ...mapMutations(['setFilterPrice']),

    handleChange (value) {
      this.setFilterPrice(value);
    }
  }

};
</script>

<template>
  <CatalogFilterField>
    <template #title>
      Multi Range
    </template>
    <div class="grid gap-4">
      <BaseInputCustom
        v-for="(item, index) in prices"
        :id="item"
        :key="item"
        :label="item"
        :value="priceRange[index]"
        :checked="priceRange[index] === value"
        name="multi-range"
        type="radio"
        @change="handleChange"
      />
    </div>
  </CatalogFilterField>
</template>
