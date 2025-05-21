<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-between items-center py-4">
        <div class="flex space-x-1">
          <RouterLink
            to="/"
            class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center"
          >
            Home
          </RouterLink>
        </div>

        <div class="flex space-x-1">
          <!-- Woche 1 -->
          <div class="relative group">
            <RouterLink
              to="/woche1"
              class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center"
            >
              Woche 1
            </RouterLink>

            <div
              class="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
            >
              <RouterLink
                to="/woche1/sketch1"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Sketch1
              </RouterLink>
              <RouterLink
                to="/woche1/sketch2"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Sketch2
              </RouterLink>
              <RouterLink
                to="/woche1/sketch3"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Sketch3
              </RouterLink>
              <RouterLink
                to="/woche1/image-filter"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Image Filter
              </RouterLink>
              <RouterLink
                to="/woche1/sort-image"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Sort Image
              </RouterLink>
              <RouterLink
                to="/woche1/resize-image"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Resize Image
              </RouterLink>
              <RouterLink
                to="/woche1/two-images"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                2 Images
              </RouterLink>
            </div>
          </div>

          <!-- Woche 2 -->
          <div class="relative group">
            <RouterLink
              to="/woche2"
              class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center"
            >
              Woche 2
            </RouterLink>
            <div
              class="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
            >
              <RouterLink
                to="/woche2/shapes"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Shapes
              </RouterLink>
              <RouterLink
                to="/woche2/agent"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Agent
              </RouterLink>
              <RouterLink
                to="/woche2/abstract-algorithm"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Abstract Algorithm
              </RouterLink>
            </div>
          </div>

          <!-- Woche 3 -->
          <div class="relative group">
            <RouterLink
              to="/woche3"
              class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center"
            >
              Woche 3
            </RouterLink>
            <div
              class="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
            >
              <RouterLink
                to="/woche3/l-system"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                L-System
              </RouterLink>
            </div>
          </div>

          <!-- Woche 4 -->
          <div class="relative group">
            <RouterLink
              to="/woche4"
              class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center"
            >
              Woche 4
            </RouterLink>
            <div
              class="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
            >
              <RouterLink
                to="/woche4/markov-chain"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Markov Chain
              </RouterLink>
            </div>
          </div>

          <!-- Woche 6 -->
          <div class="relative group">
            <RouterLink
              to="/woche6"
              class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center"
            >
              Woche 6
            </RouterLink>
            <div
              class="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
            >
              <RouterLink
                to="/woche6/game-of-life"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Game of Life
              </RouterLink>
              <RouterLink
                to="/woche6/101"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                101
              </RouterLink>
            </div>
          </div>

          <!-- Woche 7 -->
          <div class="relative group">
            <RouterLink
              to="/woche7"
              class="px-4 py-2 rounded-lg text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 flex items-center"
            >
              Woche 7
            </RouterLink>
            <div
              class="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
            >
              <RouterLink
                to="/woche7/pointclouds"
                class="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Point Clouds
              </RouterLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <RouterView />
  </main>
</template>
