<template>
  <v-data-table :headers="headers" :items="volunteers" item-key="name" class="elevation-1" :search="search">
    <template v-slot:top>
      <v-text-field v-model="search" label="Поиск" class="mx-4"></v-text-field>
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
      level: 'Первопомощевик от Бога',
      dateOfBirth: '22.02.1918',
      phone: '89811111111',
      vk: 'https://vk.com/feed',
      email: 'email@email.email',
      homeAddress: 'Миллионная 11',
      languages: 'Каракалпакский, Русский, Английский',
      car: 'Конь и маленькая тележка',
      specialSkills: 'Швец жнец на дуде игрец',
      healthRestrictions: 'Нет',
      clothingSize: '50',
      callsign: 'Каракалпак',
      completedCourses: 'Все',
      lastCourseDate: 'История КПСС',
      totalShifts: '666',
      lastShift: '07.11.1917',
      statuses: 'Волонтер, Инструктор по борьбе с большевитской заразой',
      workTime: 'Круглосуточно',
      activity: 'Всегда активен',
    },
  ]

  headers = [
    {
      text: 'ФИО',
      value: 'fullName',
    },
    {
      text: 'Уровень',
      value: 'level',
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
      text: 'Иностранные языки',
      value: 'languages',
    },
    {
      text: 'Личное авто',
      value: 'car',
    },
    {
      text: 'Специальные навыки',
      value: 'specialSkills',
    },
    {
      text: 'Ограничения по здоровью',
      value: 'healthRestrictions',
    },
    {
      text: 'Размер одежды',
      value: 'clothingSize',
    },
    {
      text: 'Позывной',
      value: 'callsign',
    },
    {
      text: 'Пройденные курсы',
      value: 'completedCourses ',
    },
    {
      text: 'Последнее прохождение курса',
      value: 'lastCourseDate',
    },
    {
      text: 'Всего дежурств',
      value: 'totalShifts',
    },
    {
      text: 'Последнее дежурство',
      value: 'lastShift',
    },
    {
      text: 'статусы в ПП',
      value: 'statuses',
      // инструктор/МИ/волонтер
    },
    {
      text: 'часы работы',
      value: 'workTime',
    },
    {
      text: 'статус активности',
      value: 'activity',
      // активен/резерв/выбыл.
    },
  ]
}
</script>
