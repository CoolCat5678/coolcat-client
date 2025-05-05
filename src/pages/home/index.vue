<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12">
        <v-img
          class="mb-4"
          height="150"
          src="@/assets/coolcat.png"
        />
        <div class="mb-8 text-center">
          <div class="text-h5 font-weight-bold">CoolCat</div>
        </div>
      </v-col>

      <v-col
        v-for="n in 20"
        :key="n"
        cols="12"
        md="6"
      >
        <v-card
          class="py-4"
          color="primary"
          prepend-icon="mdi-account"
          rounded="lg"
          subtitle="Navigate to the user list page."
          :title="'Go to User'"
          :to="'/users'"
          variant="tonal"
        />
      </v-col>

    </v-row>
  </v-container>
</template>