<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col class="d-flex justify-center align-center mx-4">
          <div v-for="data_ in data" :key="data_.name">
            <div v-if="data_.camp == list_data_of">
              <v-btn class="mx-4 my-5" @click="viewMessages(data_.id)">
                {{ data_.name }}
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <router-link to="/">
  <v-btn class="footer">Back</v-btn>
  </router-link>
</template>

<script>
import logo from "../assets/logo.svg";
import firestore from "../config/firebase";

export default {
  data: () => ({
    list_data_of: "",
    inputMessage: "",
    data: "",
  }),
  firestore: {
    data: firestore.collection("campData"),
  },
  created() {
    this.list_data_of = localStorage.getItem("select_camp");
  },

  methods: {
    viewMessages(id) {
      localStorage.setItem("select_id", id);
      window.location.href = "/TEXT";
    },
  },
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 100px;
  left: 100px;
  width: 0%;
  padding: 10px;
  background: #ccc;
}
</style>
