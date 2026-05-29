export type TaskStatus = "pending" | "in_progress" | "review" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface Subtask {
    _id?: any;
    title: string;
    isDone: boolean;
    assignedTo?: any;
}

export interface Task {
    _id?: any;
    title: string;
    description?: string;
    projectId: any;      // proyecto al que pertenece
    assignedTo?: any;    // usuario asignado
    createdBy: any;      // quien creó la tarea
    status: TaskStatus;
    priority: TaskPriority;
    dueDate?: Date;
    subtasks: Subtask[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}