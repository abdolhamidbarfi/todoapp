
export interface InputInterface {
    id: string,
    title: string,
    name: string,
    type: string
    className?: string
}


export interface ButtonInterface {
    id?: string,
    title: string,
    type: "button" | "submit" | "reset" | undefined
    className?: string
}