<script>
import { Standard, MoreCheese, AddSalads } from './decorator.ts';
import { defineComponent } from 'vue';

export default defineComponent({
  data: function () {
    let myFood = new Standard();

    return {
      myFood
    };
  },
  mounted() {
  },
  methods: {
    Cheese() {
      this.myFood = new MoreCheese(this.myFood);
      console.log(this.myFood.getDescription(), this.myFood.cost());
    },
    Salads() {
      this.myFood = new AddSalads(this.myFood);
      console.log(this.myFood.getDescription(), this.myFood.cost());
    },
  },
});
</script>

<template>
  <div>
    <div class="other-card">
      <p>Food order: {{ myFood.getDescription() }}</p>
      <p>Cost: {{ myFood.cost() }}€</p>

      <button class="spacer" @click="Cheese">Add Cheese</button>
      <button class="spacer" @click="Salads">Add Salads</button>
    </div>
  </div>
</template>

<style>
  .other-card{
    float: left;
    width: 100%;
  }
</style>