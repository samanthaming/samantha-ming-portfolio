<template>
  <div id="contact">
    <el-row justify="center">
      <el-col :span="24">
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
        <div class="back-to-top">
          <a href="#app-header" class="hvr-icon-bob">
          </a>
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
  $anchor-hover: #FFCD26;

  #contact {
    background: #fff;
    padding: 90px 0 0;
  }

  .title {
    font-size: 56px;
    text-align: center;
    margin-top: 0;
    padding-left: 15px;
    padding-right: 15px;

    @media (max-width: 991px) {
      font-size: 46px;
    }
    @media (max-width: 767px) {
      font-size: 40px;
    }
  }

  .text {
    font-size: 50px;
    text-align: center;
    @media (max-width: 991px) {
      font-size: 40px;
    }
    @media (max-width: 767px) {
      font-size: 30px;
    }

    a {
      color: #333;
      text-decoration: none;
      padding-bottom: 3px;
      border-bottom: 3px solid #333;
      transition: all 0.4s ease;

      &:hover {
        color: $anchor-hover;
        border-color: $anchor-hover;
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
      transition: all 0.3s ease;

      &:hover {
        color: $anchor-hover;
      }
    }
  }

  .back-to-top {
    text-align: center;
    font-size: 30px;
    margin-top: 60px;

    .hvr-icon-bob {
      display: inline; //override
    }

    a {
      color: #eee;
      transition: all 0.5s ease;

      &:hover {
        color: #999;

      }
    }
  }
</style>
