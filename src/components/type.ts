export interface IButtonProps{
    onClick ?: () => void
    loading?:boolean
    iconLeft ?:React.ReactNode
    iconRight ?:React.ReactNode
    type ?: ButtonType
    variant :ButtonVariant
    isDisabled ?: boolean
    id ?: string
    className ?: any
    loadingIcon ?:any
    buttonName:string
}

export type IconButton  = Omit<IButtonProps, "iconLeft" | "iconRight">

export type ButtonType = "submit" | "reset"
export type ButtonVariant = "primary" | "secondary"| "tertiary" | "outline"