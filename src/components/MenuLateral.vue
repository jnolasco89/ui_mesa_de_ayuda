<template>
  <v-layout id="layoutMenuLateral" row>
    <v-flex sm10 offset-sm1>
      <v-card class="elevation-12 md2">
        <v-list dense>
          <v-list-group
            v-for="item in itemsMenu"
            v-model="item.active"
            :key="item.titulo"
            :prepend-icon="item.icono"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title @click="eventoMenu(item.titulo)">{{ item.titulo }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-for="subItem in item.items" :key="subItem.titulo">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.titulo }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.icono }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "MenuLateral",
  data() {
    return {
      itemsMenu: [
        {
          icono: "alarm_on",
          titulo: "Marcaciones",
          vista: 'Marcaciones',
          items: [
            { titulo: "Breakfast & brunch" },
            { titulo: "New American" },
            { titulo: "Sushi" }
          ]
        },
        {
          icono: "assignment_turned_in",
          titulo: "Reservaciones",
          vista: 'Reservaciones',
          items: [{ titulo: "List Item" }]
        },
        {
          icono: "supervisor_account",
          titulo: "Usuarios",
          vista: 'Usuarios',
          items: []
        }
      ]
    };
  },
  methods: {
    eventoMenu: function(nombreVista) {
      this.$router.push({ name: nombreVista });
    }
  }
};
</script>

<style>
#layoutMenuLateral {
  margin-top: 20px;
}
</style>
    

