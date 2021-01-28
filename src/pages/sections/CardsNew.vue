<template>
  <section class="section p-5">
    <div class="m-lg-5 mb-4">
      <h1>Links Rápidos</h1>
    </div>
    <div class="d-flex justify-content-around">
      <div class="w-25">
        <CardAvatar
            img="card_1.jpg"
            title="Área do Cliente"
            text="Acesse seu condominio através do link abaixo."
            link-text="Área do Cliente"
        />
      </div>
      <div class="w-25">
        <CardAvatar
            img="card_2.jpg"
            title="Cadastro de Fornecedores"
            text="Preencha o cadastro, no link abaixo, e seja nosso fornecedor."
            link-text="Cadastro"
        />
      </div>
      <div class="w-25">
        <CardAvatar
            img="card_3.jpg"
            title="Trabalhe Conosco"
            text="Nos envie seu curriculum e contatos através do link abaixo."
            link-text="Currículo"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CardAvatar from "@/pages/sections/CardAvatar";
export default {
name: "CardsNew",
  components: {CardAvatar}
}
</script>

<style lang="scss" scoped>
.section {
  background: url("/img/sections/links.jpg") fixed center;
  background-size: cover;

  h1 {
    color: whitesmoke;
    text-shadow: 5px 5px 9px black;
  }
}
</style>
