<template>
  <div>
    <section class="first-section d-flex flex-column">
      <SiteBaseNav/>
      <div class="container h-100 justify-content-center m-auto align-items-center">
        <div class="row">
          <div class="col-md-12">
            <h2 style="font-family: 'Moderat-Regular';text-shadow: 5px 6px 9px black;">Ao seu lado na</h2>
            <h2 style="font-family: 'Moderat-Regular';text-shadow: 5px 6px 9px black;">Gestão do seu</h2>
            <h1 style="font-family: 'Moderat-Black';text-shadow: 5px 6px 9px black;"> Condomínio</h1>
          </div>
        </div>
      </div>
    </section>

    <!--    Soluções-->
    <!--    Serviços-->
    <!--    Administrativo-->
    <!--    Financeiro-->
    <!--    Recursos Humanos-->
    <!--    Cobrança-->
    <!--    Jurídico-->
    <!--    Comunicação online-->
    <!--    Manutenção-->
    <section class="second-section m-5 pt-5 pb-5">
      <div class="row">
        <div class="col">
          <b-img class="img-fluid" src="/img/brand/gestao.jpg"/>
        </div>
        <div class="col">
          <div class="ml-5 mr-5">
            <h1>Gestão de Condomínio</h1>
            <p>Desde a criação da empresa Brasília Gestão de Condomínios - BSB, elegemos como ponto primordial e
              diferencial de mercado a especialização em gestão Condominial.</p>
            <p>Com foco e especialização a BSB vem inovando a sua forma de atendimento com modelo pioneiro de gestão,
              personalizado, centralizado e totalmente voltado para soluções que visam orientar e acompanhar nossos
              clientes desde a captação até que se perpetue de forma transparente, prática e efetiva as parcerias entre
              a Administradora, condomínios e condôminos .</p>
          </div>
        </div>
      </div>
    </section>

    <section class="third-section p-5">
      <div class="m-5">
        <h1>Links Rápidos</h1>
      </div>
      <div class="row m-5">
        <div class="col">
          <b-card class="shadow">
            <b-card-img-lazy src="/img/brand/car_1.png" class="mb-5"/>
            <h3>Acesse seu Condomínio</h3>
            <p>Acesse seu condomínio através do link abaixo.</p>
            <div class="d-flex justify-content-center">
              <router-link to="/">Área do Cliente</router-link>
            </div>
          </b-card>
        </div>
        <div class="col">
          <b-card class="shadow">
            <b-card-img-lazy src="/img/brand/car_2.png" class="mb-4"/>
            <h3>Cadastro de Fornecedores</h3>
            <p>Preencha o cadastro, no link abaixo, e seja nosso fornecedor.</p>
            <div class="d-flex justify-content-center">
              <router-link to="/">Cadastro</router-link>
            </div>
          </b-card>
        </div>
        <div class="col">
          <b-card class="shadow">
            <b-card-img-lazy src="/img/brand/car_3.png" class="mb-5"/>
            <h3>Trabalhe conosco</h3>
            <p>Nos envie seu curriculum e contatos através do link abaixo.</p>
            <div class="d-flex justify-content-center">
              <router-link to="/">Curriculum</router-link>
            </div>
          </b-card>
        </div>
      </div>
    </section>

    <section class="fourth-section m-5">
      <div class="m-auto w-75">
        <h2 class="text-center">
          Fazendo e buscando sempre o Melhor para nossos
          clientes, da forma mais rápida e moderna! </h2>

        <p class="mt-5">&nbsp;&nbsp;A empresa dispõe de recursos necessários para melhor atender aos condomínios da
          capital, investindo
          constantemente em estrutura, tecnologia e qualificação profissional. A equipe, é formada por profissionais
          capacitados que dominam as questões condominiais, além de estarem aptos a prestar orientações objetivas e
          confiáveis.</p>
        <p class="mt-5">Mais que uma simples contabilidade, a BSB atua na área administrativa, financeira, contábil, de
          cobrança e
          jurídica, realizando um assessoramento completo. Pronta para atender qualquer perfil de cliente - independente
          do grau de experiência do administrador, desafios ou complexidades - a empresa propõe as melhores soluções:
          prestando serviços com afinco e compartilhando informações precisas e atualizadas, embasadas na ampla
          experiência no mercado condominial.</p>
        <p class="mt-5">A principal vantagem de ser atendido pela BSB é contar um assessoramento eficaz e confiável,
          encontrando tudo
          que precisa em um só lugar. O resultado dessa parceria é ser amparado por serviços integrados que atendem as
          demandas do condomínio, otimizam a gestão do síndico e aumentam a qualidade da moradia.</p>
        <div class="d-flex">
          <span class="flex-fill"/>
          <img src="/img/brand/logo.png">
        </div>
      </div>
    </section>

    <section class="fifth-section mb-5">
      <div class="container border-bottom">
        <h1>Depoimentos</h1>
      </div>
      <div class="background-image d-flex">
        <b-carousel
            :interval="3000"
            controls
            indicators
            img-width="1024"
            img-height="300"
            style="text-shadow: 1px 1px 2px #333;"
            class="w-50"
        >
          <b-carousel-slide caption="Jhon Mackleine" img-blank>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
          <b-carousel-slide caption="Laurie August" img-blank>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
          <b-carousel-slide caption="Mary kay" img-blank>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </section>

    <section class="sixth-section m-5">
      <div class="row">
        <div class="col">
          <b-img-lazy class="img-fluid" src="/img/brand/meeting.jpg"/>
        </div>
        <div class="col">
          <div class="ml-5 mr-5">
            <h1>Entre em contato conosco</h1>
            <p>Telefones:</p>
            <ul class="list-unstyled">
              <li><i class="fas fa-mobile mr-2"/>(67) 99891.0749</li>
              <li><i class="fas fa-mobile mr-2"/>(67) 99947.4195</li>
              <li><i class="fas fa-phone mr-2"/>(67) 3201.8666</li>
            </ul>
            <p>atendimento@brasiliagestaodecondominio.com.br</p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import SiteBaseNav from '@/templates/SiteNavbar/SiteBaseNav'
