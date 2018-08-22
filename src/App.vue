<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" temporary fixed>
      <v-list>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon class="hidden-lg-and-down">supervisor_account</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="hidden-xl-only">View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon 
      @click.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Meetups</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat>
          <v-icon left>supervisor_account</v-icon>
          View Meetups
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>

    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false
    };
  }
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/main';
</style>