export interface IFilter {
    languages: string[],
    order: string[],
    autorefresh: number[],
}


export interface IList<T> {
    list:T[],
}