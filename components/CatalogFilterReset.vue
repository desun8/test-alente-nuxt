<script>
export default {
  methods: {
    handleClick () {
      this.$store.commit('clearFilter');
    }
  }
};
</script>

<template>
  <button class="w-full p-4 bg-site-main rounded-lg text-lg leading-5 text-white text-center uppercase hover:bg-indigo-600" @click="handleClick">
    CLEAR ALL FILTERS
  </button>
</template>
