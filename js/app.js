Vue.config.devtools = true;

const app = new Vue({
  el: "#app",
  data: {
    newTask: "",
    tasks: [
      "Fare la spesa",
      "Fare la valigia",
      "Tagliando auto",
      "Buttare spazzatura",
    ],
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push(this.newTask);
      }
      this.newTask = "";
    },
  },
});
