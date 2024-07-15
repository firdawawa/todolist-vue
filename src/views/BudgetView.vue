<template>
    <div class="mt-20">
        <div class="card-table">
            <div class="block max-w p-6 m-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-300">
                <div class="card-header">
                    <h4 class="font-bold text-xl">
                        Budget List
                        <RouterLink to="budget/create">
                            <button type="button" class="text-white bg-primary hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 -mt-2 dark:bg-primary dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-900 float-end">Add Data</button>
                        </RouterLink>
                    </h4>
                </div>
                <div class="card-body">
                    <div class="block max-w p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-300">
                        <div class="relative content-center overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-900">
                                <thead class="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-primary dark:text-white">
                                    <tr>
                                        <th scope="col" class="px-6 py-5">
                                            Date
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Criteria
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Nominal
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    
    export default {
        name: 'phone',
        data(){
            return {
                students: []
            }
        },
        mounted(){
            console.log('Success')
        }
    }
    </script>