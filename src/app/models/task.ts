export default interface Task {
    _id: string;
    title: string;
    description: string;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
}