<script lang="ts" setup>
import { ref } from 'vue'
import BaseTree from '../BaseTree/BaseTree.vue'
import type { IBaseTreeItemProps } from './types.i'

const props = defineProps<IBaseTreeItemProps>()

const childrenVisible = ref<boolean>(false)

const toggleChildren = () => {
  if (props.item?.children) {
    childrenVisible.value = !childrenVisible.value
  }
}
</script>

<template>
  <div
    class="tree-item"
    :class="{ 'tree-item--header': item?.children?.length }"
    @click.prevent.stop="toggleChildren"
  >
    <slot
      name="item"
      :item="item"
    />
  </div>
  <div v-if="item?.children?.length && childrenVisible">
    <BaseTree
      :items="item.children"
      :is-root-element="false"
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
    </BaseTree>
  </div>
</template>
