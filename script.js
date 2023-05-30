const app = Vue.createApp({
  data() {
    return {
      isPlaying: true,
      songTitle: "Jireh__Elevation_Worship_&_Maverick_City",
      songSource: "Jireh__Elevation_Worship_&_Maverick_City(128k).m4a"
    };
  },
  methods: {
    togglePlayback() {
      const audioElement = this.$refs.audioPlayer;
      if (this.isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    audioLoaded() {
      this.isPlaying = false; // Ensure initial state is correct
    }
  },
  mounted() {
    this.$refs.audioPlayer.addEventListener('loadeddata', this.audioLoaded);
  }
});

app.mount("#app");