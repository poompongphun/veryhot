<template>

<div>
      <v-app-bar color="deep-purple accent-4" dense dark>
       

        <v-toolbar-title>HOT WEB</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>



        
      </v-app-bar>
    </div>

  <div
    class="d-flex justify-center align-center flex-column flex-md-row fill-height"
    :style="{
      backgroundImage: 'url(https://wallpaperaccess.com/full/5422692.jpg)',
    }"
  >
  

    <div v-for="camp in camp_list" :key="camp">
      <v-img :src="camp.pic" height="400" width="400"></v-img>
      <div class="d-flex justify-center">
        <v-btn
          @click="select_cam(camp.name_camp, camp.name)"
          class="ma-2"
          outlined
          color="primary"
          >{{ camp.name }}</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/logo.svg";
import firestore from "../config/firebase";

export default {
  data: () => ({
    name: "HelloWorld",
    camp_list: [
      {
        name: "WEBTOPIA",
        pic: "https://itcamp18.in.th/camp-logo-1.png",
        name_camp: "web",
      },
      {
        name: "DATAVERGENT",
        pic: "https://itcamp18.in.th/camp-logo-2.png",
        name_camp: "data",
      },
      {
        name: "GAMERUNNER",
        pic: "https://itcamp18.in.th/camp-logo-3.png",
        name_camp: "game",
      },
      {
        name: "NETAPUNK",
        pic: "https://itcamp18.in.th/camp-logo-4.png",
        name_camp: "network",
      },
    ],
    select_camp: "",
    data: [],
  }),
  firestore: {
    data: firestore.collection("campData"),
  },
  methods: {
    select_cam(camp, path) {
      console.log(camp);
      localStorage.setItem("select_camp", camp);
      window.location.href = "/" + path;
    },
  },
};
</script>
