<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row align-start justify-center fill-height>
      <v-flex xs12 sm12 md12>
        <marcacion-controles></marcacion-controles>
      </v-flex>
    </v-layout>
    <v-layout row align-start justify-center>
      <v-flex xs12 sm12 md6>
        <marcacion-data-empleado
          :datos-empleado="test.dataEmpleado"
          :anio="test.anio"
          :mes="test.mes"
        ></marcacion-data-empleado>
      </v-flex>
    </v-layout>
    <v-layout row align-start justify-center>
      <v-flex xs12 sm12 md12>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap align-center justify-center>
            <v-flex xs12 sm6 md3>
              <descriptor-de-colores :descriptores="test.descriptores"></descriptor-de-colores>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <marcacion-tabs></marcacion-tabs>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <!--
    <v-layout row wrap align-start justify-center>
      <v-flex xs12 sm12 md12>
        <marcacion-controles></marcacion-controles>
      </v-flex>

      <v-flex xs6 sm6 md6>
        <marcacion-data-empleado
          :datos-empleado="test.dataEmpleado"
          :anio="test.anio"
          :mes="test.mes"
        ></marcacion-data-empleado>
      </v-flex>

      <v-flex xs12 sm12 md12>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap align-center justify-center>
            <v-flex xs3 sm3 md3>
              <descriptor-de-colores :descriptores="test.descriptores"></descriptor-de-colores>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <marcacion-tabs></marcacion-tabs>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    -->
  </v-container>
</template>

<script>
import MarcacionDataEmpleado from "@/components/MarcacionDataEmpleado";
import DescriptorDeColores from "@/components/DescriptorDeColores";
import MarcacionTabs from "@/components/MarcacionTabs";
import MarcacionControles from "@/components/MarcacionControles";

export default {
  name: "Marcaciones",
  components: {
    MarcacionDataEmpleado,
    DescriptorDeColores,
    MarcacionTabs,
    MarcacionControles
  },
  data() {
    return {
      test: {
        dataEmpleado: {
          codigoMarcacion: "192.168.132.1",
          nit: "0101-060389-101-4",
          nombre: "Jose Nolasco",
          departamento: "Informacion",
          cargo: "Programador",
          ubicacion: "San Salvador, San Salvador"
        },
        anio: 2018,
        mes: "Diciembre",
        descriptores: [
          {
            texto: "Laborados",
            color: "green"
          },
          {
            texto: "Una marcacion",
            color: "yellow"
          },
          {
            texto: "Ausencia",
            color: "red"
          },
          {
            texto: "Sin registro",
            color: "#ffa420"
          }
        ]
      }
    };
  }
};
</script>

