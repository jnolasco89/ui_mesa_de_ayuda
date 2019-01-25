<template>
  <v-card flat class="elevation-5">
    <v-btn @click="cambiarAvistaAgenda">Click me</v-btn>
    <v-card-text>
      <full-calendar
        @day-click="cambiarAvistaAgenda"
        :events="events"
        :config="configuraciones"
        ref="calendariofull"
      />
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "full-calendario",
  data() {
    return {
      events: [
        {
          title: "test",
         // allDay: true,
          start: "2018-12-20T02:30:00+00:00",
          end: "2018-12-20T03:30:00+00:00"
        },
        {
          title: "test2",
          //allDay: true,
          start: "2018-12-20T03:30:00+00:00",
          end: "2018-12-25T04:00:00+00:00"
        },
        {
          title: "Meeting",
          start: "2018-12-20T10:30:00+00:00",
          end: "2018-12-20T12:30:00+00:00"
        }
      ],
      configuraciones: {
        defaultView: "month",
        selectable: true,
        header: {
          left: false,
          center: "title",
          right: false
        },
        locale: "es"
        /*
       ,
        eventRender: function(event, element) {
          console.log(event);
        },
        dayClick: function(date) {
          alert("clicked " + date.format());
          
        },
        select: function(startDate, endDate) {
          alert("selected " + startDate.format() + " to " + endDate.format());
        }
        */
      }
    };
  },
  methods: {
    cambiarAvistaAgenda: function() {
      this.$refs.calendariofull.fireMethod("changeView", "agendaDay");
    }
  }
};
</script>
<style>
div .fc-scroller {
  overflow: auto !important;
  /*overflow-x: visible !Important; */
  /*overflow-x: visible !important;*/
}
</style>
