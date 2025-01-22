<template>
  <div 
    class="bg-pink-500/50"
  >
    <CbcHeader />
    <div
      class="p-3"
    >
      <div 
        class="flex relative flex-col h-64 w-full bg-green-500/50 rounded-3xl"
      > 
        <div
          class="basis-1/2 w-full bg-slate-200/50 rounded-t-3xl" 
        >
          <NuxtImg
            preload
            class="absolute top-16 left-8"
            height="128" 
            width="128" 
            src="icons/profile.svg" 
          />
        </div> 
        <div
          class="basis-1/2 w-full bg-black/50 rounded-b-3xl" 
        >
        </div> 
      </div>
    </div>
  </div>
</template>
