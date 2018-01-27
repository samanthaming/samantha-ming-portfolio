<template>
  <div id="about">
    <el-row justify="center">
      <el-col :span="20" :offset="2" :sm="{span: 18, offset: 3}" :md="{span: 14, offset: 5}">
        <div class="about-content animated slideInDown">
          <h1 class="about-title">Hi, I'm <span>Samantha</span>, a Front End Web Developer based in Vancouver</h1>
          <h2>I create awesome web sites and web applications</h2>
        </div>
        <div class="scroll-down">
          <a href="#portfolio" class="hvr-icon-hang">
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
  #about {
    height: 60vh;
    display: flex;
    align-items: center;
  }
  .about-title {
    font-size: 56px;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 991px) {
      font-size: 46px;
    }
    @media (max-width: 767px) {
      font-size: 40px;
    }
  }
  span {
    border-bottom: 4px solid #FFCD26;
    background-color: #FFCD26;
    padding: 0 8px;
  }
  h2 {
    text-align: center;
    font-weight: normal;
    margin: 0;
    font-size: 20px;
  }
  .scroll-down {
    text-align: center;
    font-size: 30px;
    margin-top: 80px;

    .hvr-icon-hang {
      display: inline; //override
    }

    a {
      color: #444;
      transition: all 0.5s ease;

      &:hover {
        color: white;

      }
    }
  }
</style>
