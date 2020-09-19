<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <v-card tile class="mt-16 pa-4">
          <v-row no-gutters class="mb-4">
            <v-col cols="3">
              <v-avatar class="mt-n16" left size="164">
                <v-img
                  v-if="userImage"
                  :src="userImage"
                  :alt="$auth.user.Name"
                />
                <v-icon v-else dark>mdi-account</v-icon>
              </v-avatar>
            </v-col>
            <v-col cols="9">
              <v-card-title class="mt-1">{{ $auth.user.Name }}</v-card-title>
              <v-card-subtitle>{{ role }}</v-card-subtitle>
            </v-col>
          </v-row>
          <v-divider class="mb-3"></v-divider>
          <v-row>
            <v-col cols="12" class="px-4">
              <h3>Password</h3>
            </v-col>
          </v-row>
          <v-row class="mb-4">
            <v-col cols="12" class="px-4">
              <form>
                <v-text-field
                  outlined
                  :label="$t('currentPassword')"
                  type="password"
                />
                <v-text-field
                  outlined
                  :label="$t('newPassword')"
                  type="password"
                />
                <v-text-field
                  outlined
                  :label="$t('confirmPassword')"
                  type="password"
                />
                <v-btn block large color="primary" type="submit" class="mb-3">
                  {{ $t('save') }}
                </v-btn>
                <v-btn block large type="submit">
                  {{ $t('resetPassword') }}
                </v-btn>
              </form>
            </v-col>
          </v-row>
          <v-divider class="mb-3"></v-divider>
          <v-row>
            <v-col cols="12" class="px-4">
              <h3>Easy login</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="px-4">
              <form>
                <v-text-field outlined :label="$t('pinCode')" />
                <v-checkbox :label="$t('enableEasyLogin')" class="mb-4" />
                <v-btn block large color="primary" type="submit">
                  {{ $t('save') }}
                </v-btn>
              </form>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    role: {
      get() {
        if (this.$auth.user.Policy.IsAdministrator) {
          return this.$t('administrator');
        } else {
          return this.$t('user');
        }
      }
    },
    userImage: {
      get() {
        if (this.$auth.user?.PrimaryImageTag) {
          return `${this.$axios.defaults.baseURL}/Users/${this.$auth.user.Id}/Images/Primary/?tag=${this.$auth.user.PrimaryImageTag}&maxWidth=164`;
        } else {
          return '';
        }
      }
    }
  },
  created() {
    this.$page.setTitle(this.$t('accountSettings') as string);
  }
});
</script>
