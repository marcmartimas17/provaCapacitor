<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Galeria</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div>
        <h1>Galeria</h1>
      </div>
    </ion-content>
  </ion-page>

</template>

<script>
import { IonPage, IonHeader, IonTitle, IonButtons,  IonToolbar, IonContent, IonIcon

} from '@ionic/vue';
import { close, checkmarkCircleOutline, } from 'ionicons/icons';
import { Plugins, CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";
const { Camera } = Plugins;

export default {
  name: 'Galeria',
  props: {
    photos: {

    }
  },
  setup() {
    return {
      close, checkmarkCircleOutline
    }
  },
  components: {
    IonPage, IonHeader, IonTitle, IonButtons, IonToolbar, IonContent, IonIcon,
  },
  methods: {

  }
}
</script>

<style>
.icon-close {
  margin-right: 10px;
  font-size: 30px;
  cursor: pointer;
}
.icon-check {
  font-size: 200px;
  color: var(--ion-color-success);
}
.button-container {
  margin-top: 20px;
  text-align: center;
}
.button-accept {
  margin-top: 50px;
}
</style>