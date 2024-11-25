export interface IModalProps {
  modelValue?: boolean
  headerMessage?: string
  backgroundColor?: string
}

export interface IModalEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
}
