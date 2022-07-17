<template>
  <div class="bg">
    <div style="background-color: rgba(0, 0, 0, 0.1)" class="my-10">
      <h1 class="text-center mt-10 text-white">
        HOTMAIL: {{ data_text.name }}
      </h1>
    </div>
    <v-row justify="end" class="mr-10">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            @click="check_num_text(data_text.text)"
          >
            <v-icon dark left> mdi-plus-circle</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5"> อยากบอกอะไรกับเพื่อนของคุณ</span>
          </v-card-title>
          <hr />
          <v-card-text>
            <div style="width: 500px">
              <v-col cols="12">
                <v-text-field
                  label="Type Text Here"
                  v-model="inputText"
                  required
                ></v-text-field>
              </v-col>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="
                dialog = false;
                addText();
              "
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialogdeletes" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5">
            จะลบจริงหรออออออออออออออออออออออออออออออออออ
          </v-card-title>
          <v-card-text>ของตัวเองจริงป่าว</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialogdeletes = false">
              Disagree
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="
                deletetext();
                dialogdeletes = false;
              "
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-container>
      <v-row no-gutters>
        <div v-for="item in data_text.text" :key="item">
          <v-col>
            <v-card
              style="width: 300px"
              class="ml-10 mt-10 pa-3 justify-center"
            >
              <v-card-item>{{ item }} </v-card-item>
              <center>
                <v-btn
                  @click="
                    dialogdelete(item);
                    delete_item = item;
                    dialogdeletes: true;
                  "
                  >DELETE</v-btn
                >

                <br />
              </center>
            </v-card>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.bg {
  background-position: center;
  background-image: url("https://c.tenor.com/_4YgA77ExHEAAAAd/rick-roll.gif");
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-size: cover;
}
</style>
<script>
import firestore from "../config/firebase";
import { firebase } from "../config/firebase";
import { mdiDelete } from "@mdi/js";

export default {
  data() {
    return {
      dialogdeletes: false,
      dialog: false,
      dialog_add: true,
      id: "",
      delete_item: "",
      data_text: [],
      inputText: "",
      // name: "ชื่อเพื่อน",
      listtext: ["dasdsa", "dsdada"],
      icons: {
        mdiDelete,
      },
    };
  },

  firestore: {
    data_text: firestore
      .collection("campData")
      .doc(localStorage.getItem("select_id")),
  },

  methods: {
    dialogdelete(i) {
      this.dialogdeletes = true;
    },
    dialogopen() {
      this.dialog = true;
    },
    deletetext() {
      firestore
        .collection("campData")
        .doc(localStorage.getItem("select_id"))
        .update({
          text: firebase.firestore.FieldValue.arrayRemove(this.delete_item),
        });
    },
    addText() {
      console.log(localStorage.getItem("select_id"));
      firestore
        .collection("campData")
        .doc(localStorage.getItem("select_id"))
        .update({
          text: firebase.firestore.FieldValue.arrayUnion(this.inputText),
        });
    },
    check_num_text(item) {
      console.log(item);
      if (item.length < 5) {
        this.dialog = true;
      } else {
        alert("ข้อความเกินจำนวนแล้ว เจ้าไม่สามารถเพิ่มข้อความได้อีก");
      }
    },
  },
};
</script>
