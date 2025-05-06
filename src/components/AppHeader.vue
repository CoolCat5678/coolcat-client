<template>
  <v-app-bar
    app
    class="backdrop-blur-md bg-white/90 dark:bg-neutral-900/90"
    height="50"
    scroll-behavior="elevate"
    scroll-threshold="0"
  >
    <v-container class="!px-4">
      <v-row
        align="center"
        no-gutters
      >
        <!-- 左側：Logo -->
        <v-col
          class="d-flex align-center"
          cols="6"
        >
          <!-- 桌機版：文字 Logo -->
          <v-btn
            to="/"
            variant="plain"
            color="primary"
            class="text-lg font-semibold tracking-wide px-0 hidden-sm-and-down"
          >
            CoolCat
            <span class="ml-2">Cool Cool Cat</span>
          </v-btn>

          <!-- 手機版：icon Logo -->
          <v-btn
            to="/"
            variant="plain"
            color="primary"
            icon
            class="hidden-md-and-up"
          >
            <v-icon>mdi-cat</v-icon>
          </v-btn>
        </v-col>

        <!-- 右側：主題切換 -->
        <v-col
          class="d-flex justify-end align-center"
          cols="6"
        >
          <toggle-theme-btn />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
