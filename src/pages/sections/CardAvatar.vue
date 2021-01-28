<template>
  <b-card class="card-avatar text-center rounded-20 border-bottom-larger p-3" no-body>
    <span class="user-avatar d-flex shadow">
      <img v-if="true" :src="`/img/sections/${img}`" width="150" height="150">
      <i v-else class="fas fa-user fa-4x m-auto"/>
    </span>
    <h1>{{ title}}</h1>
    <p class="mb-0">{{ text }}</p>

    <div class="mt-4 mb-4">
      <a href="#">{{ linkText }}</a>
    </div>
    <!--      <b-col>-->
    <!--        <h5 class="text-primary">+ 7 anos</h5>-->
    <!--        <p>Experiência</p>-->
    <!--      </b-col>-->
    <!--      <b-col class="border-left">-->
    <!--        <h5 class="text-primary mb-0">Fullstack</h5>-->
    <!--        <p>Especialidade</p>-->
    <!--      </b-col>-->
    <!--    </b-row>-->
  </b-card>
</template>

<script>
export default {
  name: "CardAvatar",
  props: {
    img: {type: String},
    title: {type: String},
    text: {type: String},
    linkText: {type: String}
  }
}
</script>

<style lang="scss" scoped>
.card-avatar {
  margin-top: calc(75px + 1em);

  .user-avatar {
    background-color: #eeeeee;
    width: 150px;
    height: 150px;
    border: #fffdff 5px solid;
    border-radius: 50%;
    overflow: hidden;
    margin: -75px auto 1em;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Nunito-Bold';
    color: #858796;
  }
}

.border-bottom-larger {
  border-bottom: 5px solid #dee2e6 !important;
}

.rounded-20 {
  border-radius: 20px !important;
}
</style>
