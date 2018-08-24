import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          'https://www.fox.nl/images/noord-amerika/verenigde-staten/algemeen/new-york/us_nyc_timessquare4_b.jpg?d=1024-0&hd=1',
        id: 'asdfjjasd',
        title: 'Meetup in New York',
        date: '2018/10/17'
      },
      {
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'asdfjjasdasdfasdf',
        title: 'Meetup in Paris',
        date: '2018/10/19'
      }
    ],
    user: {
      id: 'asdfajsdhflhaskjdf',
      registeredMeetups: ['asdfjjasdasdfasdf']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
