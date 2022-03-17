<template>
  <div class="add-person">
    <h1>Edit Person</h1>

    <PersonForm
      v-if="person !== undefined"
      :isUpdate="true"
      :existing-person="person"
    />
  </div>
</template>

<script lang="ts">
import { getPersonById } from '@/data/person-api';
import { IPerson } from '@/model/person';
import { defineComponent, ref } from 'vue';
import PersonForm from './PersonForm.vue';

interface IRouteParams {
  id: number;
}

export default defineComponent({
  name: 'EditPersonDialog',
  components: {
    PersonForm,
  },
  setup() {
    const person = ref<IPerson | undefined>();
    return {
      person,
    };
  },
  mounted() {
    const params = this.$route.params as unknown as IRouteParams;
    const p = getPersonById(+params.id);
    if (p) {
      this.person = p;
    }
  },
});
</script>

<style>
.add-person {
  background-color: burlywood;
  padding: 2rem;
}
</style>
