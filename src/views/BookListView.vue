<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { db } from '@/js/firebase.js';
import { QuerySnapshot, collection, getDocs } from "firebase/firestore";
import { onSnapshot } from 'firebase/firestore'; 
// import axios from 'axios'  // Don't need this anymore, will use via the service
//import BookService from '@/services/BookService.js'

const books = ref([])

async function getBooks() {
  /*
  const querySnapshot = await getDocs(collection(db, "books"))
  querySnapshot.forEach((doc) => {
    const book = {
      "id": doc.id,
      "name": doc.data().name,
      "type1": doc.data().type1,
      "type2": doc.data().type2,
      "japname": doc.data().japname,
      "evolution": doc.data().evolution,
      "image": doc.data().image
    }
    books.value.push(book)
  })
  */

  onSnapshot(collection(db, 'books'), (QuerySnapshot) => {
    QuerySnapshot.forEach((doc) => {
      let book = {
        "id": doc.id,
        "name": doc.data().name,
        "type1": doc.data().type1,
        "type2": doc.data().type2,
        "japname": doc.data().japname,
        "evolution": doc.data().evolution,
        "image": doc.data().image
      }
      books.value.push(book)
    });
  })
}

onMounted(async () => {
  console.log("Connecting to Firebase")
  await getBooks()
})



</script>

<template>
  <div class="products">
    <ProductCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<style>
.products {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
}

body {
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

