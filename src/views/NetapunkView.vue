<template>
  <div class="bg">
    <v-container class="spacing-playground pa-13 align-center" fluid>
      <v-row justify="center">
        <div class="d-flex flex-column justtify-center">
          <v-img
            src="https://itcamp18.in.th/camp-logo-4.png"
            width="300"
            height="300"
            
          ></v-img>
          <span class="text-white">
            <p
              class="font-weight-black justify-center text-h4 text-center  ">
              Netapunk Town
            </p>
          </span>
        </div>
      </v-row>
      <!-- <v-row justify="center">
      <v-col class="d-flex align-center my-9 justify-center" cols="12" sm="4">
        <div
          class="d-flex mb-6 fill-height mx-4"
          v-for="item in listname"
          :key="item"
        >
          <v-btn color="orange">{{ p }} </v-btn>
          <p>{{list_data_of}}</p>
        </div>
      </v-col>
    </v-row> -->
      <UsersList />
    </v-container>
  </div>
</template>
<script>
import UsersList from "../components/UsersList.vue";
import firestore from "../config/firebase";
export default {
  components: { UsersList },
  data() {
    return {
      listname: ["อะเกียร์", "ทับทิม"],
    };
  },
  firestore: {
    data: firestore.collection("campData"),
  },
};
</script>
<style>
.bg {
  background-image: url("https://itcamp18.in.th/static/media/network.e1a0b9d4e071fa500cd3.png");
  height: 100vh;
}
</style>
