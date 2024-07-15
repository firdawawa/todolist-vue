<script setup>

</script>
<template>
    

<nav class="bg-white border-gray-200 dark:bg-primary">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="https://i.ibb.co.com/PFLPcyp/listo.png" class="h-6 m-4" alt="List'O Logo" />
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-16 justify-center text-sm text-white rounded-lg md:hidden hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-pink-700 dark:focus:ring-pink-900" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
                <RouterLink to="/" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/todo" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Todo List</RouterLink>
            </li>
            <li>
                <RouterLink to="/phone" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Phone List</RouterLink>
            </li>
            <li>
                <RouterLink to="/notes" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Notes</RouterLink>
            </li>
            <li>
                <RouterLink to="/budget" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Budget List</RouterLink>
            </li>
        </ul>
    </div>
    </div>
</nav>

</template>