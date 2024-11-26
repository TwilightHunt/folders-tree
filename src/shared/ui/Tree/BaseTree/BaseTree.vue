<script lang="ts" setup>
import type { IBaseTreeProps } from './types.i'
import BaseTreeItem from '../BaseTreeItem/BaseTreeItem.vue'

withDefaults(defineProps<IBaseTreeProps>(), {
  isRootElement: true,
})
defineSlots<{
  [key: string]: unknown
}>()
</script>

<template>
  <div
    class="tree"
    :class="{ 'tree--root': isRootElement }"
  >
    <BaseTreeItem
      v-for="item in items"
      :item="item"
      :key="item.id"
    >
      <template
        v-for="slot in Object.keys($slots)"
        #[slot]="model"
      >
        <slot
          :name="slot"
          v-bind="model"
        />
      </template>
    </BaseTreeItem>
  </div>
</template>

<style lang="scss" scoped>
.tree {
  &:not(.tree--root) {
    margin-left: 5px;
  }
}
</style>
