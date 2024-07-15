<template>
    <div class="container mt-20">
        <div class="card-table">
            <div class="block max-w p-6 m-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-300">
                <div class="card-header">
                    <h4 class="font-bold text-xl">
                        Phone Number List
                        <RouterLink to="phone/create">
                            <button type="button" class="text-white bg-primary hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 -mt-2 dark:bg-primary dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-900 float-end">Add Phone Number</button>
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
                                            No
                                        </th>
                                        <th scope="col" class="px-6 py-5">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Number
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Address
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(phones, index) in this.phones" :key="index" class="bg-white border-b dark:bg-gray-200 dark:border-gray-500">
                                        <td class="px-6 py-4">
                                            {{ phones.id }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ phones.name }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ phones.number }}
                                        </td>
                                        <td class="px-6 py-4">
                                            {{ phones.address }}
                                        </td>
                                        <td class="px-6 py-4">
                                            <RouterLink :to="{path: '/phone/'+phones.id+'/edit'}">
                                                <button type="button" class="text-white bg-primary hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 -mt-2 dark:bg-primary dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-900">
                                                    Edit
                                                </button>
                                            </RouterLink>
                                            <button type="button" @click="deletePhone(phones.id)" class="text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 -mt-2 dark:bg-red-600 dark:hover:bg-red-900 focus:outline-none dark:focus:ring-pink-900">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
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
import axios from 'axios'

export default {
    name: 'phone',
    data(){
        return {
            phones: []
        }
    },
    mounted(){

        this.getPhone();
        // console.log('Success')
    },
    methods: {
        getPhone(){
            axios.get('http://192.168.5.32:8000/api/phones').then(res => {
                this.phones = res.data.phones
                // console.log(this.phones)
            });
        },

        deletePhone(phoneId){

            if(confirm('Are you sure to delete this?')){
                axios.delete(`http://192.168.5.32:8000/api/phones/${phoneId}/delete`)
                    .then(res => {
                        alert(res.data.message);
                        this.getPhone();
                })
                .catch(function (error){
                    if(error.response){

                        if(error.response.status == 404){

                            alert(error.response.data.message);
                        }
                    }
                });
            }
        },
    },
}
</script>