<template>
  <div class="person-list">
    <h4>List of all persons</h4>

    <p>{{ description }}</p>

    <n-card size="small" v-for="person in persons" :key="person.id">
      <div class="card-row">
        <div>id: {{ person.id }}, name: {{ person.name }}</div>

        <n-button @click="onClickEditPerson(person)" type="warning"
          >Edit Person</n-button
        >
      </div>
    </n-card>
  </div>
</template>

<script lang="ts">
import { IPerson } from '@/model/person';
import { NButton, NCard } from 'naive-ui';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PersonList',
  components: {
    NCard,
    NButton,
  },

  // Declare input properties
  props: {
    persons: { type: Array as PropType<IPerson[]>, required: true },
  },

  // Declare emitters
  emits: {
    eventDeletePerson(person: IPerson) {
      return person;
    },
  },

  // Data
  setup() {
    const description = 'Below is a list of all persons.';
    // expose to template and other options API hooks
    return {
      description,
    };
  },

  // Methods
  methods: {
    onClickEditPerson(person: IPerson) {
      console.log(person.name);
      this.$router.push({ name: 'edit-person', params: { id: person.id } });
    },
  },
});
</script>

<style scoped>
.person-list {
  margin: auto;
}
p {
  color: rgb(6, 9, 61);
}
.n-card {
  margin-bottom: 5px;
}
.card-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
