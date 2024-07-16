<template>
  <div class="container mt-24">
    <div class="card-table">
      <div
        class="block max-w p-6 m-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-300"
      >
        <div class="card-header">
          <h4 class="font-bold text-xl">Edit Notes</h4>
        </div>
        <div class="card-body">
          <ul class="alert" v-if="Object.keys(this.errorList).length > 0">
            <li
              class="mb-0 ms-3"
              v-for="(error, index) in this.errorList"
              :key="index"
            >
              {{ error[0] }}
            </li>
          </ul>

          <div
            class="block max-w p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-300"
          >
            <div class="relative content-center overflow-x-auto">
              <div class="col-number mb-3">
                <label for="">Title</label>
                <input
                  type="text"
                  v-model="model.data.title"
                  class="block mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-grey-800"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div class="col-number mb-3">
                <label for="">Description</label>
                <input
                  type="text"
                  v-model="model.data.desc"
                  class="block mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-grey-800"
                  placeholder="Address"
                  required
                />
              </div>
              <div class="col-number mb-3">
                <button
                  type="button"
                  @click="updateData"
                  class="mt-6 w-40 text-white bg-primary hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md float-end px-5 py-3 me-2 mb-2 dark:bg-primary dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-900"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NotesEdit',
  data() {
    return {
      id: '',
      errorList: '',
      model: {
        data: {
          title: '',
          desc: '',
        },
      },
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getData(this.$route.params.id);
  },
  methods: {
    getData(id) {
      axios
        .get(`http://192.168.5.32:8000/api/notes/${id}/edit`)
        .then(res => {
          this.model.data = res.data.notes;
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 404) {
              alert(error.response.data.message);
            }
          }
        });
    },

    updateData() {
      var $this = this;
      axios
        .put(
          `http://192.168.5.32:8000/api/notes/${this.id}/edit`,
          this.model.data,
        )
        .then(res => {
          console.log(res.data);
          alert(res.data.message);

          this.model.data = {
            name: '',
            number: '',
            address: '',
          };
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 422) {
              this.errorList = error.response.data.errors;
            }
            // console.log(error.response.data);
            // console.log(error.response.status);
            // console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        });
    },
  },
};
</script>
