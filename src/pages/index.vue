<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12">
        <v-img
          class="mb-4"
          height="150"
          src="@/assets/logo.png"
        />
        <div class="mb-8 text-center">
          <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
          <h1 class="text-h2 font-weight-bold">Vuetify</h1>
        </div>
        <toggle-theme-btn />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card
          class="py-4"
          color="primary"
          prepend-icon="mdi-account"
          rounded="lg"
          subtitle="Navigate to the user list page."
          title="Go to Users"
          to="/users"
          variant="tonal"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
