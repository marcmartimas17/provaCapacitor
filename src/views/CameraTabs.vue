<template>
  <ion-page>
    <ion-tabs class="z-index-2">
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

      <ion-fab slot="fixed" vertical="bottom" horizontal="end" class="fab-button margin-50 z-index-3" @click="takePhoto">
        <ion-fab-button>
          <ion-icon :icon="cameraOutline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-tabs>

    <ion-content :fullscreen="false" class="">

      <div v-if="currentTab === 'Tab1'">
        <camera-component></camera-component>
      </div>

      <div v-if="currentTab === 'Tab2'">
        <galeria :photos="photos"></galeria>
      </div>

    </ion-content>

</ion-page>


</template>

<script>
import {  IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent, IonFabButton, IonFab, } from '@ionic/vue';
import { cameraOutline, imageOutline, } from "ionicons/icons";
import CameraComponent from "@/components/Camera";
import Galeria from "@/components/Gallery";
import { Plugins, CameraResultType, CameraSource, } from "@capacitor/core";
const { Camera } = Plugins;

export default {
  name: 'Tabs',
  setup () {
    return {
      cameraOutline, imageOutline,
    }
  },
  components: {
    Galeria,
    IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent, IonFabButton, IonFab, CameraComponent,
  },
  data() {
    return {
      currentTab: 'Tab1',
      photos: [],
    }
  },
  methods: {
    async changeTab (tab) {
      this.currentTab = tab;
    },
    async takePhoto () {

      const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });

      const fileName = new Date().getTime() + '.jpeg';
      const savedFileImage = {
        filepath: fileName,
        webviewPath: cameraPhoto.webPath
      };

      this.photos.push(savedFileImage);
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
.z-index-1 {
  z-index: 1 !important;
}
.z-index-2 {
  z-index: 2 !important;
}
.z-index-3 {
  z-index: 3 !important;
}
.margin-50 {
  margin-bottom: 70px;
  margin-right: 20px;
}
.fab-button {
  cursor: pointer;
}
</style>