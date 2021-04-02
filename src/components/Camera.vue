<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Camera</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div v-if="currentPhoto != null">
        <ion-img :src="currentPhoto.webPath"></ion-img>
        <ion-button @click="savePicture()">
          <ion-icon :icon="save" class="margin-5px"></ion-icon>
          Save
        </ion-button>
        <ion-button @click="cancel()">
          <ion-icon :icon="arrowUndoOutline" class="margin-5px"></ion-icon>
          Revert
        </ion-button>
      </div>

      <div v-if="currentPhoto == null" class="container">
        <div @click="takePicture()" class="container-btn ion-text-center bounce">
          <ion-icon :icon="cameraOutline" class="camera-btn"></ion-icon>
        </div> 
      </div>
      
    </ion-content>
  </ion-page>

</template>

<script>
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonImg, IonButton,

} from '@ionic/vue';
import { save, cameraOutline, arrowUndoOutline } from 'ionicons/icons';
import { usePhotoGallery } from '@/components/usePhotoGallery';

export default {
  name: 'Camera',
  props: {
    photo: {},
  },
  setup() {
    const { takePhoto, savePhoto, photos } = usePhotoGallery();
    return {
      save, cameraOutline, arrowUndoOutline, takePhoto, savePhoto, photos
    }
  },
  data() {
    return {
      currentPhoto: null,
    }
  },
  components: {
    IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonImg, IonButton,
  },
  methods: {
    async takePicture () {
      this.currentPhoto = await this.takePhoto();
    },

    async savePicture () {
      await this.savePhoto(this.currentPhoto)
      this.currentPhoto = null;
    },

    async cancel() {
      this.currentPhoto = null;
    }

  },
}
</script>

<style>
.photo {
  margin: 20px auto;
  width:50%;
}
.margin-5px {
  margin: 0px 10px 0px 0px;
}
.container {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-btn {
  width: 250px;
  height: 250px;
  background: #3880ff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.camera-btn {
  font-size: 200px;
  color: aliceblue;
}
.bounce {
    animation: bounce 1s infinite alternate;
}

@keyframes bounce {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}

</style>