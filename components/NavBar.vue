<template>
  <nav class="bg-primary w-full">
    <div class="lg:container mx-auto px-4">
      <div class="flex border-b py-4">
        <img src="/images/logo_white.svg" class="w-32 lg:w-48">
        <div class="ml-auto">
          <ul class="hidden sm:flex">
            <li>
              <a href="#" class="border-l px-4 text-white text-sm h-5">
                <i class="fas fa-pound-sign mr-2" />
                <span class="hidden lg:inline">British Pounds</span>
              </a>
            </li>
            <li>
              <a href="#" class="border-l px-4 text-white text-sm flex h-5">
                <img src="/images/uk.svg" class="w-6 mr-2">
                <span class="hidden md:inline">English</span>
              </a>
            </li>
            <li>
              <a href="#" class="border-l px-4 text-white text-sm flex h-5">
                <i class="far fa-edit mt-1 block md:hidden" />
                <span class="hidden md:inline">Manage Booking</span>
              </a>
            </li>
            <li>
              <a href="#" class="border-l pl-4 text-white text-sm h-5">
                <i class="far fa-user mr-2" />
                <span class="hidden md:inline">Sign in</span>
              </a>
            </li>
          </ul>
          <ul class="flex sm:hidden">
            <li class="flex px-4 border-r">
              <span class="text-xs text-white mt-1 mr-2">GBP</span>
              <img src="/images/uk.svg" class="w-6 mr-2">
            </li>
            <li class="pl-4">
              <i class="fas fa-bars text-white" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    .border-b {
      border-color: rgba(255,255,255,0.3);
    }
    ul {
      li {
        border-color: rgba(255,255,255,0.3);
      }
    }
  }
</style>
