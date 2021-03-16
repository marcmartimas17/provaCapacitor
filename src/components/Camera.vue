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