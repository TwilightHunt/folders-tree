<script lang="ts" setup>
import BaseTree from '@/shared/ui/Tree/BaseTree/BaseTree.vue'
import { computed } from 'vue'
import type { IFoldersTreeProps, IFoldersTreeEmits } from './types.i'
import { useFoldersStore, type IFolder } from '@/entities/folder';

const props = defineProps<IFoldersTreeProps>()
const emits = defineEmits<IFoldersTreeEmits>()

const selectedFolder = computed<IFolder | undefined>({
  get: () => props.selectedFolder,
  set: (value) => emits('update:selectedFolder', value),
})

const selectFolder = (newValue: IFolder) => {
  selectedFolder.value = selectedFolder.value?.id === newValue.id ? undefined : newValue
}

const { folderList } = useFoldersStore()
</script>

<template>
  <BaseTree :items="folderList">
    <template #item="props">
      <div
        class="list-item"
        :class="{ 'list-item--header': props.item?.children?.length }"
      >
        <div
          class="list-item__input"
          :class="{ 'list-item__input--checked': selectedFolder?.id === props.item.id }"
          @click.stop="selectFolder(props.item)"
        ></div>
        <label> {{ props.item?.name }}</label>
      </div>
    </template>
  </BaseTree>
</template>

<style lang="scss" scoped>
.list {
  &-item {
    padding: 0.3rem;
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 1.6rem;
    &__input {
      border-radius: 50%;
      border: 1px solid #00aeff;
      width: 12px;
      height: 12px;
      display: grid;
      place-content: center;
      &--checked {
        &::before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00aeff;
        }
      }
    }
  }
}
</style>
