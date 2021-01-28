<template>
  <section class="section">
    <div class="container row mt-5 mb-5 ml-auto mr-auto">
      <div class="col-md-6">
        <h1>A queridinha dos condomínios!</h1>
        <p class="mb-0">Se pensou em não se preocupar e ter em quem confiar.</p>
        <p>Com a gente é o seu lugar!</p>
      </div>
      <div class="col-md-6 list-activities">
        <div><i class="jam jam-id-card"/>Administrativo</div>
        <div><i class="jam jam-computer"/>Comunicação online</div>
        <div><i class="jam jam-coin"/>Cobrança</div>
        <div><i class="jam jam-users"/>Recursos Humanos</div>
        <div><i class="fas fa-gavel"/>Jurídico</div>
        <div><i class="fas fa-money-bill-alt"/>Financeiro</div>
        <div><i class="jam jam-cogs"/>Manutenção</div>
        <div><i class="fas fa-concierge-bell"/>Serviços</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "ServicesSimple"
}
</script>

<style lang="scss" scoped>
.section {
  color: #4b4b4b;
  .col-md-6:nth-child(2){
    padding-left: 4rem;
    border-left: lightslategray 1px solid;
  }
  .list-activities {
    display: flex;
    flex-flow: wrap;
    max-width: 3rem;
    div {
      display: flex;
      align-items: center;
      font-family: 'Moderat-Black';
      i {
        color: hsla(208, 62%, 64%, 1);
        font-size: 25px;
        margin-right: 1rem;
      }
    }
  }
}
</style>
