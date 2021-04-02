<template>
  <ion-page>

    <ion-content :fullscreen="false" class="">

      <div v-if="currentTab === 'Tab1'">
        <camera-component :photo="currentPhoto" @savePhoto="savePhoto(currentPhoto)"></camera-component>
      </div>

      <div v-if="currentTab === 'Tab2'">
        <galeria :photos="photos"></galeria>
      </div>

    </ion-content>

    <ion-toolbar class="z-index-2">
      <ion-tabs>
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
    </ion-toolbar>

</ion-page>


</template>

<script>
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,
} from '@ionic/vue';
import { cameraOutline, imageOutline, } from "ionicons/icons";
import CameraComponent from "@/components/Camera";
import Galeria from "@/components/Gallery";
import { CameraResultType, CameraSource, Plugins, FilesystemDirectory, FilesystemEncoding, Storage, Capacitor } from "@capacitor/core";
import {isPlatform} from "@ionic/core";

const { Camera, Filesystem, } = Plugins;

export default {
  name: 'Tabs',
  setup () {
    return {
      cameraOutline, imageOutline,
    }
  },
  components: {
    Galeria,
    IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent, IonToolbar, CameraComponent,
  },
  data() {
    return {
      currentTab: 'Tab1',
      photos: [],
      currentPhoto: null,
    }
  },
  methods: {
    async changeTab (tab) {
      this.currentTab = tab;
    },
  }
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