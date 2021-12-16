<template>
  <div class="relative grid items-center gap-6 before:block before:absolute before:-bottom-9 before:-mx-1 before:w-full before:h-[1px] before:bg-[#d6d6d6] last:before:hidden">
    <h2 class="text-lg leading-5 font-semibold">
      <slot name="title" />
    </h2>
    <slot />
  </div>
</template>
