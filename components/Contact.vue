<template>
  <div id="contact">
    <el-row justify="center">
      <el-col :span="24" :md="{span: 14, offset: 5}">
        <div class="grid-content"></div>
        <h3 class="title">Don't be shy, say hello!</h3>
        <div class="text">
          Find me on
          <span v-for="(social,index) in socials" :key="index">
            <a :href="social.url" target="_blank" rel="noopener">{{ social.name }}</a>
            <span v-if="index !== socials.length - 1">, </span>
          </span>
        </div>
        <div class="icons">
          <div v-for="(social,index) in socials" :key="index">
            <a :href="social.url" target="_blank" rel="noopener">
              <i :class="`fa fa-${social.name}-square`"></i>
            </a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        socials: [{
            "name": "twitter",
            "url": "https://twitter.com/samantha_ming",
          },
          {
            "name": "github",
            "url": "https://github.com/samanthaming",
          },
          {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/samanthaming/",
          },
        ]
      };
    },
  };
</script>

<style lang="scss" scoped>
  .title {
    font-size: 56px;
    text-align: center;
  }

  .text {
    font-size: 50px;
    text-align: center;

    a {
      color: #333;
      text-decoration: none;
      padding-bottom: 3px;
      border-bottom: 3px solid #333;

      &:hover {
        color: tomato;
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    a {
      margin-right: 10px;
      margin-left: 10px;
      font-size: 50px;
      color: #333;

      &:hover {
        color: tomato;
      }
    }
  }
</style>
