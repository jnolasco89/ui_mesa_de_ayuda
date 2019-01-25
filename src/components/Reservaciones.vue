<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row align-center justify-space-around>
      <v-flex xs6 sm6 md6>
        <v-select :items="salas" label="Seleccione una sala" prepend-icon="home"></v-select>
      </v-flex>
      <v-flex xs6 sm3 md3>
        <descriptor-de-colores :descriptores="descriptores"></descriptor-de-colores>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm12 md12>
        <full-calendario></full-calendario>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import FullCalendario from "@/components/FullCalendario";
import DescriptorDeColores from "@/components/DescriptorDeColores";

export default {
  name: "reservaciones",
  components: {
    FullCalendario,
    DescriptorDeColores
  },
  data() {
    return {
      descriptores: [
        {
          texto: "Sin reservaciones",
          color: "green"
        },
        {
          texto: "Horarios disponibles",
          color: "yellow"
        },
        {
          texto: "Sin horarios disponibles",
          color: "red"
        }
      ],
      salas: [
          {
              text: 'Sala 1 - Sub direccion de politicas'
          },
          {
              text: 'Sala 2 - Oficinas de reuniones'
          },
          {
              text: 'Sala 3 - aaaaaaaaaaaaaaaaaaaaaa'
          }
      ]
    };
  }
};
</script>
