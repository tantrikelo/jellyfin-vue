<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-avatar>
          <v-img
            v-if="userImage"
            :src="userImage"
            :alt="$auth.user.name"
          ></v-img>
          <v-icon v-else dark>mdi-account</v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in menuItems"
        :key="`menuItems-${index}`"
        @click="item.action"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list-item @click="switchColodScheme">
        <v-switch>
          <template #label>Toggle dark mode</template>
        </v-switch>
      </v-list-item>
      <v-divider />
      <v-list-item
        v-for="(item, index) in bottomMenuItems"
        :key="`bottomMenuItems-${index}`"
        @click="item.action"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      bottomMenuItems: [
        {
          title: this.$t('logout'),
          action: () => {
            this.$auth.logout();
            this.$deviceProfile.clear();
            this.$user.clear();
          }
        }
      ]
    };
  },
  computed: {
    menuItems: {
      get() {
        const items = [
          {
            title: this.$t('accountSettings'),
            action: () => {
              this.$router.push('/user/account');
            }
          }
        ];

        if (this.$auth.user.Policy.IsAdministrator) {
          items.push({
            title: this.$t('serverDashboard'),
            action: () => {
              this.$router.push('/admin');
            }
          });
        }

        return items;
      }
    },
    userImage: {
      get() {
        if (this.$auth.user?.PrimaryImageTag) {
          return `${this.$axios.defaults.baseURL}/Users/${this.$auth.user.Id}/Images/Primary/?tag=${this.$auth.user.PrimaryImageTag}&maxWidth=36`;
        } else {
          return '';
        }
      }
    }
  },
  methods: {
    switchColodScheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
});
</script>
