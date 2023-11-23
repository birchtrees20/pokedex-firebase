<template>
  <div class="about">
    <h1>Pokedex application</h1>
  </div>
</template>

<script setup>
import { db } from '@/js/firebase.js';
import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "books"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());


});


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
