import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  name: 'linkShare',
  description: 'Share your currently opened tab, with this simple extension.',
  version: '0.0.1',
  manifest_version: 3,
  icons: {
    '16': 'img/logo-16.png',
    '32': 'img/logo-34.png',
    '48': 'img/logo-48.png',
    '128': 'img/logo-128.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'img/logo-48.png',
    default_title: 'Tab sharing.'
  },
  options_page: 'options.html',
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      js: ['src/content/index.ts'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['img/logo-16.png', 'img/logo-34.png', 'img/logo-48.png', 'img/logo-128.png'],
      matches: [],
    },
  ],
  oauth2: {
    'client_id': '244255183352-bvs2r3uuasbhdhgh5d67p1orkg045vtg.apps.googleusercontent.com',
    'scopes': ['https://www.googleapis.com/auth/userinfo.email']
  },
  permissions: ['storage', 'tabs', 'identity'],
  host_permissions: ['https://127.0.0.1/*'],
  key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsSF0ya5L0eJO2zr6aVxX5OAT46vxPX0IU0C+2pIetI8tSViB4EbLetCCDtbAE+2uL6DR0wfpd0inlTbzTFSMRSsZuOUsRyYiygFHCohZIW5MhBGMWYJqeaAk8fKG/E6uTpet3oaK85yf13GOASGp+tHWCyaXbbPQJMN5zsNtFR11824P9K+lhLnQ8UyXrJQSrpugEjhbU3ZOMeJTmYqDDkW4pl15YEEMdGHW1oLpCHymp9Sd5C1fm0Bw2WuSURypR9gnkLF6CbSv8A5rj56ukwDlxbzwoSV9a2g+QlI+hcwwc5a3CbgBVMo3/lJvhj6+6gtL9WjYXttbk8I1KToKAwIDAQAB'
})
