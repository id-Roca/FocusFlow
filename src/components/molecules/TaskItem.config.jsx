import { StatusBadge } from "../atoms/StatusBadge.config";
import { PriorityBadge } from "../atoms/PriorityBadge.config";
import CountDown from "../atoms/Timer";

export default function TaskItem({
  id,
  title,
  category,
  description,
  status,
  priority,
  onToggle,
  onDelete,
}) {
  return (
    <>
      <li className="flex items-start max-w-192 ml-12">
        <input
          type="checkbox"
          checked={status === "completed"}
          className="mr-6 mt-8 size-xl"
          onChange={() => onToggle(id)}
        />
        <details
          className="collapse bg-base-100 border border-base-300"
          name="my-accordion-det-1"
          open
        >
          <summary className="collapse-title font-semibold flex justify-between">
            <div>
              <div className="flex gap-2 items-center">
                <h3 className={status === "completed" ? "line-through" : ""}>
                  {title}
                </h3>
              </div>

              <p className="text-xs uppercase font-semibold opacity-60 ml-5 mt-2">
                Category: {category}
              </p>
            </div>

            <div className="flex gap-3">
              <PriorityBadge priority={priority}></PriorityBadge>
              <StatusBadge status={status}> </StatusBadge>

              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => onDelete(id)}
              >
                x
              </button>
            </div>
          </summary>

          <div className="list-row flex justify-between collapse-content items-center">
            <div>
              <p className="list-col-wrap text-sm">{description}</p>
            </div>



            <CountDown></CountDown>
          </div>
        </details>
      </li>
    </>
  );
}
