import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Task } from "@/generated/prisma/client"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import clsx from "clsx"
import TaskButtonDelete from "./TaskButtonDelete"
import Link from "next/link"

export default function TaskCard({ task }: { task: Task }) {
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <CardTitle>{task.name}</CardTitle>
                <Badge className={
                    clsx({
                        "bg-red-500": task.priority === "high",
                        "bg-yellow-500": task.priority === "medium",
                        "bg-green-500": task.priority === "low",
                        "bg-purple-500": task.priority === "urgent",
                    })
                }>
                    {task.priority}
                </Badge>
            </CardHeader>
            <CardContent>
                <p>{task.description}</p>
                <span className="text-slate-600">{task.createdAt.toLocaleDateString()}</span>
            </CardContent>
            <CardFooter className="gap-2">
                {/*<Button variant="outline">
                    Edit
                </Button>*/}
                <Link href={`/task/${task.id}/edit`}>
                    <Button variant="outline">
                        Edit
                    </Button>
                </Link>

                <TaskButtonDelete taskId={task.id} />
            </CardFooter>
        </Card>
    )
}
