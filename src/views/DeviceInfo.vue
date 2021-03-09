<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-item>
          <ion-icon :icon="informationCircle" slot="start" size="large"></ion-icon>
          <ion-title>Device Info</ion-title>
        </ion-item>

        <ion-card-content>
          <ion-list>

            <ion-item v-if="operatingSystem != 'unknown'">
              <ion-text>Operating System</ion-text>
              <ion-title class="capitalize">{{ operatingSystem }}</ion-title>
            </ion-item>
            <ion-item v-if="platform">
              <ion-text>Platform</ion-text>
              <ion-title class="capitalize">{{ platform }}</ion-title>
            </ion-item>
            <ion-item v-if="model">
              <ion-text>Model</ion-text>
              <ion-title class="capitalize">{{ model }}</ion-title>
            </ion-item>
            <ion-item v-if="uuid">
              <ion-text>UUID</ion-text>
              <ion-title>{{ uuid }}</ion-title>
            </ion-item>
            <ion-item v-if="memory">
              <ion-text>Memory</ion-text>
              <ion-progress-bar :value="memory"></ion-progress-bar>
            </ion-item>
            <ion-item v-if="isCharging && battery">
              <ion-icon :icon="iconBattery" class="ion-margin-end"></ion-icon>
              <ion-text>{{ battery }}% - {{ isCharging }}</ion-text>
            </ion-item>
            <ion-item v-if="networkStatus">
              <ion-text>Connection type</ion-text>
              <ion-icon :md="iconNetwork" class="ion-margin-horizontal"  :class="isConnected ? 'connected' : 'disconnected'"></ion-icon>
              <ion-title class="" :class="isConnected ? 'connected' : 'disconnected'">{{ networkStatus }}</ion-title>
            </ion-item>
          </ion-list>

        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonCard, IonCardContent, IonList,
        IonItem, IonTitle, IonText, IonIcon, IonMenuButton, IonButtons,
        IonToolbar, IonHeader, IonProgressBar,
        } from '@ionic/vue';
import { informationCircle, navigate, batteryCharging, batteryFull, batteryHalf, batteryDead, wifi, cellular, } from 'ionicons/icons';
import { Plugins } from '@capacitor/core';
const { Device, Network } = Plugins;

export default {
  name: 'Information',
  components: {
    IonPage, IonContent, IonCard, IonCardContent, IonList,
    IonItem, IonTitle, IonText, IonIcon, IonMenuButton, IonButtons,
    IonToolbar, IonHeader, IonProgressBar,
  },
  data () {
    return {
      info: null,
      operatingSystem: null,
      platform: null,
      model: null,
      uuid: null,
      memory: null,
      battery: null,
      isCharging: null,
      iconBattery: null,
      networkStatus: null,
      iconNetwork: null,
      isConnected: false,
    }
  },
  setup() {
    return {
      navigate, informationCircle, batteryCharging, batteryFull, batteryHalf, batteryDead, wifi, cellular,
    }

  },
  methods: {
    async getInfo() {
      const info = await Device.getInfo();
      const battery = await Device.getBatteryInfo();
      const network = await Network.getStatus();

      this.operatingSystem = info.operatingSystem;
      this.platform = info.platform;
      this.model = info.model;
      this.uuid = info.uuid;
      this.memory = info.memUsed / info.diskTotal;
      this.battery = (battery.batteryLevel * 100);
      this.isCharging = battery.isCharging ? "Charging" : "Not charging";
      if (battery.isCharging) {
        this.iconBattery = batteryCharging;
      }
      else {
        if(this.battery > 80) {
          this.iconBattery = batteryFull;
        }
        else if(this.battery >= 20) {
          this.iconBattery = batteryHalf;
        }
        else {
          this.iconBattery = batteryDead;
        }
      }

      this.networkStatus = network.connectionType;
      this.isConnected = network.connected;
      this.iconNetwork = this.networkStatus === "wifi" ? wifi : cellular;

      Network.addListener('networkStatusChange', (status) => {
        this.networkStatus = status.connectionType;
        this.isConnected = status.connected;
        this.iconNetwork = this.networkStatus === "wifi" ? wifi : cellular;
      });

    },

},
  mounted () {

    this.getInfo();

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

.capitalize {
  text-transform: capitalize;
}
.uppercase {
  text-transform: uppercase;
}
.connected {
  color: green;
}
.disconnected {
  color: red;
}
</style>