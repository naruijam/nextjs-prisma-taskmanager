import Link from "next/link";
import { ModeToggle } from "./toggle-theme-button";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-2">
            <Link href="/">
                <h1 className="text-2xl font-bold">Nextjs Task Manager</h1>
            </Link>
            <div className="flex gap-2">
                <Link href="/new" className={buttonVariants({ variant: "secondary" })}>Add task</Link>
                <ModeToggle />
            </div>
        </div>
    )
}
