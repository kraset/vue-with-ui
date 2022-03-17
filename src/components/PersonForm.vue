<template>
  <div class="edit-person-form">
    <n-space vertical>
      <n-input-number
        v-if="!isUpdate"
        v-model:value="person.id"
        :show-button="false"
        placeholder="Enter unique ID number"
        class="input"
      />
      <n-input
        v-model:value="person.name"
        type="text"
        placeholder="Enter name"
        class="input"
      />
      <n-input
        v-model:value="person.phoneNr"
        type="text"
        placeholder="Enter phone number"
        class="input"
      />
    </n-space>
    <n-button @click="onClickCancel()" type="error">Cancel</n-button>
    <n-button @click="onClickSave()" type="primary">Save</n-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { NSpace, NInput, NInputNumber, NButton } from 'naive-ui';
import { IPerson } from '@/model/person';

export default defineComponent({
  name: 'PersonForm',
  components: {
    NSpace,
    NInput,
    NInputNumber,
    NButton,
  },
  props: {
    isUpdate: { type: Boolean, default: false },
    existingPerson: { type: Object as PropType<IPerson>, required: false },
  },
  setup() {
    const person = ref<IPerson>({ id: 0, name: '', phoneNr: '' });
    return {
      person: person,
    };
    //
  },
  mounted() {
    if (this.isUpdate && this.existingPerson) {
      this.person = this.existingPerson;
    }
    console.log('Mounted. ', this.person);
  },
  // Declare emitters
  emits: {
    // Null if person was not updated...
    eventDoneEditing(person: IPerson | null) {
      return person;
    },
  },
  methods: {
    onClickCancel() {
      this.$emit('eventDoneEditing', null);
    },
    onClickSave() {
      this.$emit('eventDoneEditing', this.person);
    },
  },
});
</script>

<style scoped>
.edit-person-form {
  background-color: rgb(240, 215, 183);
  padding: 2rem;
  max-width: 40rem;
  margin: auto;
}
.n-button {
  margin: 2rem 2rem 0rem 2rem;
}
.input {
  max-width: 15rem;
  margin: auto;
}
</style>
