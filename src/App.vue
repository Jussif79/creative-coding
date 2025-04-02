<script>
import {
    RouterLink,
    RouterView
} from 'vue-router';
</script>

<template>
<header>
    <div>
        <nav class="flex justify-center items-center mt-8 space-x-4">
            <RouterLink to="/" class="px-4 py-2 hover:bg-gray-100 rounded transition">
                Home
            </RouterLink>

            <div class="relative group">
                <RouterLink to="/woche1" class="px-4 py-2 hover:bg-gray-100 rounded transition">
                    Woche 1
                </RouterLink>

                <div class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10">
                    <RouterLink to="/woche1/sketch1" class="block px-4 py-2 text-sm hover:bg-gray-100 rounded-t-md">
                        Sketch1
                    </RouterLink>
                    <RouterLink to="/woche1/sketch2" class="block px-4 py-2 text-sm hover:bg-gray-100">
                        Sketch2
                    </RouterLink>
                    <RouterLink to="/woche1/sketch3" class="block px-4 py-2 text-sm hover:bg-gray-100">
                        Sketch3
                    </RouterLink>
                    <RouterLink to="/woche1/sketch4" class="block px-4 py-2 text-sm hover:bg-gray-100">
                        Sketch4
                    </RouterLink>
                    <RouterLink to="/woche1/image-filter" class="block px-4 py-2 text-sm hover:bg-gray-100 rounded-b-md">
                        Image Filter
                    </RouterLink>
                </div>
            </div>

            <div class="relative group">
                <RouterLink to="/woche2" class="px-4 py-2 hover:bg-gray-100 rounded transition">
                    Woche 2
                </RouterLink>
                <div class="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px] z-10">
                
                </div>
            </div>
        </nav>
    </div>
</header>

<RouterView />
</template>
