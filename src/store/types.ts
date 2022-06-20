export interface IFilter {
    languages: {
        selectAll: boolean,
        list: [{
            id:number,
            name:string,
            selected:boolean,
            prefix:string
        },{
            id:number,
            name:string,
            selected:boolean,
            prefix:string
        },{
            id:number,
            name:string,
            selected:boolean,
            prefix:string
        },{
            id:number,
            name:string,
            selected:boolean,
            prefix:string
        }
    ]},
    order: {
        popular: boolean,
        latest: boolean,
        mostRead: boolean,
        top: boolean,
    },
    autorefresh: number[],
}


export interface IList {
    loading: boolean,
    error: boolean  | null,
    list:[],
}