<template>
  <section class="section">
    <div class="container mt-5 mb-5">
      <div>
        <i class="jam jam-id-card" title="Administrativo" v-b-tooltip.hover/>
        <p>Aqui vai um texto bem interessante e curto falando algo sobre esse Serviço oferecedo pela gestora Brasília</p>
      </div>
      <div>
        <i class="jam jam-computer" title="Comunicação online" v-b-tooltip.hover/>
        <p>Aqui vai um texto bem interessante e curto falando algo sobre esse Serviço oferecedo pela gestora Brasília</p>
      </div>
      <div>
        <i class="jam jam-coin" title="Cobrança" v-b-tooltip.hover/>
        <p>Aqui vai um texto bem interessante e curto falando algo sobre esse Serviço oferecedo pela gestora Brasília</p>
      </div>
      <div>
        <i class="jam jam-users" title="Recursos Humanos" v-b-tooltip.hover/>
        <p>Aqui vai um texto bem interessante e curto falando algo sobre esse Serviço oferecedo pela gestora Brasília</p>
      </div>
      <div>
        <i class="fas fa-gavel" title="Jurídico" v-b-tooltip.hover/>
        <p>Aqui vai um texto bem interessante e curto falando algo sobre esse Serviço oferecedo pela gestora Brasília</p>
      </div>
      <div>
        <i class="fas fa-money-bill-alt" title="Financeiro" v-b-tooltip.hover/>
        <p>Aqui vai um texto bem interessante e curto falando algo sobre esse Serviço oferecedo pela gestora Brasília</p>
      </div>
      <div>
        <i class="jam jam-cogs" title="Manutenção" v-b-tooltip.hover/>
        <p>Aqui vai um texto bem interessante e curto falando algo sobre esse Serviço oferecedo pela gestora Brasília</p>
      </div>
      <div>
        <i class="fas fa-concierge-bell" title="Serviços" v-b-tooltip.hover/>
        <p>Aqui vai um texto bem interessante e curto falando algo sobre esse Serviço oferecedo pela gestora Brasília</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServicesBigIcons"
}
</script>

<style lang="scss" scoped>
.section {
  color: #4b4b4b;
  .container {
    display: flex;
    flex-flow: wrap;
    //max-width: 3rem;

    div {
      width: 23%;
      margin: 1%;
      display: flex;
      flex-direction: column;
      justify-items: center;
      i {
        color: hsla(208, 62%, 64%, 1);
        font-size: 55px;
        margin-right: 1rem;
      }
    }
  }
}
</style>
