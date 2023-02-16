export interface TableHeader {
    name: string;
    sort?: string;
    hidden?: boolean;
}

export interface PaginationResult<T> {
    items: T[];
    total: number;
}
