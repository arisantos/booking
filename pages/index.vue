<template>
  <div>
    <div id="header" class="w-full bg-primary">
      <div class="md:container md:mx-auto xl:px-4 flex flex-col lg:flex-row flex-col-reverse md:items-center lg:items-start">
        <div class="w-full md:w-3/4 lg:1/2 lg:pr-16 mt-2 md:mt-8">
          <SearchBox />
        </div>
        <div class="w-full md:w-3/4 lg:1/2 lg:pl-4 mt-2 md:mt-8 flex flex-col">
          <h1 class="text-white text-xs md:text-center lg:text-left md:text-3xl font-semibold pl-4 md:pl-0">
            Car Hire – Search, Compare & Save
          </h1>
          <div class="hidden lg:block">
            <ul class="mt-8 text-white">
              <li class="mb-2">
                <i class="far fa-check-circle mr-2" /> Price Match Guarantee
              </li>
              <li><i class="far fa-check-circle mr-2" /> Free cancellations on most bookings</li>
            </ul>
            <div id="box" class="p-6 mt-10">
              <h3 class="text-xl font-semibold">
                Rentalcars.com connects you to the biggest brands in car hire.
              </h3>
              <Logos class="mt-6 grid grid-cols-4 gap-4 relative z-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 relative z-10 w-full h-screen bg-white">
      <div class="mt-32 md:mt-48 block lg:hidden">
        <ul class="md:flex md:justify-center text-gray-800 pb-10 border-b border-blue-200">
          <li class="mb-2 font-semibold">
            <i class="far fa-check-circle mr-2 text-green-700" /> Price Match Guarantee
          </li>
          <li class="md:ml-4 font-semibold">
            <i class="far fa-check-circle mr-2 text-green-700" /> Free cancellations on most bookings
          </li>
        </ul>
        <div class="bg-primary w-full mt-4 p-4 md:hidden flex">
          <div class="w-1/5">
            <img src="https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/page-body/download_app.png" class="w-20">
          </div>
          <div class="w-4/5 pl-5 sm:pl-0">
            <h4 class="text-white">
              Available for iPhone & Android devices, completely FREE
            </h4>
            <small class="text-white">The easiest way to rent a car</small>
            <div class="sm:flex mt-4">
              <div class="w-full sm:w-1/2">
                <img src="https://linkmaker.itunes.apple.com/assets/shared/badges/en-gb/appstore-lrg.svg" class="w-32">
              </div>
              <div class="w-full sm:w-1/2">
                <img src="https://play.google.com/intl/en_gb/badges/images/generic/en_badge_web_generic.png" style="width: 150px;" class="-ml-2 sm:ml-0 -mt-2">
              </div>
            </div>
          </div>
        </div>
        <h3 class="text-center text-blue-800 text-xl font-semibold mt-4">
          Rentalcars.com connects you to the biggest brands in car hire.
        </h3>
        <Logos class="grid grid-cols-4 md:grid-cols-8 gap-4 mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import Logos from '@/components/Logos'
export default {
  components: { SearchBox, Logos },
  head () {
    return {
      title: 'Cheap Car Hire, Compare Rental Prices - Rentalcars.com'
    }
  }
}
</script>

<style lang="scss" scoped>
  #header {
    height: 400px;
  }
  #box {
    background: #ebf1f8;
    h3 {
      color: #2a5f8e;
    }
  }
</style>
