import type { IFolder } from "@/entities/folder"

export interface IFoldersTreeEmits {
  (e: 'update:selectedFolder', value: IFolder | undefined): void
}

export interface IFoldersTreeProps {
  selectedFolder?: IFolder
}
