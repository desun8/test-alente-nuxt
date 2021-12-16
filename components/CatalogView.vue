<script>
export default {
  computed: {
    view () {
      return this.$store.state.view;
    }
  },

  methods: {
    handleSetGrid () {
      this.$store.commit('setView', 'grid');
    },

    handleSetList () {
      this.$store.commit('setView', 'list');
    }
  }
};
</script>

<template>
  <div class="grid grid-cols-[repeat(3,auto)] gap-3.5">
    <div class="select rounded-lg shadow-default">
      <select id="" class="pl-3.5 pr-7 py-2.5  appearance-none bg-transparent" name="">
        <option value="1" selected>
          Default
        </option>
        <option value="2">
          Low price
        </option>
        <option value="3">
          Hight price
        </option>
      </select>
    </div>

    <button class="btn rounded-lg shadow-default" :class="{'is-active': view === 'grid'}" aria-label="Grid view." @click="handleSetGrid">
      <svg fill="none" class="w-5 h-5" viewBox="0 0 20 18" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.47 1h6.289v6H1.47zm10.481 0h6.288v6h-6.288zm0 10h6.288v6h-6.288zM1.47 11h6.289v6H1.47z" /></svg>
    </button>
    <button class="btn rounded-lg shadow-default" :class="{'is-active': view === 'list'}" aria-label="List view." @click="handleSetList">
      <svg fill="none" class="w-4 h-4" viewBox="0 0 16 14" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.115 1H14.74M1.115 7H14.74M1.115 13H14.74" /></svg>
    </button>
  </div>
</template>

<style scoped>
.select {
  @apply relative;
}

.select::after {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  width: 12px;
  height: 6px;
  background: url('/chevron-down.svg') no-repeat center/contain;
}

.btn {
  @apply flex justify-center items-center w-10 h-10 text-[#606060];
}

.btn.is-active {
  @apply bg-site-main text-white;
}
</style>
