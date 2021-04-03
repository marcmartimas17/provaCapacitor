<template>
  <ion-page>
    
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Galeria</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="6" size-lg="4" :key="photo" v-for="photo in photos">
            <ion-img :src="photo.webviewpath"></ion-img>
            <div style="text-align:center">
              <ion-button color="danger" @click="deletePhoto(photo.filepath)">
                  <ion-icon :icon="trashOutline" class="margin-5px"></ion-icon>
                  Delete
              </ion-button>
            </div>
            
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>

</template>

<script>
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonImg, IonCol, IonRow, IonGrid,
        IonMenuButton, IonButtons, IonIcon, IonButton

} from '@ionic/vue';
import { close, checkmarkCircleOutline, trashOutline } from 'ionicons/icons';
import { usePhotoGallery } from '@/components/usePhotoGallery';

export default {
  name: 'Galeria',
  setup() {
    const { photos, deletePhoto } = usePhotoGallery();

    return {
      trashOutline, photos, deletePhoto
    }
  },
  components: {
    IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonImg, IonCol, IonRow, IonGrid,
    IonMenuButton, IonButtons, IonIcon, IonButton
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