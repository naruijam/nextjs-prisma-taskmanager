import { prisma } from "@/lib/prisma"
import TaskCard from "@/components/taskCard"

export default async function page() {
  const tasks = await prisma.task.findMany()
  return (
    <div className="grid grid-cols-4 gap-4 p-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  )
}
