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

    <EditDialog
      v-if="selectedPerson"
      :person="selectedPerson"
      @closed="onEditDialogClosed"
    />
  </div>
</template>

<script lang="ts">
import { IEditPersonRouteParams, IPerson } from '@/model/person';
import EditDialog from './EditDialog.vue';
import { NButton, NCard } from 'naive-ui';
import { defineComponent, PropType, ref } from 'vue';
import { RouteParamsRaw } from 'vue-router';

// Test either with routing or dialog...
const USE_DIALOG = true;

export default defineComponent({
  name: 'PersonList',
  components: {
    NCard,
    NButton,
    EditDialog,
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
    const selectedPerson = ref<IPerson>();
    // expose to template and other options API hooks
    return {
      description,
      selectedPerson,
      showModal: ref(true),
    };
  },

  // Methods
  methods: {
    onClickEditPerson(person: IPerson) {
      if (!USE_DIALOG) {
        // Route to a separate "view" = a full page
        const editPersonRouteParams: IEditPersonRouteParams = { id: person.id };
        this.$router.push({
          name: 'edit-person',
          params: editPersonRouteParams as unknown as RouteParamsRaw,
        });
      } else {
        // Show a modal edit-dialog
        this.showEditPersonDialog(person);
      }
    },
    showEditPersonDialog(p: IPerson) {
      this.selectedPerson = p;
    },
    onEditDialogClosed(isUpdated: boolean) {
      console.log('onEditDialogClosed', isUpdated);
      this.selectedPerson = undefined;
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
  background-color: rgb(113, 236, 144);
}
.card-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
