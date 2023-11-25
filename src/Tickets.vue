<script>
import { StandardAirlineTripBuilder, AirlineTripDirector } from './builder.ts';
import { defineComponent } from 'vue';

export default defineComponent({
  data: function () {
    const director = new AirlineTripDirector();

    // Use the director to construct a standard round trip

    const tripToKaunas = director.constructTripToKaunas();
    const tripToVilnius = director.constructTripToVilnius();

    return {
      currentTrip: tripToVilnius, // Start with tripToVilnius as the default
      tripToVilnius,
      tripToKaunas,
    };
  },
  mounted() {
    console.log(this.currentTrip, this.tripToVilnius, this.tripToKaunas);
  },
  methods: {
    switchToTripToVilnius() {
      this.currentTrip = this.tripToVilnius;
      console.log(this.currentTrip);
    },
    switchToTripToKaunas() {
      this.currentTrip = this.tripToKaunas;
      console.log(this.currentTrip);
    },
  },
});
</script>

<template>
  <div class="outer-card">
    <div class="card">
      <h2>
        <img src="/plane-solid.svg" alt="Plane" height="20" />
        Boarding pass
      </h2>
      <div class="location-info">
        <p>From: {{ currentTrip.from }}</p>
        <p>To: {{ currentTrip.to }}</p>
      </div>
      <p>Class: {{ currentTrip.class }}</p>
      <p>From Date: {{ currentTrip.fromDate }}</p>
      <p>To Date: {{ currentTrip.toDate }}</p>
    </div>
    <div class="options">
      <button class="spacer" @click="switchToTripToVilnius">Switch to Vilnius</button>
      <button class="spacer" @click="switchToTripToKaunas">Switch to Kaunas</button>
    </div>
  </div>
</template>

<style>
  .outer-card{
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .card{
    width: 50%;
    border: 1px solid crimson;
    border-radius: 30px 0 30px 0;
    float: left;
  }
  .options{
    width: 40%;
    float: right;
  }
  .location-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .spacer{
    margin: 20px;
  }
</style>