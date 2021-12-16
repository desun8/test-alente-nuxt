<script>

export default {
  data: () => ({
    ratings: [1, 2, 3, 4, 5].reverse()
  }),

  computed: {
    value () {
      return this.$store.state.filter.rating;
    }
  },

  methods: {
    handleChange (value) {
      this.$store.commit('setFilterRating', value);
    }
  }

};
</script>

<template>
  <CatalogFilterField>
    <template #title>
      Rating
    </template>
    <div class="grid gap-4">
      <BaseInputRating
        v-for="item in ratings"
        :key="item"
        :label="`Rating ${item} stars`"
        :value="item"
        :checked="+item === +value"
        name="rating"
        type="radio"
        @change="handleChange"
      >
        <template #label>
          <span class="sr-only">{{ `Rating ${item} stars` }}</span>
          <div class="flex gap-1.5">
            <svg
              v-for="(num, index) in Array.from(Array(5).keys())"
              :key="num"
              class="w-[18px]"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 22"
            >
              <path
                :class="{'fill': index < item}"
                :stroke="index < item ? '#FFA84C' : '#999'"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m11.73 1 3.248 6.26 7.266 1.01-5.257 4.87 1.24 6.88-6.497-3.25-6.498 3.25 1.24-6.88-5.256-4.87L8.48 7.26 11.73 1v0Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </template>
        <template #count>
          3250
        </template>
      </BaseInputRating>
    </div>
  </CatalogFilterField>
</template>
