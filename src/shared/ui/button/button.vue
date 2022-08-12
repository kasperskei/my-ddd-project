<script lang="ts" setup>
import {computed, unref} from 'vue'
import type {Props} from '@/shared/ui/button/types'

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  loading: false,
  narrow: false,
  rounded: false,
  size: 'm',
  tag: 'button',
  theme: 'default',
  toggled: false,
})

const isDisabled = computed(() => props.disabled || props.loading)
const classes = computed(() => ({
  'btn--is-disabled': unref(isDisabled),
  'btn--is-toggled': props.toggled,
  'btn--narrow': props.narrow,
  'btn--rounded': props.rounded,
  [`btn--size-${props.size}`]: true,
  [`btn--theme-${props.theme}`]: true,
}))
</script>

<template>
  <Component
    :is="tag"
    type="button"
    class="btn"
    :class="classes"
    :disabled="isDisabled"
  >
    <slot v-if="!loading" />
  </Component>
</template>

<style scoped>
.btn {}
</style>
