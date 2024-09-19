<script>
import {UniversityApiService} from "../services/university.service.js";
import {toUnit} from "@primevue/themes";

export default {
  name: "card-content",

  data() {
    return {
      universities:[],
      universityApiService: new UniversityApiService()

    };
  },

  methods:{
    toUnit,

    getAllUniversities(){
      this.universityApiService.getAllResources()
      .then(response => {

        this.universities = response.data;

        this.universities.forEach(resource => {
          resource.logo = this.universityApiService.getUrlToLogo(resource.domains[0]);
        });

        console.log('university API',this.universities);
      })
      .catch(error => {
        console.log('Error in API', error);
      });
    }
  },

  created() {
    console.log('created card content');
    this.getAllUniversities();
  }

}
</script>

<template>


  <div>
    <h1> {{ $t('title-home') }}</h1>

    <pv-card v-for="university in universities" :key="university" style="width: 25rem; overflow: hidden; margin: 20px; border: 5px">

      <template #header>
        <img :src="university.logo" :alt="university.domains[0]" styles=""/>
      </template>

      <template #title>
        <h3>{{university.name}}</h3>
      </template>

      <template #content>
        <p v-for="domain in university.domains" :key="domain">
          {{domain}}
        </p>

        <p v-for="page in university.web_pages" :key="page">
          {{page}}
        </p>
      </template>

      <template #footer>
        <button><a  :href="university.web_pages" target="_blank">Visit</a></button>
      </template>
    </pv-card>
  </div>



</template>

<style scoped>

</style>