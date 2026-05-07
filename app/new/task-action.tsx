import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createNewTask(formData: FormData) {
    "use server"
    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const priority = formData.get("priority")?.toString()

    if (!name || !description || !priority) return;

    const newTask = await prisma.task.create({
        data: {
            name: name,
            description: description,
            priority: priority,
        }
    })
    redirect("/")
}