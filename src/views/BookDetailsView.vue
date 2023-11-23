<script setup>
import { ref, onMounted } from 'vue'
//import BookService from '@/services/BookService.js'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/js/firebase.js';

const theBook = ref(null)
// const id = ref(100001)

const props = defineProps({
    id: { required: true }
})

onMounted(async () => {
  try {
    const bookDocRef = doc(db, 'books', props.id);
    const bookDoc = await getDoc(bookDocRef);

    if (bookDoc.exists()) {
      theBook.value = {
        id: bookDoc.id,
        name: bookDoc.data().name,
        type1: bookDoc.data().type1,
        type2: bookDoc.data().type2,
        japname: bookDoc.data().japname,
        evolution: bookDoc.data().evolution,
        image: bookDoc.data().image
      };
    } else {
      console.error("Book not found");
    }
  } catch (error) {
    console.error("Error fetching book details", error);
  }
})


</script>

<template>
    <div class="detail" v-if="theBook">
        <h1>{{  theBook.name }} ({{  theBook.id }})</h1>
        <img v-if="book" :src="book.image" alt="">
        <h2>Type</h2>
        <p>{{  theBook.type1 }},  {{  theBook.type2 }}</p>
        <h2>Japanese Name</h2>
        <p>{{  theBook.japname }}</p>
        <h2>Evolution</h2>
        <p>{{  theBook.evolution }}</p>
    </div>
</template>

<style>
.detail h1 {
    text-align: center;
}
</style>

