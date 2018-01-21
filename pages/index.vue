<template>
  <div >
    <el-container>
      <el-header>
        Samantha Ming
      </el-header>
        <el-main>
          <about/>
        </el-main>
    </el-container>
  </div>
</template>

<script>
  import About from "~/components/About.vue";

  export default {
    components: {
      About,
    }
  };
</script>

<style>

</style>
