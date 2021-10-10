<template>
  <v-container>
    <div class="transition-swing text-h3 pt-5 mb-8 text-center">
      {{ volunteerData.fullName }}
    </div>
    <v-row>
      <v-col>
        <v-text-field v-model="volunteerData.fullName" label="ФИО"></v-text-field>
        <v-text-field v-model="volunteerData.level" label="Уровень"></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="volunteerData.dateOfBirth"
              label="Дата рождения"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="volunteerData.dateOfBirth"
            :active-picker.sync="activePicker"
            :max="new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="$refs.menu.save(volunteerData.dateOfBirth)"
          ></v-date-picker>
        </v-menu>
        <v-text-field v-model="volunteerData.phone" label="Телефон"></v-text-field>
        <v-text-field v-model="volunteerData.vk" label="Страница ВК"></v-text-field>
        <v-text-field v-model="volunteerData.email" label="Адрес электронной почты"></v-text-field>
        <v-text-field v-model="volunteerData.homeAddress" label="Адрес фактического проживания"></v-text-field>
        <v-text-field v-model="volunteerData.foreignLanguages" label="Иностранные языки"></v-text-field>
        <v-text-field v-model="volunteerData.personalCar" label="Личное авто"></v-text-field>
        <v-text-field v-model="volunteerData.specialSkills" label="Специальные навыки"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="volunteerData.healthRestrictions" label="Ограничения по здоровью"></v-text-field>
        <v-text-field v-model="volunteerData.сlothingSize" label="Размер одежды"></v-text-field>
        <v-text-field v-model="volunteerData.сallsign" label="Позывной"></v-text-field>
        <v-text-field v-model="volunteerData.coursesCompleted" label="Пройденные курсы"></v-text-field>
        <v-text-field v-model="volunteerData.dateOfLastCourse" label="Дата прохождения последнего курса"></v-text-field>
        <v-text-field v-model="volunteerData.dutyRoster" label="Дежурства"></v-text-field>
        <v-combobox v-model="selectStatuses" :items="volunteerData.statuses" label="Cтатусы в ПП" multiple></v-combobox>
        <v-text-field v-model="volunteerData.workTime" label="Часы работы"></v-text-field>
        <v-select :items="volunteerData.activity" label="Активность"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

@Component
export default class Volunteer extends Vue {
  volunteerData = {
    fullName: 'Подкатилов Илья Сергеевич',
    level: 'Волонтёр от Бога',
    dateOfBirth: '1917-11-07',
    phone: '89811111111',
    vk: 'https://vk.com/feed',
    email: 'email@email.email',
    homeAddress: 'Дрезденская 20',
    foreignLanguages: 'Каракалпакский',
    personalCar: 'Ковёр-самолёт',
    specialSkills: 'Превозмогание на моральноволевых',
    healthRestrictions: 'В ассортименте',
    сlothingSize: 'Удобный',
    сallsign: 'Расстегай',
    coursesCompleted: 'Погружение в АК',
    dateOfLastCourse: '22.02.1918',
    dutyRoster: 'Всего 666, последнее - 25.10.1922',
    statuses: ['Инструктор', 'Младший инструктор', 'Волонтер'],
    workTime: '',
    activity: ['Активен', 'Резерв', 'Выбыл'],
  }

  selectStatuses: string[] = ['Инструктор']

  activePicker: string = null
  menu = false

  @Watch('menu')
  changeActivePicker(val: string) {
    val && setTimeout(() => (this.activePicker = 'YEAR'))
  }
}
</script>
