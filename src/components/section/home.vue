<template>
  <div class="home">
    <div class="row">
      <div
        class="col-md-2"
        id="responsive-tablet"
        style="padding-top: 0;padding-right: 0;"
      >
        {{ $t("bahasa.test") }}
        <i class="jam jam-language"></i>

        <button @click="changeLanguage()">
          <i class="jam jam-language"></i>
          <p>{{ getLanguage() }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator"

export default class Home extends Vue {
  public locale = this.$i18n.locale;

  getLanguage() {
    let lang = localStorage.getItem("locale");
    if (lang == null) {
      lang = 'id';
    }
    this.$validator.localize('' + lang + '');
    if (lang == "en") {
      this.$i18n.locale = "en"
      return "English"
    } else {
      this.$i18n.locale = "id"
      return "Bahasa Indonesia"
    }
  }

  changeLanguage() {
    let lang = localStorage.getItem("locale")
    if (lang == "en")
      lang = "id"
    else
      lang = "en"
    localStorage.setItem("locale", lang)
    this.$validator.localize(lang);
    this.$i18n.locale = lang
    // location.reload()
  }
}
</script>
