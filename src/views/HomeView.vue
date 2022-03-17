<template>
  <div class="home">
    <h1>The Awesome Person Handler</h1>
    <n-button @click="onClickAddPerson()" type="primary"
      >Add New Person</n-button
    >
    <n-card>
      <PersonList :persons="persons"></PersonList>
    </n-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NButton, NCard } from 'naive-ui';
import PersonList from '../components/PersonList.vue';
import { IPerson } from '@/model/person';
import { getAllPersons } from '@/data/person-api';

export default defineComponent({
  name: 'HomeView',
  components: {
    NButton,
    NCard,
    PersonList,
    // HelloWorld,
  },
  setup() {
    const persons = ref<IPerson[]>([]);
    return {
      persons,
    };
    //
  },
  mounted() {
    this.persons = getAllPersons();
  },
  methods: {
    onClickAddPerson() {
      this.$router.push({ path: '/add-person' });
      // this.$router.push({ name: 'add-person', params: { id: '1' } });
    },
  },
});
</script>

<style scoped>
.edit-name {
  max-width: 15rem;
}
.n-card {
  margin: 2rem auto 1rem auto;
  width: fit-content;
  min-width: 30rem;
  background-color: rgb(190, 224, 255);
}
</style>
