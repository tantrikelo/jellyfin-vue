<template>
  <v-container>
    <v-row>
      <v-col lg="4" md="6" sm="12">
        <v-hover v-slot:default="{ hover }">
          <v-card v-for="session in sessions" :key="session.Id">
            <v-img
              class="white--text card-background"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    :src="
                      require(`~/assets/images/devices/${getDeviceIcon(
                        session
                      )}`)
                    "
                    :alt="session.Client"
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ session.UserName }} on
                    {{ session.DeviceName }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ session.Client }} ({{ session.ApplicationVersion }})
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    {{
                      $dateFns.formatDistanceToNow(
                        $dateFns.parseISO(session.LastActivityDate || ''),
                        {
                          addSuffix: true
                        }
                      )
                    }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <v-tooltip v-if="session.NowPlayingItem" left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-information</v-icon>
                    </v-btn>
                  </template>
                  <ul class="media-info-list ma-0 pa-0">
                    <li><b>Remuxing (60 fps)</b></li>
                    <li><b>Bitrate:</b> 32123 Mbps</li>
                    <li><b>Container:</b> Webm</li>
                    <li><b>Video codec:</b> AVC</li>
                    <li><b>Audio codec:</b> DTS-HDMA</li>
                  </ul>
                </v-tooltip>
              </v-list-item>
              <v-row
                v-if="
                  session.ServerId &&
                  session.NowPlayingItem &&
                  session.SupportsRemoteControl
                "
                justify="center"
                class="mt-8"
              >
                <v-btn
                  v-for="(icon, index) in icons"
                  :key="index"
                  :class="{
                    'show-btns': $vuetify.breakpoint.mobile || hover
                  }"
                  color="transparent"
                  icon
                >
                  <v-icon
                    :class="{
                      'show-btns': $vuetify.breakpoint.mobile || hover
                    }"
                    color="transparent"
                  >
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-row>
            </v-img>
            <v-progress-linear
              color="primary accent-4"
              value="50"
              buffer-value="70"
            />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { SessionInfo } from '~/api';

export default Vue.extend({
  data() {
    return {
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      sessions: [] as SessionInfo[]
    };
  },
  async created() {
    this.$page.setTitle(this.$t('serverDashboard') as string);

    const response = await this.$sessionApi.getSessions();

    this.sessions = response.data;
  },
  methods: {
    getDeviceIcon(device: SessionInfo) {
      switch (device.Client) {
        case 'Samsung Smart TV':
          return 'samsung.svg';
        case 'Xbox One':
          return 'xbox.svg';
        case 'Sony PS4':
          return 'playstation.svg';
        case 'Kodi':
          return 'kodi.svg';
        case 'Jellyfin Android':
        case 'Android TV':
          return 'android.svg';
        case 'Jellyfin Web':
          switch (device.DeviceName) {
            case 'Opera':
            case 'Opera TV':
            case 'Opera Android':
              return 'opera.svg';
            case 'Chrome':
            case 'Chrome Android':
              return 'chrome.svg';
            case 'Firefox':
            case 'Firefox Android':
              return 'firefox.svg';
            case 'Safari':
            case 'Safari iPad':
            case 'Safari iPhone':
              return 'safari.svg';
            case 'Edge Chromium':
            case 'Edge Chromium Android':
            case 'Edge Chromium iPad':
            case 'Edge Chromium iPhone':
              return 'edgechromium.svg';
            case 'Edge':
              return 'edge.svg';
            case 'Internet Explorer':
              return 'msie.svg';
            default:
              return 'html5.svg';
          }
        default:
          return 'other.svg';
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.card-background {
  &::before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.65);
  }
}
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.media-info-list {
  list-style: none;
}
</style>
