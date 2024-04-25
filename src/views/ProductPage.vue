<template>
    <div class="font-[sans-serif] bg-white">
        <div class="p-6 lg:max-w-7xl max-w-4xl mx-auto">
            <div
                class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
                    <!-- Main product image -->
                    <div
                        class="flex justify-center z-10 px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                        <img :src="product.Images[0].img_url" alt="" class="z-10 max-h-96	rounded object-cover" />
                        <div @click="toggleFavourite(productID)"
                            class="z-10 bg-gray-100  w-10 h-10 flex hover:-translate-y-0.5 items-center justify-center rounded-full cursor-pointer absolute top-4 right-4"
                            :class="{ 'fill-gray-800': !props.fav.includes(product.id), 'fill-red': props.fav.includes(product.id) }">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="gray"
                                class="w-6 h-6">
                                <path
                                    d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                        </div>
                    </div>
                    <!-- Carousel thumbnails -->
                    <div class="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                        <div v-for="(thumbnail, index) in thumbnails " :key="index"
                            class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                            <img :src="thumbnail.img_url" :alt="'Product ' + (index + 2)" class="w-24 cursor-pointer"
                                @click="selectThumbnail(index)" />
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-2">
                    <h2 class="text-2xl font-extrabold text-[#333]">{{ product.name }}</h2>
                    <div class="flex flex-wrap gap-4 mt-6">
                        <p class="text-[#333] text-4xl font-bold">£{{ product.price }}</p>

                    </div>
                    <div class="flex space-x-2 mt-4">
                        <svg class="w-5 fill-[#333]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg class="w-5 fill-[#333]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg class="w-5 fill-[#333]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg class="w-5 fill-[#333]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <h4 class="text-[#333] text-base">500 Reviews</h4>
                    </div>
                    <!-- <div class="mt-10">
                        <h3 class="text-lg font-bold text-gray-800">Choose a Color</h3>
                        <div class="flex flex-wrap gap-4 mt-4">
                            <button type="button"
                                class="w-12 h-12 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                            <button type="button"
                                class="w-12 h-12 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                            <button type="button"
                                class="w-12 h-12 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                            <button type="button"
                                class="w-12 h-12 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"></button>
                        </div>
                    </div> -->
                    <div class="flex flex-wrap gap-4 mt-10">

                        <button @click="addItemToCart" type="button"
                            class="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-bold rounded">Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <h3 class="text-lg font-bold text-[#333]">Product information</h3>
                <p>{{ product.description }}</p>
                <!-- <ul class="mt-6 space-y-6 text-[#333] flex flex-col">
                    <li class="text-sm">TYPE <span class="ml-4 float-right">LAPTOP</span></li>
                    <li class="text-sm">RAM <span class="ml-4 float-right">16 BG</span></li>
                    <li class="text-sm">SSD <span class="ml-4 float-right">1000 BG</span></li>
                    <li class="text-sm">PROCESSOR TYPE <span class="ml-4 float-right">INTEL CORE I7-12700H</span></li>
                    <li class="text-sm">PROCESSOR SPEED <span class="ml-4 float-right">2.3 - 4.7 GHz</span></li>
                    <li class="text-sm">DISPLAY SIZE INCH <span class="ml-4 float-right">16.0</span></li>
                    <li class="text-sm">DISPLAY SIZE SM <span class="ml-4 float-right">40.64 cm</span></li>
                    <li class="text-sm">DISPLAY TYPE <span class="ml-4 float-right">OLED, TOUCHSCREEN, 120 Hz</span>
                    </li>
                    <li class="text-sm">DISPLAY RESOLUTION <span class="ml-4 float-right">2880x1620</span></li>
                </ul> -->
            </div>
            <div class="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <h3 class="text-lg font-bold text-[#333]">Reviews(10)</h3>
                <div class="grid md:grid-cols-2 gap-12 mt-6">
                    <div>
                        <div class="space-y-3">
                            <div class="flex items-center">
                                <p class="text-sm text-[#333] font-bold">5.0</p>
                                <svg class="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div class="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div class="w-2/3 h-full rounded bg-[#333]"></div>
                                </div>
                                <p class="text-sm text-[#333] font-bold ml-3">66%</p>
                            </div>
                            <div class="flex items-center">
                                <p class="text-sm text-[#333] font-bold">4.0</p>
                                <svg class="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div class="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div class="w-1/3 h-full rounded bg-[#333]"></div>
                                </div>
                                <p class="text-sm text-[#333] font-bold ml-3">33%</p>
                            </div>
                            <div class="flex items-center">
                                <p class="text-sm text-[#333] font-bold">3.0</p>
                                <svg class="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div class="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div class="w-1/6 h-full rounded bg-[#333]"></div>
                                </div>
                                <p class="text-sm text-[#333] font-bold ml-3">16%</p>
                            </div>
                            <div class="flex items-center">
                                <p class="text-sm text-[#333] font-bold">2.0</p>
                                <svg class="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div class="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div class="w-1/12 h-full rounded bg-[#333]"></div>
                                </div>
                                <p class="text-sm text-[#333] font-bold ml-3">8%</p>
                            </div>
                            <div class="flex items-center">
                                <p class="text-sm text-[#333] font-bold">1.0</p>
                                <svg class="w-5 fill-[#333] ml-1" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div class="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div class="w-[6%] h-full rounded bg-[#333]"></div>
                                </div>
                                <p class="text-sm text-[#333] font-bold ml-3">6%</p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex items-start">
                            <img src="https://readymadeui.com/team-2.webp"
                                class="w-12 h-12 rounded-full border-2 border-white" />
                            <div class="ml-3">
                                <h4 class="text-sm font-bold text-[#333]">John Doe</h4>
                                <div class="flex space-x-1 mt-1">
                                    <svg class="w-4 fill-[#333]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg class="w-4 fill-[#333]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg class="w-4 fill-[#333]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <p class="text-xs !ml-2 font-semibold text-[#333]">2 mins ago</p>
                                </div>
                                <p class="text-sm mt-4 text-[#333]">Lorem ipsum dolor sit amet, consectetur adipisci
                                    elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <button type="button"
                            class="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-[#333] text-[#333] font-bold rounded">Read
                            all reviews</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
const store = useStore();
const route = useRoute()
const productID = Number(route.params.id); //get the product id from the route parameters

const emit = defineEmits(['toggle-favourite', 'add-to-cart'])
const props = defineProps({
    fav: Array,
    toggleFavourite: Function,
    products: Array

})

const product = computed(() => {
    return store.state.products.find(prod => prod.id == productID)
})

const addItemToCart = () => {
    emit('add-to-cart', product.value)
}
    ;

// Sample thumbnails data
const thumbnails = ref([]);

for (let i = 0; i < product.value.Images.length; i++) {
    console.log("images: ", product.value.Images[i].img_url);
    thumbnails.value.push({ img_url: product.value.Images[i].img_url })
}

// Function to select a thumbnail
const selectThumbnail = (index) => {
    let selectedThumbnailIndex = 0;

    selectedThumbnailIndex = index;
    product.value.Images[0].img_url = thumbnails.value[index].img_url;
};

const toggleFavourite = (productid) => emit('toggle-favourite', productID)


</script>
<style>
.fill-red path {
    fill: #de0000;
    stroke: none
        /* Change this to the desired fill color */
}
</style>