<template>
  <div >
    <el-container>
      <announcement/>
      <el-header>
        <app-header/>
      </el-header>
      <el-main id="main">
        <about/>
        <portfolio/>
        <tech-stack/>
        <contact/>
      </el-main>
        <app-footer/>
    </el-container>
  </div>
</template>

<script>
  import Announcement from "~/components/Announcement.vue";
  import About from "~/components/About.vue";
  import Portfolio from "~/components/Portfolio.vue";
  import Contact from "~/components/Contact.vue";
  import AppFooter from "~/components/AppFooter.vue";
  import AppHeader from "~/components/AppHeader.vue";
  import TechStack from "~/components/TechStack.vue";

  export default {
    components: {
      Announcement,
      About,
      Portfolio,
      Contact,
      AppFooter,
      AppHeader,
      TechStack,
    }
  };
</script>
