// import { writeFile } from "node:fs";
import type { TaskNode } from "./interfaces.ts";

function main(task: TaskNode): void {
    // writeFile();
}

const my2ndtask: TaskNode = {
    id: 2,
    content: "blablabla",
    parentId: 1,
    metadata: "bro",
}

main(my2ndtask);