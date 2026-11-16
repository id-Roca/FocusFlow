
import { useState } from "react";
import TaskList from "./components/organism/TaskList.config";
import InputField from "./components/atoms/InputField.config";
import AddTaskModal from "./components/organism/AddTaskModal.config";
import { pageSettings } from "./settings/settings";
import useLocalStorage from "./hooks/useLocalStorage";
import backgroundDesk from "./assets/background-desk.jpg";

import "./App.css";

export default function App() {
  const [tasks, setTasks] = useLocalStorage(
    "focusflow-tasks",
    pageSettings.tasks,
  );

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "open" : "completed",
            }
          : task,
      ),
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id),
    );
  }

  const totalTasks = tasks.length;

  const openTasks = tasks.filter(
    (task) => task.status === "open",
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed",
  ).length;


  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      filter === "all" || task.status === filter;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed flex justify-center items-start px-4 py-10"
      style={{ backgroundImage: `url(${backgroundDesk})` }}
    >
      <main className="w-full max-w-5xl bg-white/80 rounded-2xl shadow-xl p-6 md:p-10">

        
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            FocusFlow
          </h1>
          <p className="text-gray-500 mt-2">
            Organize your tasks. Stay focused.
          </p>
        </header>


        <section className="stats stats-vertical sm:stats-horizontal shadow bg-white w-full mb-8">
          <div className="stat">
            <div className="stat-title">Total Tasks</div>
            <div className="stat-value">{totalTasks}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Open</div>
            <div className="stat-value text-warning">
              {openTasks}
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Completed</div>
            <div className="stat-value text-success">
              {completedTasks}
            </div>
          </div>
        </section>

    
        <section className="mb-6">
          <InputField
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </section>


        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            My Tasks
          </h2>

          <div className="flex flex-wrap gap-2">
            <button
              className={
                filter === "all"
                  ? "btn btn-primary"
                  : "btn bg-white"
              }
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={
                filter === "open"
                  ? "btn btn-primary"
                  : "btn bg-white"
              }
              onClick={() => setFilter("open")}
            >
              Open
            </button>

            <button
              className={
                filter === "completed"
                  ? "btn btn-primary"
                  : "btn bg-white"
              }
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="mb-6">
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </div>


        <div className="fixed bottom-6 right-10 z-50">
          <AddTaskModal onAddTask={addTask} />
        </div>

      </main>
    </div>
  );
}
