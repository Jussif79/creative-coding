<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="flex justify-center items-center mt-8 space-x-4 bg-green-400">
        <RouterLink to="/" class="px-4 py-2 hover:bg-green-100 rounded transition text-indigo-400">
          Home
        </RouterLink>

        <div class="relative group">
          <RouterLink to="/woche1" class="px-4 py-2 hover:bg-green-100 rounded transition">
            Woche 1
          </RouterLink>

          <div
            class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
          >
            <RouterLink
              to="/woche1/sketch1"
              class="block px-4 py-2 text-sm hover:bg-green-100 rounded-t-md"
            >
              Sketch1
            </RouterLink>
            <RouterLink to="/woche1/sketch2" class="block px-4 py-2 text-sm hover:bg-green-100">
              Sketch2
            </RouterLink>
            <RouterLink to="/woche1/sketch3" class="block px-4 py-2 text-sm hover:bg-green-100">
              Sketch3
            </RouterLink>
            <RouterLink to="/woche1/sketch4" class="block px-4 py-2 text-sm hover:bg-green-100">
              Sketch4
            </RouterLink>
            <RouterLink
              to="/woche1/image-filter"
              class="block px-4 py-2 text-sm hover:bg-green-100 rounded-b-md"
            >
              Image Filter
            </RouterLink>
            <RouterLink
              to="/woche1/sort-image"
              class="block px-4 py-2 text-sm hover:bg-green-100 rounded-b-md"
            >
              Sort Image
            </RouterLink>
            <RouterLink
              to="/woche1/resize-image"
              class="block px-4 py-2 text-sm hover:bg-green-100 rounded-b-md"
            >
              Resize Image
            </RouterLink>
            <RouterLink
              to="/woche1/two-images"
              class="block px-4 py-2 text-sm hover:bg-green-100 rounded-b-md"
            >
              2 Images
            </RouterLink>
          </div>
        </div>

        <div class="relative group">
          <RouterLink to="/woche2" class="px-4 py-2 hover:bg-green-100 rounded transition">
            Woche 2
          </RouterLink>
          <div
            class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
          >
            <RouterLink
              to="/woche2/shapes"
              class="block px-4 py-2 text-sm hover:bg-green-100 rounded-b-md"
            >
              Shapes
            </RouterLink>
            <RouterLink
              to="/woche2/agent"
              class="block px-4 py-2 text-sm hover:bg-green-100 rounded-b-md"
            >
              Agent
            </RouterLink>
            <RouterLink
              to="/woche2/abstract-algorithm"
              class="block px-4 py-2 text-sm hover:bg-green-100 rounded-b-md"
            >
              Abstract Algorithm
            </RouterLink>
          </div>
        </div>
        <div class="relative group">
          <RouterLink to="/woche2" class="px-4 py-2 hover:bg-green-100 rounded transition">
            Woche 3
          </RouterLink>
          <div
            class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
          >
            <RouterLink
              to="/woche3/l-system"
              class="block px-4 py-2 text-sm hover:bg-green-100 rounded-b-md"
            >
              L-System
            </RouterLink>
          </div>
        </div>
        <div class="relative group">
          <RouterLink to="/woche2" class="px-4 py-2 hover:bg-green-100 rounded transition">
            Woche 4
          </RouterLink>
          <div
            class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
          ></div>
        </div>
        <div class="relative group">
          <RouterLink to="/woche2" class="px-4 py-2 hover:bg-green-100 rounded transition">
            Woche 5
          </RouterLink>
          <div
            class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
          ></div>
        </div>
        <div class="relative group">
          <RouterLink to="/woche2" class="px-4 py-2 hover:bg-green-100 rounded transition">
            Woche 6
          </RouterLink>
          <div
            class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
          ></div>
        </div>
        <div class="relative group">
          <RouterLink to="/woche2" class="px-4 py-2 hover:bg-green-100 rounded transition">
            Woche 7
          </RouterLink>
          <div
            class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
          ></div>
        </div>
        <div class="relative group">
          <RouterLink to="/woche2" class="px-4 py-2 hover:bg-green-100 rounded transition">
            Woche 8
          </RouterLink>
          <div
            class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
          ></div>
        </div>
        <div class="relative group">
          <RouterLink to="/woche2" class="px-4 py-2 hover:bg-green-100 rounded transition">
            Woche 9
          </RouterLink>
          <div
            class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10"
          ></div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
