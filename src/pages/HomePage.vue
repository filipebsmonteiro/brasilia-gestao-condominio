<template>
  <div>
    <b-carousel :interval="0" controls>
      <b-carousel-slide img-src="" active>
        <Building/>
      </b-carousel-slide>
      <b-carousel-slide img-src="">
        <HappyGirl/>
      </b-carousel-slide>
      <b-carousel-slide img-src="">
        <Couple/>
      </b-carousel-slide>
      <b-carousel-slide img-src="">
        <HandCellphone/>
      </b-carousel-slide>
    </b-carousel>

    <b-carousel :interval="0" controls>
      <b-carousel-slide img-src="" active>
        <ServicesSimple/>
      </b-carousel-slide>
      <b-carousel-slide img-src="">
        <ServicesBigIcons/>
      </b-carousel-slide>
    </b-carousel>

    <b-carousel :interval="0" controls>
      <b-carousel-slide img-src="">
        <ImageOnRight/>
      </b-carousel-slide>
      <b-carousel-slide img-src="">
        <ImageOnLeft/>
      </b-carousel-slide>
    </b-carousel>

    <b-carousel :interval="0" controls>
      <b-carousel-slide img-src="">
        <CardsOld/>
      </b-carousel-slide>
      <b-carousel-slide img-src="">
        <CardsNew/>
      </b-carousel-slide>
      <b-carousel-slide img-src="">
        <CardsNewIllustration/>
      </b-carousel-slide>
    </b-carousel>


    <section class="fifth-section m-lg-5 m-2 mb-5">
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

    <section class="sixth-section mb-5">
      <div class="container border-bottom">
        <h1>Depoimentos</h1>
      </div>
      <div class="background-image d-flex">
        <b-carousel
            :interval="100000"
            controls
            style="text-shadow: 1px 1px 2px #333;"
            class="w-75"
        >
          <b-carousel-slide
              caption="Fernando Mackleine"
              text="Após trocarem a gestão do condomínio pensei que não mudaria em nada, mas mudou sim e pra melhor!
              Todas as solicitações e atendimentos foram altamente profissionais. E o condôminos realmente foram escutados."
              img-src=""
          />
          <b-carousel-slide
              caption="Lorena Gomes"
              text="Para mim o melhor da nova gestão foi a questão de segurança. Para mim que tenho filhos pequenos
              e vou para o parquinho, em diferentes horas do dia. Se sentir segura não tem preço."
              img-src=""
          />
          <b-carousel-slide
              caption="Mariane Lacerda"
              text="Como funcionária da empresa vejo que realmente o que é prmetido se cumpre, a atenção, a prestatividade
              E isso em todas as áreas, Administrativo, Financeiro, Jurídico, MAnutenção, etc..."
              img-src=""
          />
        </b-carousel>
      </div>
    </section>

    <section class="seventh-section m-5">
      <div class="row d-flex align-items-center">
        <div class="col-lg-6">
          <button @click="actualContact = '/img/sections/contact.jpg'">
            <b-img src="/img/sections/contact.jpg"  width="50"/>
          </button>
          <button @click="actualContact = '/img/sections/contact-illustration.jpg'">
            <b-img src="/img/sections/contact-illustration.jpg"  width="50"/>
          </button>
          <b-img :src="actualContact" fluid thumbnail/>
        </div>
        <div class="col-lg-6">
          <div class="m-lg-5">
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
import Building from "@/pages/sections/Building";
import CardsNew from "@/pages/sections/CardsNew";
import CardsNewIllustration from "@/pages/sections/CardsNewIllustration";
import CardsOld from "@/pages/sections/CardsOld";
import Couple from "@/pages/sections/Couple";
import HandCellphone from "@/pages/sections/HandCellphone";
import HappyGirl from "@/pages/sections/HappyGirl";
import ImageOnLeft from "@/pages/sections/ImageOnLeft";
import ImageOnRight from "@/pages/sections/ImageOnRight";
import ServicesBigIcons from "@/pages/sections/ServicesBigIcons";
import ServicesSimple from "@/pages/sections/ServicesSimple";
import Footer from '@/templates/Footer'

export default {
  name: 'HomePage',
  components: {
    CardsNewIllustration,
    CardsNew,
    CardsOld,
    ImageOnRight,
    ImageOnLeft,
    ServicesBigIcons,
    ServicesSimple,
    HandCellphone,
    Couple,
    HappyGirl,
    Building, Footer
  },
  data() {
    return {
      actualContact: '/img/sections/contact.jpg'
    }
  }
}
</script>

<style lang="scss" scoped>
$title: 'Moderat-Bold';
h1, h2 {
  font-family: $title;
}
p {
  font-family: 'Moderat-Regular';
}
::v-deep .carousel {
  .carousel-caption {
    position: initial !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    right: 0 !important;
    left: 0 !important;
  }
}





.fifth-section {}

.sixth-section {
  background: url("/img/sections/condominium.jpg") center;
  background-size: cover;

  h1 {
    color: whitesmoke;
    text-shadow: 5px 5px 9px black;
  }

  .background-image {

    ::v-deep .carousel {
      border-radius: 20px;
      background: rgba(100, 100, 100, 0.6);
      margin: 1rem auto;

      .carousel-caption {
        position: relative !important;
        right: 0 !important;
        bottom: 0 !important;
        left: 0 !important;
        width: 75%;
        margin: auto;
      }

      h3 {
        color: #f4f5f7;
        font-size: 30px;
      }
    }
  }
}

.seventh-section {}
</style>
