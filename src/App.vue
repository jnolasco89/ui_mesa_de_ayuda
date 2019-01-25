<template>
  <div id="app">
    <v-app>
      <div v-if="dashboardVisible">
        <v-navigation-drawer app clipped floating>
          <MenuLateral></MenuLateral>
        </v-navigation-drawer>
      </div>

      <v-toolbar app dark clipped-left color="primary">
        <v-spacer></v-spacer>
        <a class="d-flex router-link-active">
          <img src="./assets/logo-conna-transparente.png" width="60px" height="38px">
        </a>
        <v-toolbar-title class="white--text">
          Mesa de ayuda - Consejo Nacional de la Niñez y de la Adolescencia -
          CONNA
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <div v-if="dashboardVisible">
          <v-menu offset-y>
            <v-btn color="primary" slot="activator">
              <v-icon>account_circle</v-icon>Jose Nolasco
            </v-btn>
            <v-list>
              <v-list-tile v-for="(item, index) in items" :key="index">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-btn color="success" @click="cerrarSesion()">Salir
            <v-icon right dark>arrow_back</v-icon>
          </v-btn>
        </div>
      </v-toolbar>
      <v-content>
        <router-view
          v-on:returnToVistaLogin="mostrarFooter"
          v-on:navToVistaResetPass="ocultarFooter"
          v-on:loginCorrecto="cargarDashboard"
        ></router-view>
      </v-content>
      <div v-if="footerVisible">
        <v-footer app>
          <v-layout justify-center row wrap>
            <v-flex lighten-2 text-xs-center xs12>
              <div>
                <h3>
                  <strong>¿No tiene cuenta?</strong>
                  <a @click="vistaRegistro()">Registrarse</a>
                </h3>
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
      </div>
    </v-app>
  </div>
</template>

<script>
import MenuLateral from "@/components/MenuLateral";

export default {
  name: "App",
  components: {
    MenuLateral
  },
  data() {
    return {
      footerVisible: true,
      dashboardVisible: false,
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ]
    };
  },
  methods: {
    vistaRegistro: function() {
      this.footerVisible = false;
      this.$router.push({ name: "Registrarse" });
    },
    mostrarFooter: function() {
      this.footerVisible = true;
    },
    ocultarFooter: function() {
      this.footerVisible = false;
    },
    cargarDashboard: function() {
      this.footerVisible = false;
      this.dashboardVisible = true;

      this.$router.push({name:'Marcaciones'})
    },
    cerrarSesion: function(){
      this.footerVisible=true
      this.dashboardVisible=false
      this.$router.push({name:'Login'})
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.v-content {
  padding-top: 0px!important;
}
</style>
