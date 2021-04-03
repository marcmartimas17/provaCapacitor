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
      <div class="container">
        <div @click="share()" class="container-btn ion-text-center bounce">
          <ion-icon :icon="shareSocial" class="btn"></ion-icon>
        </div> 
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,
        IonTitle, IonToolbar, IonIcon
} from '@ionic/vue';
import { Plugins } from "@capacitor/core";
import { shareSocial, } from "ionicons/icons";
const { Share } = Plugins;

export default {
  name: 'Folder',
  components: {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,
    IonTitle, IonToolbar, IonIcon
  },
  setup() {
    return {
      shareSocial,
    }
  },
  methods: {
    async share () {
      await Share.share({
        title: 'Compartir Laravel Server',
        text: "Al següent enllaç pots trobar la web Laravel Server en producció: ",
        url: 'https://laravelserver.marcmartimas.codes/',
        dialogTitle: "Compartir Laravel Server"
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