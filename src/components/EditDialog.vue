<template>
  <n-modal :show="true" @after-hide="onEventDoneEditing(false)">
    <n-card
      title="Edit Person"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <PersonForm
        v-if="person !== undefined"
        :isUpdate="true"
        :existing-person="person"
        @eventDoneEditing="onEventDoneEditing"
      />
    </n-card>
  </n-modal>
</template>

<script lang="ts">
import { IPerson } from '@/model/person';
import PersonForm from './PersonForm.vue';
import { NCard, NModal } from 'naive-ui';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'EditDialog',
  components: {
    NCard,
    NModal,
    PersonForm,
  },
  props: {
    person: { type: Object as PropType<IPerson> },
  },
  emits: {
    closed(updated: boolean) {
      return updated;
    },
  },
  methods: {
    onEventDoneEditing(isUpdated: boolean) {
      this.$emit('closed', isUpdated);
    },
  },
});
</script>

<style scoped>
.n-card {
  width: fit-content;
  margin: auto;
  background-color: burlywood;
}
</style>
