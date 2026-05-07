import { deleteTask } from "@/app/new/task-action";
import { Button } from "./ui/button";

export default function TaskButtonDelete({ taskId }: { taskId: number }) {
    return (
        <form action={deleteTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <Button variant="destructive">Delete</Button>
        </form>
    )
}
