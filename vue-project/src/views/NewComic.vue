<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const NewComic = ref({
      titulo: "",
      autor: "",
      genero: "",
      disponibilidad: ""
    });

    const CrearComic = async() => {

      try {
        const response = await axios.post("http://localhost:3000/comics", NewComic.value);
      
        setTimeout(()=>{
          alert("GENIO!!!");
        },200);

      NewComic.value.titulo= "",
      NewComic.value.autor= "",
      NewComic.value.genero= "",
      NewComic.value.disponibilidad= ""    

      console.log("GENIO!!!", response.data)
      } catch (error) {
        console.log("No se pudo crear el comic", error)
      }

    };
    
    return{
      NewComic,
      CrearComic
    }
  },
};
</script>

<template>
  <main>
    <form @submit.prevent="CrearComic">
      <div>
        <div>
          <label for="titulo">Titulo</label>
          <input
            name="titulo"
            v-model="NewComic.titulo"
            type="text"
            required
            placeholder="titulo"
          />
        </div>

        <div>
          <label for="autor">Autor</label>
          <input
            name="autor"
            v-model="NewComic.autor"
            type="text"
            required
            placeholder="autor"
          />
        </div>
        <div>
          <label for="genero">Genero</label>
          <input
            name="genero"
            v-model="NewComic.genero"
            type="text"
            required
            placeholder="genero"
          />
        </div>

        <div>
          <label for="disponibilidad">Disponibilidad</label>
          <input
            name="dispo"
            v-model="NewComic.disponibilidad"
            type="text"
            required
            placeholder="disponibilidad"
          />
        </div>
      </div>

      <button type="submit">Crear Nuevo Comic</button>
    </form>
  </main>
</template>

<style></style>
