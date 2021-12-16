<script>
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export default {
  data: () => ({
    price: [0, 9999]
  }),

  computed: {
    range () {
      return this.price.join(' - ');
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.initRangeSlider();
    });
  },

  methods: {
    initRangeSlider () {
      const el = this.$refs.slider;

      if (el) {
        noUiSlider.create(el, {
          start: [this.price[0], this.price[1]],
          connect: true,
          range: {
            min: this.price[0],
            max: this.price[1]
          }
        });

        el.noUiSlider.on('update', (values, handle) => {
          this.price = values.map(val => +val);
          this.$store.commit('setFilterPrice', values.join(','));
        });
      }
    }
  }
};
</script>

<template>
  <CatalogFilterField>
    <template #title>
      Slider
    </template>
    <span class="col-start-2 text-xl leading-6 text-right">{{ range }}</span>
    <div
      id="slider-round"
      ref="slider"
      class="slider-styled col-span-full col-end-3"
    />
  </CatalogFilterField>
</template>

<style scoped>
.slider-styled {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  border: 0;
}

.slider-styled >>> .noUi-handle {
  @apply w-5 h-5 top-[-7px] bg-transparent rounded-full border-0 overflow-hidden before:hidden after:hidden;
}

.slider-styled >>> .noUi-touch-area {
  @apply bg-site-main;
}

.slider-styled >>> .noUi-connects {
  @apply bg-site-gray;
}

.slider-styled >>> .noUi-connect {
  @apply bg-site-main;
}
</style>
