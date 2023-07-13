<template>
  <h1>todolist list</h1>
  <div>
    <input type="text" placeholder="add task" v-model="taskinpt" :class="err" />
    <button @click="addTask">add</button>
  </div>
  <div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }} <button @click="deleteTask(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "hicham",
      taskinpt: "",
      tasks: [],
      err: "",
    };
  },
  components: {},
  methods: {
    addTask() {
      if (this.taskinpt == "") {
        this.err = "err";
      } else {
        this.tasks.push(this.taskinpt);
        // console.log(this.tasks);
        this.taskinpt = "";
        this.err = "";
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}

h1 {
  color: #333;
  text-transform: uppercase;
}

input[type="text"] {
  /* padding: 5px; */
  font-size: 16px;
  border: 1px solid #ccc;
  margin-right: 10px;
  height: 30px;
  outline: none;
}
input[type="text"]:focus {
  transform: scale(1.04);
}
button {
  /* padding: 15px 16px; */
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  height: 35px;
  width: 100px;
  font-size: 16px;
  transition: 0.3s;
}
button:hover {
  transform: scale(1.07);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

li button {
  background-color: #ff5c5c;
}

li button,
li span {
  margin-left: 10px;
}

li button,
li span {
  cursor: pointer;
}

li button:hover {
  background-color: #e53e3e;
}

li span {
  flex-grow: 1;
  text-align: left;
}
.err {
  /* border: red 1px solid; */
  background-color: #e53e3e;
}
</style>
