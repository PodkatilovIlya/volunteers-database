<template>
  <v-data-table :headers="headers" :items="volunteers" item-key="name" class="elevation-1" :search="search">
    <template v-slot:top>
      <v-text-field v-model="search" label="Поиск" class="mx-4"></v-text-field>
    </template>
    <template v-slot:item.fullName="{ item }">
      <router-link to="Volunteer"> {{ item.fullName }} </router-link>
    </template>
    <template v-slot:item.phone="{ item }">
      <a :href="`tel:${item.phone}`">
        {{ item.phone }}
      </a>
    </template>
    <template v-slot:item.email="{ item }">
      <a :href="`mailto:${item.email}`">
        {{ item.email }}
      </a>
    </template>
    <template v-slot:item.vk="{ item }">
      <a :href="item.vk" target="_blank">
        {{ item.vk }}
      </a>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Home extends Vue {
  search = ''
  calories = ''
  volunteers = [
    {
      fullName: 'Волонтеров Волонтер Волонтёрович',
      dateOfBirth: '22.02.1918',
      phone: '89811111111',
      vk: 'https://vk.com/feed',
      email: 'email@email.email',
      homeAddress: 'Миллионная 11',
      callsign: 'Каракалпак',
      activity: 'Активен',
    },
    {
      fullName: 'Подкатилов Илья Сергеевич',
      dateOfBirth: '01.03.1994',
      phone: '89811111111',
      vk: 'https://vk.com/feed',
      email: 'email@email.email',
      homeAddress: 'Дрезденская 20 ',
      callsign: 'Север',
      activity: 'Активен',
    },
  ]

  headers = [
    {
      text: 'ФИО',
      value: 'fullName',
    },
    {
      text: 'Дата рождения',
      value: 'dateOfBirth',
    },
    {
      text: 'Номер телефона',
      value: 'phone',
    },
    {
      text: 'Страница ВК',
      value: 'vk',
    },
    {
      text: 'Электронная почта',
      value: 'email',
    },
    {
      text: 'Адрес фактического проживания',
      value: 'homeAddress',
    },
    {
      text: 'Позывной',
      value: 'callsign',
    },
    {
      text: 'Статус активности',
      value: 'activity',
      // активен/резерв/выбыл.
    },
  ]
}
</script>
