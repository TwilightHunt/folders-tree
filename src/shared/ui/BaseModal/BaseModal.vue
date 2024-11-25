<script lang="ts" setup>
import { computed } from 'vue'
import type { IModalEmits, IModalProps } from './types.i'
import { CrossIcon } from '../Icons'

const emits = defineEmits<IModalEmits>()
const props = defineProps<IModalProps>()

const isVisible = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
})

const closeModal = () => {
  isVisible.value = false
}
</script>

<template>
  <div
    v-if="isVisible"
    class="modal"
  >
    <div class="modal__container">
      <CrossIcon
        class="modal__icon"
        @click="closeModal"
      />
      <h3 class="modal__title">{{ headerMessage }}</h3>
      <div class="modal__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  inset: 0;
  background: rgba(#000, 0.5);
  display: grid;
  place-content: center;
  &__container {
    padding: 3rem;
    padding-top: 1.5rem;
    border-radius: 0.5rem;
    background: #fff;
    position: relative;
  }
  &__icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  &__title {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
}
</style>
