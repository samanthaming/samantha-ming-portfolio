<template>
  <div >
    <el-container>
      <el-header>
        Samantha Ming
      </el-header>
        <el-main>
          <about/>
          <portfolio/>
          <contact/>
        </el-main>
    </el-container>
  </div>
</template>

<script>
  import About from "~/components/About.vue";
  import Portfolio from "~/components/Portfolio.vue";
  import Contact from "~/components/Contact.vue";

  export default {
    components: {
      About,
      Portfolio,
      Contact,
    }
  };
</script>

<style>

</style>
