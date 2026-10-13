<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
    setup() {

        const comics = ref([]);

        const listarComics = async()=>{
            try {
                const response = await axios.get("http://localhost:3000/comics");
                comics.value = response.data;
                console.log(comics.value);
            }catch (error){
                console.log("Error al buscar los comics desde el endpoint", error)
            }
        };   
        
        const eliminarComic = async(id,titulo) =>{
            const confirmarborrado = window.confirm(
                `Seguro que quieres eliminar este Comic? ${titulo}`
            );
            if(confirmarborrado){
                try {
                await axios.delete(`http://localhost:3000/comics/${id}`);
                listarComics();
            }catch (error){
                console.log("Error al eliminar el Comic", error);
            }
        }
    }

        onMounted(() =>{
            listarComics();
        });

        return {
            comics,
            listarComics,
            eliminarComic
        };
    }
};

</script>

<template>
    <h1>Inicio</h1>
<main>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>titulo</th>
                <th>autor</th>
                <th>genero</th>
                <th>disponibilidad</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="comic in comics" key="comic.id">
                <td>{{ comic.id }}</td>
                <td>{{ comic.titulo }}</td>
                <td>{{ comic.autor }}</td>
                <td>{{ comic.genero }}</td>
                <td>{{ comic.disponibilidad }}</td>
                <div>
                    <button @click="eliminarComic(comic.id,comic.titulo)">
                        Eliminar
                    </button>
                    <RouterLink :to="{path:'EditarComic/'+comic.id}">Editar</RouterLink>
                </div>
            </tr>
        </tbody>
    </table>
</main>
</template>

<style>
</style>