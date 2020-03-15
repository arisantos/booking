<template>
  <div class="relative z-30">
    <div class="px-5 py-6" style="background:#eece6a;">
      <h2 class="text-xl text-gray-800 font-semibold mb-5">
        Let’s find your ideal car
      </h2>
      <div>
        <div class="relative">
          <label class="text-sm text-gray-800">Pick-up Location</label>
          <input
            v-model="input"
            type="text"
            class="mt-1"
            name="search"
            autocomplete="off"
            placeholder="city, airport, station, region and district..."
          >
          <i v-show="searching" class="fas fa-circle-notch fa-spin text-xl text-gray-700 absolute right-0 mr-4 mt-4" />
          <ul v-show="results.length" class="w-full absolute bg-white text-sm shadow-2xl">
            <li v-for="line in results" :key="line.index" class="p-2">
              <span>{{ line.name }}</span>
              <span v-if="line.region"> - {{ line.region }},</span>
              <span v-if="line.country">{{ line.country }}</span>
            </li>
          </ul>
        </div>
        <div class="mt-2 flex">
          <input type="checkbox">
          <label class="ml-2 text-sm text-gray-800">
            Drop car off at different location
          </label>
        </div>
        <div class="flex mt-5">
          <div class="w-1/2 mr-2">
            <label class="text-sm text-gray-800">Pick-up Date:</label>
            <div class="box w-1/2 mt-1">
              Mon 16 Mar 2020
            </div>
            <div class="flex mt-2">
              <div class="box w-1/2 md:mr-1 text-center md:text-left">
                10<span class="md:hidden">:00</span>
                <i class="fas fa-angle-down float-right pt-1 text-gray-700 hidden md:block" />
              </div>
              <div class="box w-1/2 ml-1 hidden md:block">
                00 <i class="fas fa-angle-down float-right pt-1 text-gray-700 hidden md:block" />
              </div>
            </div>
          </div>
          <div class="w-1/2 ml-2">
            <label class="text-sm text-gray-800">Drop off Date:</label>
            <div class="box w-1/2 mt-1">
              Thu 19 Mar 2020
            </div>
            <div class="flex mt-2">
              <div class="box w-1/2 md:mr-1 text-center md:text-left">
                10<span class="md:hidden">:00</span>
                <i class="fas fa-angle-down float-right pt-1 text-gray-700 hidden md:block" />
              </div>
              <div class="box w-1/2 ml-1 hidden md:block">
                00 <i class="fas fa-angle-down float-right pt-1 text-gray-700 hidden md:block" />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2 flex">
          <input type="checkbox" checked>
          <label class="ml-2 text-sm text-gray-800">
            Driver aged between 30 - 65? <i class="pl-1 fas fa-info-circle text-lg text-blue-600" />
          </label>
        </div>
        <button type="button" class="bg-green-700 text-white font-semibold text-xl w-full p-4 mt-4 rounded">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import getLocations from '../utils/getLocations'
export default {
  data () {
    return {
      input: '',
      minLength: 1,
      timeout: null,
      searching: false,
      results: []
    }
  },
  watch: {
    input () {
      if (this.input.length > this.minLength) {
        this.searching = true
        // Use timeout so that we only start a request
        // when the user stops typing
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.search()
        }, 1000)
      } else {
        clearTimeout(this.timeout)
        this.searching = false
        this.results = []
      }
    }
  },
  methods: {
    search () {
      getLocations(this.input).then((res) => {
        this.results = res.data.results.docs
        this.searching = false
      }).catch(() => {
        this.searching = false
      })
    }
  }
}
</script>
