interface ResultVO<T> {
    code: number;
    message: string;
    data: T;
}
export type { ResultVO}