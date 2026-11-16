import TaskItem from "../molecules/TaskItem.config";

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <>
      <ul className="ml-40 shadow-md">
        {tasks.map((item) => {
          return (
            <TaskItem
              key={item.id}
              id={item.id}
              onToggle={onToggle}
              title={item.title}
              description={item.description}
              category={item.category}
              status={item.status}
              priority={item.priority}

              onDelete={onDelete}
            ></TaskItem>
          );
        })}
        {tasks.length === 0 && <p>No tasks available.</p>}
      </ul>
    </>
  );
}
