<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Càmera</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>Càmera</h1>
    </ion-content>
  </ion-page>

</template>

<script>
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent,

} from '@ionic/vue';
import { close, checkmarkCircleOutline, } from 'ionicons/icons';
import { Plugins, CameraResultType, CameraSource, } from "@capacitor/core";
const { Camera } = Plugins;

export default {
  name: 'Camera',
  setup() {
    return {
      close, checkmarkCircleOutline
    }
  },
  components: {
    IonPage, IonHeader, IonTitle, IonToolbar, IonContent,
  },
  methods: {
    async takePhoto () {
      const cameraPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });
    }
  },
  mounted() {
    this.takePhoto()
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