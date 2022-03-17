<template>
  <div class="add-person">
    <h1>Add New Person</h1>

    <PersonForm @eventDoneEditing="onEventDoneEditing" />
  </div>
</template>

<script lang="ts">
import { IPerson } from '@/model/person';
import { defineComponent } from 'vue';
import PersonForm from '../components/PersonForm.vue';

export default defineComponent({
  name: 'AddPersonView',
  components: {
    PersonForm,
  },
  setup() {
    const person: IPerson = { id: 1, name: 'Christian', phoneNr: '070-123' };
    return {
      person,
    };
  },
  methods: {
    onEventDoneEditing(person: IPerson | null) {
      if (person){
          // Call backend
      }
    },
  },
});
</script>

<style>
.add-person {
  background-color: burlywood;
  padding: 2rem;
}
</style>
