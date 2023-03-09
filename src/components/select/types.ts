
export interface SelectPropsOption {
    value: string
    name: string
}

export interface SelectProps {
    options: SelectPropsOption[],
    defaultValue: string,
    value: string,
    onChange: (value: any) => void
}