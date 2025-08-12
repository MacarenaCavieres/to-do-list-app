export type Task = {
    id: string;
    status: string;
    created: string;
    endDate: string;
    modified: string;
    started: string;
    task: string;
};

export enum ItemStatus {
    ToStart = "ToStart",
    Pending = "Pending",
    InProgress = "Inprogress",
    Finished = "Finished",
}
