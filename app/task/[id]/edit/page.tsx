import CreateTask from "@/components/CreateTask"
import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const task = await prisma.task.findUnique({ where: { id: parseInt(id) } })
    if (!task) redirect("/")
    console.log(task)
    return (
        <div className="flex justify-center items-center h-screen">
            <CreateTask task={task} />
        </div>
    )
}
