export type message = {
    id?: number,
    name: string,
    text: string,
    device: string, 
    created_at: string | string[] 
}


export type name = Omit<message, "text" | "device">

export type gererics = Partial<message>