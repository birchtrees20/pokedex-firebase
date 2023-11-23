<script setup>

defineProps({
  book: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <!-- <RouterLink to="book/100001"> -->
<div>
      <div class="product-card">
      <RouterLink :to="{ name: 'book-details', params: { id: book.id } }" >
      <h2>{{ book.name }}</h2>
      <img v-if="book" :src="book.image" alt="">
      </RouterLink>
    </div>
</div>
</template>

<style scoped>
.product-card {
  align-items: center;
  text-align: center;
  padding: 20px;
  margin: 10px 10px;
  width: 150px;
  cursor: pointer;
  border: 1px solid #39495c;
}
.product-card img {
  max-width: 100px;
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
