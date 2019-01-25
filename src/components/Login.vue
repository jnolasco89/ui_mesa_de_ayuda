<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="nit"
                data-vv-name="nit"
                v-validate="'required|max:17'"
                :error-messages="errors.collect('nit')"
                required
                label="NIT"
                prepend-icon="person"
                placeholder="0000-000000-000-0"
                :mask="mascarNit"
              ></v-text-field>
              <v-text-field
                v-model="password"
                data-vv-name="password"
                v-validate="'required'"
                :error-messages="errors.collect('password')"
                required
                label="Contraseña"
                prepend-icon="lock"
                placeholder=" "
                :append-icon="passVisible ? 'visibility_off' : 'visibility'"
                :type="passVisible ? 'text' : 'password'"
                @click:append="passVisible = !passVisible"
              ></v-text-field>
              <a @click="restablecer()">Restablecer contraseña</a>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-layout>
              <v-btn color="primary" @click="login">Ingresar
                <v-icon right dark>arrow_forward</v-icon>
              </v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      nit: "",
      mascarNit: "####-######-###-#",
      password: "",
      passVisible: false,
      dictionary: {
        attributes: {
          nit: "NIT",
          password: "Contraseña"
        },
        custom: {
          nit: {
            required: function() {
              return "El campo NIT es requerido";
            },
            max:
              "El campo NIT solo puede tener 17 caracteres incluyendo los guiones(-)"
          },
          password: {
            required: function() {
              return "El campo Contraseña es requerido";
            }
          }
        }
      }
    };
  },
  mounted() {
    this.$validator.localize("en", this.dictionary);
  },
  methods: {
    login: function() {
      this.$validator.validateAll().then(result => {
        if (result) {
          /*
              axios.post('http://localhost:8080/resrvacionesconna/webresources/usuario/login',
                {
                  nit: this.nit,
                  password: this.password
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
                */
          this.$emit('loginCorrecto')
          return;
        } else {
          alert("Validar bien");
        }
      });
    },
    restablecer: function () {
      this.$router.push({name:"Restablecer"})
      this.$emit('navToVistaResetPass')
    }
  }
};
</script>

