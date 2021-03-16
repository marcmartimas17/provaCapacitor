<template>
  <ion-page>
    <ion-tabs class="high-index">
      <ion-tab-bar slot="bottom">
        <ion-tab-button @click="changeTab('Tab1')">
          <ion-icon :icon="cameraOutline"/>
          <ion-label>Càmera</ion-label>
        </ion-tab-button>

        <ion-tab-button @click="changeTab('Tab2')">
          <ion-icon :icon="imageOutline"/>
          <ion-label>Galeria</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>


    <ion-content :fullscreen="false">
      <div v-if="currentTab === 'Tab1'">
        <camera></camera>
        <ion-fab slot="fixed" vertical="bottom" horizontal="end" class="fab-button margin-50">
          <ion-fab-button>
            <ion-icon :icon="cameraOutline"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </div>
      <div v-if="currentTab === 'Tab2'">
        <galeria></galeria>
      </div>

    </ion-content>




  </ion-page>
</template>

<script>
import {  IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent, IonFabButton, IonFab, } from '@ionic/vue';
import { cameraOutline, imageOutline, } from "ionicons/icons";
import Camera from "@/components/Camera";
import Galeria from "@/components/Gallery";


export default {
  name: 'Tabs',
  setup () {
    return {
      cameraOutline, imageOutline,
    }
  },
  components: {
    Galeria,
    IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent, IonFabButton, IonFab, Camera,
  },
  data() {
    return {
      currentTab: 'Tab1',
    }
  },
  methods: {
    async changeTab (tab) {
      this.currentTab = tab;
    }
  },
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
.high-index {
  z-index: 100 !important;
}
.margin-50 {
  margin-bottom: 50px;
}
.fab-button {
  cursor: pointer;
}
</style>