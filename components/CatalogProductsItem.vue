<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    imgPath: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    rating: {
      type: Number,
      required: true
    }
  },

  computed: {
    imgBg () {
      return `background-image:url(${this.imgPath})`;
    }
  }
};
</script>

<template>
  <div class="grid rounded-lg shadow-default bg-white overflow-hidden">
    <div class="p-6">
      <div class="img mb-6" :style="imgBg" />
      <div>
        <div class="flex justify-between items-center mb-4">
          <span class="rating" aria-label="Рейнтиг.">{{ rating }}</span>
          <span class="price" aria-label="Цена.">${{ price }}</span>
        </div>
        <h2 class="title">
          {{ title }}
        </h2>
        <span class="desc">{{ desc }}</span>
      </div>
    </div>

    <div class="grid grid-cols-2 self-end">
      <button class="btn btn--wishlist" type="button">
        wishlist
      </button>
      <button class="btn btn--cart" type="button">
        add to cart
      </button>
    </div>
  </div>
</template>

<style scoped>
.img {
  --w: 388;
  --h: 306;
  --ratio: calc(var(--h) / var(--w) * 100%);

  width: 100%;
  padding-top: var(--ratio);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.rating {
  @apply flex items-center px-2.5 py-1.5 bg-site-main rounded-sm text-white text-sm leading-4;
}

.rating::after {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 8px;
  background: url("/i-star.svg") no-repeat center;
}

.price {
  @apply text-lg leading-5;
}

.title {
  @apply mb-1 text-base leading-5;
}

.desc {
  @apply inline-block text-xs leading-[14px] font-light;
}

.btn {
  @apply grid grid-flow-col gap-2.5 place-content-center place-items-center px-2.5 py-3.5 text-sm leading-[18px] font-semibold uppercase before:inline-block before:bg-no-repeat before:bg-center;
}

.btn--wishlist {
  @apply bg-site-gray hover:bg-gray-50;
}

.btn--wishlist::before {
  width: 15px;
  height: 13px;
  background-image: url("/i-heart.svg");
}

.btn--cart {
  @apply bg-site-main text-white hover:bg-indigo-600;
}

.btn--cart::before {
  width: 16px;
  height: 18px;
  background-image: url("/i-bag.svg");
}
</style>
