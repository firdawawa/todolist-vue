<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="home bg-primary w-screen h-screen">
    <div class="max-w-6xl mx-auto h-screen flex flex-col md:flex-row items-center justify-center relative px-5 md:px-0">
      <img src="https://i.ibb.co.com/qWNJKJv/home-image.png" alt="Ilustrasi Home Page List'O"
            title="Ilustrasi Home Page List'O" class="w-full block md:hidden" data-aos="fade-up" data-aos-duration="1500">

        <div class="relative flex items-center">
            <div class="bg-blur-bg rounded-[700px] blur-[55px] w-[300px] md:w-[600px] h-[250px] md:h-[600px] absolute">
            </div>
            <div class="flex flex-col gap-5 z-40 relative">
                <h1 class="font-semibold text-white text-[40px] md:text-[64px] leading-[100%] md:leading-[120%]">
                    Digital Self Management App
                </h1>
                <p class="text-lg text-white">Write down your self-management data, get the effectiveness!</p>
                <div>
                  
                </div>
                <RouterLink to="/todo"
                    class="text-lg text-primary bg-white rounded-md hover:bg-pink-900 hover:text-white duration-700 px-5 py-2 w-fit">Todo List</RouterLink>
                <RouterLink to="/todo"
                    class="text-lg text-primary bg-white rounded-md hover:bg-pink-900 hover:text-white duration-700 px-5 py-2 w-fit">Todo List</RouterLink>
            </div>
        </div>

        <img src="https://i.ibb.co.com/qWNJKJv/home-image.png" alt="Ilustrasi Home Page List'O"
            title="Ilustrasi Home Page List'O" class="w-1/2 hidden md:block" data-aos="fade-left" data-aos-duration="1500">

    </div>

    </div>
</template>

<style>

</style>
