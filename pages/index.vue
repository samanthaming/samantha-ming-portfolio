<template>
  <div >
    <el-container>
      <el-header>
        Samantha Ming
      </el-header>
        <el-main>
          <about/>
          <portfolio/>
        </el-main>
    </el-container>
  </div>
</template>

<script>
  import About from "~/components/About.vue";
  import Portfolio from "~/components/Portfolio.vue";

  export default {
    components: {
      About,
      Portfolio,
    }
  };
</script>

<style>

</style>
