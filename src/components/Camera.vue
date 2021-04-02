<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Càmera</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      
      <ion-button @click="takePhoto()">Get photo</ion-button>
    </ion-content>
  </ion-page>

</template>

<script>
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonImg, IonButton,

} from '@ionic/vue';
import { save, } from 'ionicons/icons';
import { usePhotoGallery } from '@/components/usePhotoGallery';

export default {
  name: 'Camera',
  props: {
    photo: {},
  },
  setup() {
    const { takePhoto, photos } = usePhotoGallery();
    return {
      save, takePhoto, photos
    }
  },
  components: {
    IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonButton,
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
.center-screen {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.photo {
  margin: 20px auto;
  width:50%;
}
.margin-5px {
  margin: 0px 10px 0px 0px;
}
</style>