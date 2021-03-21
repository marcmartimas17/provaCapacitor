<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Càmera</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>

      <div class="center-screen" v-if="photo == null">
        <h1>Fes una foto i guarda-la a la galeria</h1>
      </div>

      <ion-img v-if="photo != null" :src="photo.webviewPath" class="photo"></ion-img>
      <div class="ion-text-center">
        <ion-button v-if="photo != null" @click="savePhoto">
          <ion-icon :icon="save" class="margin-5px"></ion-icon>
          Guardar
        </ion-button>
      </div>
    </ion-content>
  </ion-page>

</template>

<script>
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonImg, IonIcon, IonButton,

} from '@ionic/vue';
import { save, } from 'ionicons/icons';

export default {
  name: 'Camera',
  props: {
    photo: {},
  },
  setup() {
    return {
      save,
    }
  },
  components: {
    IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonImg, IonIcon, IonButton,
  },
  methods: {
    savePhoto () {
      this.$emit('save-photo', this.photo);
    }
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