import Footer from '@/templates/Footer'

export default {
  name: 'HomePage',
  components: {Footer, SiteBaseNav},
  data() {
    return {
      mainProps: {blank: false, blankColor: '#777', width: 250, height: 250}
    }
  }
}
</script>

<style lang="scss" scoped>
$title: 'Moderat-Black';
p {
  font-family: 'Moderat-Regular';
}

.first-section {
  background: url("/img/brand/building.jpg") top center;
  background-size: cover;
  min-height: 100vh !important;

  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  ::v-deep #navbar-main {
    nav {
      border-bottom-color: #fff !important;

      .nav-link {
        color: #fff !important;
      }
    }
  }

  .container {
    text-transform: inherit;
    position: relative;
    font-weight: bold;

    .row {
      @media (max-width: 776px) {
        padding-top: 50px;
        padding-bottom: 50px;
      }

      h1 {
        font-family: $title;
        color: aliceblue !important;
        line-height: 7rem;
        font-size: 100px;
        @media (max-width: 776px) {
          font-size: 65px !important;
        }
      }

      h2 {
        font-family: $title;
        color: aliceblue !important;
        line-height: 7rem;
        font-size: 75px;
        @media (max-width: 776px) {
          font-size: 55px !important;
        }
      }
    }
  }
}

.second-section {
  h1 {
    font-family: $title;
  }
}

.third-section {
  background: url("/img/brand/condominio.jpg") fixed center;
  background-size: cover;

  h1 {
    font-family: $title;
    color: whitesmoke;
    text-shadow: 5px 5px 9px black;
  }

  //background: rgba(238, 238, 238, 0.5);
}

.fourth-section {
  h2 {
    font-family: $title;
  }
}

.fifth-section {
  h1 {
    font-family: $title;
  }

  .background-image {
    background: url("/img/brand/condominium.jpg") top center;
    background-size: cover;

    ::v-deep .carousel {
      border-radius: 20px;
      background: rgba(100, 100, 100, 0.6);
      margin: 1rem auto;

      h3 {
        color: #f4f5f7;
        font-size: 30px;
      }
    }
  }
}

.sixth-section {
  ::v-deep .carousel-inner .carousel-item {
    width: 100%;
    height: 480px;
  }
}
</style>
