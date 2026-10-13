<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const UpdateComic = ref({
      id: null,
      titulo: "",
      autor: "",
      genero: "",
      disponibilidad: "",
    });

    const listComic = async () => {
      const ComicId = useRoute().params.id;
      try {
        const response = await axios.get(
          `http://localhost:3000/comics/${ComicId}`);
        UpdateComic.value = response.data;
      } catch (error) {
        console.log("No se pudo obtener los comics", error);
      }
    };

    const editComic = async () => {
        try {
             await axios.put(`http://localhost:3000/comics/${UpdateComic.value.id}`, UpdateComic.value);
             setTimeout(() => {
                alert("GENIOOOO!!!");
             },200);
             router.push("/")
        } catch (error) {
            console.log("Error al editar el comic", error)
        }
    };

    onMounted(() => {
      listComic();
    });

    return {
      UpdateComic,
      editComic,
      listComic,
    };
  },
};
</script>

<template>
  <main>
    <form @submit.prevent="editComic">
      <div>
        <div>
          <label for="titulo">Titulo</label>
          <input
            name="titulo"
            v-model="UpdateComic.titulo"
            type="text"
            required
            placeholder="titulo"
          />
        </div>

        <div>
          <label for="autor">Autor</label>
          <input
            name="autor"
            v-model="UpdateComic.autor"
            type="text"
            required
            placeholder="autor"
          />
        </div>
        <div>
          <label for="genero">Genero</label>
          <input
            name="genero"
            v-model="UpdateComic.genero"
            type="text"
            required
            placeholder="genero"
          />
        </div>

        <div>
          <label for="disponibilidad">Disponibilidad</label>
          <input
            name="dispo"
            v-model="UpdateComic.disponibilidad"
            type="text"
            required
            placeholder="disponibilidad"
          />
        </div>
      </div>

      <button type="submit">Guardar cambios</button>
    </form>
  </main>
</template>

<style></style>
