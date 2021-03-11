<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card>
        <ion-item>
          <ion-icon :icon="bicycle" slot="start"></ion-icon>
          <ion-title>Motion</ion-title>
        </ion-item>

        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-icon :icon="arrowUp" slot="start"></ion-icon>
              <ion-text>Acceleration Y</ion-text>
              <ion-title>{{ accelerationY }}</ion-title>
            </ion-item>

            <ion-item>
              <ion-icon :icon="arrowForward" slot="start"></ion-icon>
              <ion-text>Acceleration X</ion-text>
              <ion-title>{{ accelerationX }}</ion-title>
            </ion-item>
          </ion-list>
          <ion-button @click="getMotion()">Get Motion</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { Plugins } from "@capacitor/core";
import { bicycle, speedometer, arrowUp, arrowForward,} from "ionicons/icons";
const { Motion } = Plugins;

export default {
  name: 'Notifications',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {
      bicycle, arrowUp, arrowForward,
    }
  },
  data() {
    return {
      accelerationX: null,
      accelerationY: null,
    }
  },
  methods: {
    async getMotion () {
      Motion.addListener('accel', (event) => {
        console.log(event)
        this.accelerationX = event.acceleration.x;
        this.accelerationY = event.acceleration.y;
      });
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