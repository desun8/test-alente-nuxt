<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: [Array, String, Number],
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    handleChange (event) {
      const emit = ev => this.$emit('change', ev);

      if (this.type === 'radio') {
        return emit(event.target.value);
      }
      if (this.type === 'checkbox') {
        return emit([event.target.checked, event.target.value]);
      }
    }
  }
};
</script>

<template>
  <label class="c-custom-checkbox">
    <input
      :type="type"
      :name="name"
      :checked="checked"
      :value="value"
      @change="handleChange"
    >

    <span class="checkmark" />

    <span class="text-base leading-5 font-light capitalize">{{ label }}</span>
    <span class="text-base leading-none font-light capitalize"><slot /></span>
  </label>
</template>

<style lang="scss" scoped>
.c-custom-checkbox {
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
}

.c-custom-checkbox input[type="radio"],
.c-custom-checkbox input[type="checkbox"] {
  position: absolute;
  width: 1em;
  height: 1em;
  opacity: 0.00001;
}

.c-custom-checkbox .checkmark {
  display: inline-block;
  border: 1px solid #979797;
}

.c-custom-checkbox input[type="radio"] + .checkmark {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.c-custom-checkbox input[type="checkbox"] + .checkmark {
  width: 17px;
  height: 17px;
}

.c-custom-checkbox input[type="radio"]:checked + .checkmark,
.c-custom-checkbox input[type="checkbox"]:checked + .checkmark {
  @apply bg-site-main border-site-main;
}

.c-custom-checkbox input[type="radio"]:focus + .checkmark,
.c-custom-checkbox input[type="checkbox"]:focus + .checkmark {
  outline: 3px solid #6f64f8;
}

.c-custom-checkbox input[type="radio"]:focus:not(:focus-visible) + .checkmark,
.c-custom-checkbox input[type="checkbox"]:focus:not(:focus-visible) + .checkmark {
  outline: none;
}
</style>
