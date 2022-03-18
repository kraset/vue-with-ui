<template>
  <n-loading-bar-provider>
    <n-message-provider :placement="'bottom'" :container-style="'background-color: #f0e68c'">
      <n-dialog-provider>
        <slot></slot>
      </n-dialog-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  NMessageProvider,
  NLoadingBarProvider,
  NDialogProvider,
} from 'naive-ui';

export default defineComponent({
  name: 'AppProvider',
  components: {
    NMessageProvider,
    NLoadingBarProvider,
    NDialogProvider,
  },
});
</script>
