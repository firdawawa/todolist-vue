<template>
  <div class="mt-24">
    <div class="card-table">
      <div
        class="block max-w p-6 m-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-300"
      >
        <div
          class="card-header w-[700px] h-48 bg-primary mx-auto items-center text-center rounded-2xl"
        >
          <h4 class="font-bold text-white text-2xl py-6">Todo List</h4>
          <form @submit="postData">
            <div class="flex mx-auto justify-center mt-4">
              <div class="col-number mb-3">
                <input
                  type="text"
                  v-model="payload.item.name"
                  class="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[500px] h-12 mx-auto p-4 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-grey-800"
                  placeholder="Add New Todo List"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-16 h-12 ml-4 text-2xl text-primary bg-white hover:bg-pink-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg me-2 mb-2 dark:bg-white dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-900"
              >
                +
              </button>
            </div>
          </form>
        </div>
        <div
          v-for="(data, i) in datas"
          :key="i"
          class="card-item flex justify-center"
        >
          <div
            class="flex w-[700px] gap-4 p-6 mt-6 bg-white border border-primary rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-primary"
          >
            <input
              type="checkbox"
              :checked="data.completed"
              class="h-6 w-6"
              @change="updateData(data.id, !data.completed)"
            />
            <p :class="{ 'line-through': data.completed }">{{ data.name }}</p>
            <button
              type="button"
              @click="deleteData(data.id)"
              class="ml-auto text-white bg-primary hover:bg-pink-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 -mt-2 dark:bg-primary dark:hover:bg-pink-900 focus:outline-none dark:focus:ring-pink-900"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Todo View',
  data() {
    return {
      datas: [],
      payload: {
        item: {
          name: '',
        },
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('http://192.168.5.32:8000/api/items').then(res => {
        this.datas = res.data;
        console.log(this.datas);
      });
    },
    postData(e) {
      e.preventDefault();
      axios
        .post(`http://192.168.5.32:8000/api/item/store`, this.payload)
        .then(e => {
          this.getData();
          this.payload.item.name = '';
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status == 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
    deleteData(id) {
      if (confirm('Are you sure to delete this?')) {
        axios
          .delete(`http://192.168.5.32:8000/api/item/${id}`)
          .then(res => {
            alert('berhasil delete data');
            this.getData();
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message);
              }
            }
          });
      }
    },
    updateData(id, value) {
      const payloadData = {
        item: {
          completed: value,
        },
      };
      axios
        .put(`http://192.168.5.32:8000/api/item/${id}`, payloadData)
        .then(e => {
          this.getData();
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
  },
};
</script>
