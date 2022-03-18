<template>
  <n-modal v-model:show="showModal" @after-hide="onEventDoneEditing">
    <n-card
      title="Edit Person"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      style="width: fit-content; margin: auto; background-color: burlywood"
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
import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'EditDialog',
  components: {
    NCard,
    NModal,
    PersonForm,
  },
  props: {
    person: { type: Object as PropType<IPerson> },
    afterClosedCallback: {type: Function, required: true},
  },
  // Data
  setup() {
    return {
      showModal: ref(true),
    };
  },
  methods: {
    onEventDoneEditing() {
      this.afterClosedCallback();
    },
  },
});
</script>
