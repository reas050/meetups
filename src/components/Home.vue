<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class='text-xs-center text-sm-right'>
        <v-btn large router to='/meetups' class='info'>Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class='text-xs-center text-sm-left'>
        <v-btn large router to='/meetups/new' class='info'>Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class='mt-2'>
      <v-flex xs12>
        <v-carousel style='cursor: pointer'>
          <v-carousel-item
            v-for='meetup in meetups'
            :src='meetup.imageUrl'
            :key='meetup.id'
            @click.native='onLoadMeetup(meetup.id)'
          >
            <div class='title'>
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class='mt-2'>
      <v-flex xs12 class='text-xs-center'>
        <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      computed: {
        meetups () {
          return this.$store.getters.featuredMeetups
        }
      },
      meetups: [
        {
          imageUrl:
            'https://www.fox.nl/images/noord-amerika/verenigde-staten/algemeen/new-york/us_nyc_timessquare4_b.jpg?d=1024-0&hd=1',
          id: 'asdfjjasd',
          title: 'Meetup in New York'
        },
        {
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
          id: 'asdfjjasdasdfasdf',
          title: 'Meetup in Paris'
        }
      ]
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
