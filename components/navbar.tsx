import { ModeToggle } from "./toggle-theme-button";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-2">
            <h1 className="text-2xl">Nextjs Task Manager</h1>
            <div className="flex gap-2">
                <Button variant="secondary">Add Task</Button>
                <ModeToggle />
            </div>
        </div>
    )
}
