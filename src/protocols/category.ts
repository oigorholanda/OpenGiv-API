export type category = {
    id?: number,
    name: string,
    text: string,
    device: string, 
    created_at: string | string[] 
}


export type name = Omit<category, "text" | "device">

export type gererics = Partial<category>