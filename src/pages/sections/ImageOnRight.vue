<template>
  <section class="section m-5 pt-5 pb-5">
    <div class="row">
      <div class="col-lg-6">
        <div class="ml-5 mr-5 text-left">
          <h1>Gestão de Condomínio</h1>
          <p>Desde a criação da empresa Brasília Gestão de Condomínios - BSB, elegemos como ponto primordial e
            diferencial de mercado a especialização em gestão Condominial.</p>
          <p>Com foco e especialização a BSB vem inovando a sua forma de atendimento com modelo pioneiro de gestão,
            personalizado, centralizado e totalmente voltado para soluções que visam orientar e acompanhar nossos
            clientes desde a captação até que se perpetue de forma transparente, prática e efetiva as parcerias entre
            a Administradora, condomínios e condôminos .</p>
        </div>
      </div>
      <div class="col-lg-6">
        <ImageSlides/>
      </div>
    </div>
  </section>
</template>

<script>
import ImageSlides from "@/pages/sections/ImageSlides";

export default {
  name: "ImageOnRight",
  components: {ImageSlides}
}
</script>

<style lang="scss" scoped>
.section {
  color: #4b4b4b;

  .row {
    display: flex;
    align-items: center;
  }
}
</style>
