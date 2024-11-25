<script lang="ts" setup>
import { ref } from 'vue'
import { BaseButton, BaseModal } from '@/shared/ui'
import { FoldersTree } from '@/features/folders-tree'
import type { IFolder } from '@/entities/folder/types.i'

const isModalVisible = ref<boolean>(false)
const selectedFolder = ref<IFolder | undefined>()

const openModal = () => {
  isModalVisible.value = true
}
</script>

<template>
  <div class="open-modal">
    <div
      v-if="selectedFolder"
      class="open-modal__current-folder"
    >
      Current selected folder: {{ selectedFolder.name }}
    </div>
    <BaseModal
      v-model="isModalVisible"
      header-message="Folders"
      class="modal-folders-tree"
    >
      <FoldersTree v-model:selected-folder="selectedFolder" />
    </BaseModal>
    <BaseButton
      class="open-modal__button"
      @click="openModal"
      >Open</BaseButton
    >
  </div>
</template>

<style lang="scss" scoped>
.open-modal {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  &__button {
    margin-top: 1rem;
    width: 20rem;
  }
}
</style>
