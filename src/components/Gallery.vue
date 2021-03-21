<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Galeria</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="4" :key="photo.filepath" v-for="photo in photos">
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>

</template>

<script>
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonImg, IonCol, IonRow, IonGrid,

} from '@ionic/vue';
import { close, checkmarkCircleOutline, } from 'ionicons/icons';

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
    IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonImg, IonCol, IonRow, IonGrid,
  },
  methods: {

  },
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