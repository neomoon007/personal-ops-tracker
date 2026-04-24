export interface TaskNode {
    id: number;
    content: string;
    parentId?: number;
    metadata: string;
}