export default function AddTaskModal({ onAddTask }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const newTask = {
      id: crypto.randomUUID(),
      title: formData.get("title").trim(),
      description: formData.get("description"),
      category: formData.get("category"),
      priority: formData.get("priority"),
      status: "open",
    };

    if (!newTask.title) return;

    onAddTask(newTask);

    form.reset();
    form.closest("dialog").close();
  }
  return (
    <>
      <button
        className="btn btn-primary btn-circle w-16 h-16 text-3xl shadow-lg"
        onClick={() => document.getElementById("add_task_modal").showModal()}
      >
        +
      </button>

      <dialog id="add_task_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create New Task</h3>

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
            <input
              type="text"
              name="title"
              placeholder="Task title"
              className="input w-full"
              required
            />

            <textarea
              name="description"
              placeholder="Task description"
              className="textarea w-full"
            />
            <p>Select a category:</p>
            <select name="category" className="select w-full">
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Study">Study</option>
            </select>
            <p>Select a priority:</p>
            <select name="priority" className="select w-full">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <button type="submit" className="btn btn-primary">
              Add Task
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
