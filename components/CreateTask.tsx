import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreateTask() {
    return (
        <form className="w-full max-w-sm">
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
                                type="text"
                                placeholder="Task name"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="description">Description</Label>
                            </div>
                            <Input id="description" type="text" placeholder="Task description" required />
                        </div>
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
