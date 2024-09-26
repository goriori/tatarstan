export type AProps = {
    haveTimeout?: boolean
    color: 'default' | 'warning' | 'error'
}
export type AEmits = {
    (eventName: 'onClick'): void
    (eventName: 'onTimeOut'): void
}
