<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-item>
          <ion-icon :icon="location" slot="start"></ion-icon>
          <ion-title>Geolocation</ion-title>
        </ion-item>

        <ion-card-content>
          <ion-list>
            <ion-item v-if="latitude">
              <ion-icon :icon="navigate" slot="start"></ion-icon>
              <ion-text>Latitude</ion-text>
              <ion-title>{{ latitude }}</ion-title>
            </ion-item>
            <ion-item v-if="longitude">
              <ion-icon :icon="navigate" slot="start"></ion-icon>
              <ion-text>Longitude</ion-text>
              <ion-title>{{ longitude }}</ion-title>
            </ion-item>
          </ion-list>
          <ion-button @click="getGeoLocation()">Get location</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonList,
        IonItem, IonTitle, IonText, IonButton, IonIcon,
        IonMenuButton, IonButtons, IonToolbar, IonHeader,  loadingController,
} from '@ionic/vue';
import { Plugins } from '@capacitor/core';
const { Geolocation: geo } = Plugins;
import { location, navigate, } from 'ionicons/icons';


export default {
  name: 'Geolocation',
  components: {
    IonPage, IonContent, IonCard, IonCardContent, IonList,
    IonItem, IonTitle, IonText, IonButton, IonIcon,
    IonMenuButton, IonButtons, IonToolbar, IonHeader,

  },
  data() {
    return {
      latitude: null,
      longitude: null,
    }
  },
  setup() {
    return {
      location, navigate,
    }
  },
  methods: {
    async getGeoLocation () {
      const loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Searching geolocation...',
        });
      await loading.present();
      const coords = await geo.getCurrentPosition();
      this.latitude = coords.coords.latitude;
      this.longitude = coords.coords.longitude;
      await loading.dismiss();
    }
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
</style>