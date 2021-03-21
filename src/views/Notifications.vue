<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Notificacions</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-button @click="notification">Send notification</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,
        IonTitle, IonToolbar, IonButton,
} from '@ionic/vue';
import { Plugins } from "@capacitor/core";
import { } from "ionicons/icons";
const { LocalNotifications } = Plugins;

export default {
  name: 'Notifications',
  components: {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,
    IonTitle, IonToolbar, IonButton,
  },
  methods: {
    async notification () {
      await LocalNotifications.schedule({
        notifications: [
          {
            title: "Prova de notificació",
            body: "Això és una prova de notificació",
            id: 1,
            schedule: { at: new Date(Date.now() + 1000) },
          }
        ]
      });

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
</style>