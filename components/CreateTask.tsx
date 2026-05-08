import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "./ui/textarea"
import { createNewTask, updateTask } from "@/app/new/task-action"
import { Task } from "@/generated/prisma/client"

export default function CreateTask({ task }: { task: Task }) {
    const functionAction = task?.id ? updateTask : createNewTask
    return (
        <form className="w-full max-w-sm" action={functionAction}>
            <Input type="hidden" name="id" value={task?.id} />
            <Card>
                <CardHeader>
                    <CardTitle>Create Task</CardTitle>
                    <CardDescription>
                        Add a new task
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Task name"
                                defaultValue={task?.name}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="description">Description</Label>
                            </div>
                            <Textarea id="description" name="description" placeholder="Task description" defaultValue={task?.description || ""} />
                        </div>
                        <Select name="priority" defaultValue={task?.priority}>
                            <SelectTrigger className="w-full max-w-48">
                                <SelectValue placeholder="Select a priority" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Priority</SelectLabel>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="urgent">Urgent</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Create
                    </Button>
                    <Button variant="outline" className="w-full">
                        Cancel
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
