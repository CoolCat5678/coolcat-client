<template>
  <v-btn
    class="hidden-sm-and-down"
    color="secondary"
    @click="toggleTheme"
  >
    Toggle Theme
  </v-btn>

  <v-btn
    class="hidden-md-and-up"
    color="secondary"
    icon
    @click="toggleTheme"
  >
    <v-icon>mdi-lightbulb-outline</v-icon>
  </v-btn>
</template>

<script
  lang="ts"
  setup
>
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
</script>
