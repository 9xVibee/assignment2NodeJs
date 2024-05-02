import { log } from "console";
import fs from "fs";

// let tasks = [
//   {
//     task: "Task 1",
//     status: false,
//   },
//   {
//     task: "Task 2",
//     status: false,
//   },
// ];

// firstly adding the file
function addTasks(task, tasks) {
  tasks.push(task);
  fs.writeFile("tasks.json", JSON.stringify(tasks), (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Tasks added successfully");
  });
}

// readding the file
function readTheFile(fileName) {
  let tasks = fs.readFileSync(fileName, { encoding: "utf-8" }, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });

  return JSON.parse(tasks);
}

function MarkAllTaskAsComplete(tasks) {
  tasks.forEach((task) => {
    task.status = true;
  });

  fs.writeFile("tasks.json", JSON.stringify(tasks), (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Tasks marked as complete");
  });
}

function removeTheTaskBaseOnIndex(tasks, index) {
  let newTasks = tasks.filter((task, idx) => {
    if (idx !== index) {
      return task;
    }
  });

  console.log(newTasks);
  fs.writeFile("tasks.json", JSON.stringify(newTasks), (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("Task removed successfully");
  });
}

let tasksFromFile = readTheFile("tasks.json");
addTasks({ task: "Task 3", status: false }, tasksFromFile);

console.log(tasksFromFile);
MarkAllTaskAsComplete(tasksFromFile);

removeTheTaskBaseOnIndex(tasksFromFile, 2);
