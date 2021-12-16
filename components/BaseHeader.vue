<template>
  <header class="flex justify-between items-center col-span-full mb-[32px] px-5 py-3.5 rounded-lg shadow-default bg-white">
    <div class="grid grid-flow-col items-center gap-[23px]">
      <NuxtLink to="" class="icon mt-0.5">
        <svg
          class="w-[22px]"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3.103 1h16.822c1.157 0 2.103.9 2.103 2v12c0 1.1-.946 2-2.103 2H3.103C1.946 17 1 16.1 1 15V3c0-1.1.946-2 2.103-2Z"
            clip-rule="evenodd"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m22.028 3-10.514 7L1 3"
          />
        </svg>
      </NuxtLink>
      <NuxtLink to="" class="icon">
        <svg
          class="w-[19px]"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 22 22"
        >
          <rect
            width="18.925"
            height="18"
            x="1.159"
            y="3"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            rx="2"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.828 1v4M6.416 1v4M1.16 9h18.924"
          />
        </svg>
      </NuxtLink>
      <NuxtLink to="" class="icon icon-yellow">
        <svg
          class="w-[22px]"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 24 22"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m11.73 1 3.248 6.26 7.266 1.01-5.257 4.87 1.24 6.88-6.497-3.25-6.498 3.25 1.24-6.88-5.256-4.87L8.48 7.26 11.73 1v0Z"
            clip-rule="evenodd"
          />
        </svg>
      </NuxtLink>
    </div>

    <div class="grid grid-flow-col items-center gap-[23px]">
      <NuxtLink to="" class="icon">
        <svg
          class="w-[19px]"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 22 22"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.38 7c0-3.314-2.825-6-6.31-6-3.483 0-6.308 2.686-6.308 6 0 7-3.154 9-3.154 9h18.925s-3.154-2-3.154-9M12.89 20a2.125 2.125 0 0 1-1.82.997c-.749 0-1.442-.38-1.818-.997"
          />
        </svg>
      </NuxtLink>
      <NuxtLink to="" class="icon">
        <svg
          class="w-[19px]"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 22 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.076 17c4.645 0 8.411-3.582 8.411-8s-3.766-8-8.411-8C5.43 1 1.665 4.582 1.665 9s3.765 8 8.41 8Z"
            clip-rule="evenodd"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m20.59 19-4.574-4.35"
          />
        </svg>
      </NuxtLink>
      <div class="relative grid grid-cols-[auto,auto] gap-2.5 items-center">
        <NuxtLink to="" class="absolute top-0 left-0 w-full h-full" />
        <div class="grid">
          <span class="text-sm leading-4 ">John Doe</span>
          <span class="text-xs leading-3 font-light text-right">Available</span>
        </div>
        <div class="avatar" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.icon {
  @apply text-[#606060] hover:text-site-main;
}

.icon-yellow {
  @apply text-[#FFA84C];
}

.avatar {
  width: 34px;
  height: 34px;
  background-color: rgb(22, 48, 167);
  border-radius: 50%;
  box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.235413);
}
</style>
