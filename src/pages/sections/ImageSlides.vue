<template>
  <div class="">
    <button @click="actual = '/img/sections/table-charts.jpg'">
      <b-img src="/img/sections/table-charts.jpg"  width="50"/>
    </button>
    <button @click="actual = '/img/sections/table-woman.jpg'">
      <b-img src="/img/sections/table-woman.jpg"  width="50"/>
    </button>
    <button @click="actual = '/img/sections/table-notebook.jpg'">
      <b-img src="/img/sections/table-notebook.jpg"  width="50"/>
    </button>
    <button @click="actual = '/img/sections/table-illustration.jpg'">
      <b-img src="/img/sections/table-illustration.jpg"  width="50"/>
    </button>
    <b-img :src="actual" fluid/>
  </div>
</template>

<script>
export default {
  name: "ImageSlides",
  data() {
    return {
      actual: '/img/sections/table-charts.jpg'
    }
  }
}
</script>
