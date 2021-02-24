<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-item>
          <ion-icon :icon="informationCircle" slot="start"></ion-icon>
          <ion-title>Device Info</ion-title>
        </ion-item>

        <ion-card-content>
          <ion-list>

            <ion-item v-if="operatingSystem != 'unknown'">
              <ion-text>Operating System</ion-text>
              <ion-title>{{ operatingSystem }}</ion-title>
            </ion-item>
            <ion-item v-if="platform">
              <ion-text>Platform</ion-text>
              <ion-title>{{ platform }}</ion-title>
            </ion-item>
            <ion-item v-if="model">
              <ion-text>Model</ion-text>
              <ion-title>{{ model }}</ion-title>
            </ion-item>
            <ion-item v-if="uuid">
              <ion-text>UUID</ion-text>
              <ion-title>{{ uuid }}</ion-title>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonList,
  IonItem, IonTitle, IonText, IonIcon, IonCardHeader, } from '@ionic/vue';
import { informationCircle, navigate, } from 'ionicons/icons';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

export default {
  name: 'Folder',
  components: {
    IonPage, IonContent, IonCard, IonCardContent, IonList,
    IonItem, IonTitle, IonText, IonIcon, IonCardHeader,
  },
  data () {
    return {
      info: null,
      operatingSystem: null,
      platform: null,
      model: null,
      uuid: null,
    }
  },
  setup() {
    return {
      navigate, informationCircle,
    }

  },
  methods: {
    async getInfo() {
      const info = await Device.getInfo();
      this.operatingSystem = info.operatingSystem;
      this.platform = info.platform;
      this.model = info.model;
      this.uuid = info.uuid;

      console.log(info)
    }
  },
  mounted () {
    this.getInfo();
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
</style>