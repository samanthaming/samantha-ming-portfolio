<template>
  <div id="portfolio-dialog">
    <h2 class="portfolio-title">{{ portfolio.title }}</h2>
    <p class="portfolio-tagline">{{ portfolio.tagline }}</p>

    <div class="portfolio-image-wrap">
      <img :src="`images/${portfolio.cover}`" :alt="portfolio.title">
    </div>

    <div class="portfolio-description-wrap">
      <p class="portfolio-description"> {{ portfolio.description }}</p>
    </div>

    <div class="portfolio-link-wrap">
      <a v-if="portfolio.site !== false" :href="portfolio.site" target="_blank" rel="noopener" :title="`Visit ${portfolio.title} website`">
        <el-button type="primary">
          <i class="fa fa-globe" aria-hidden="true"></i> Website
        </el-button>
      </a>
      <a :href="portfolio.source" target="_blank" rel="noopener" :title="`View ${portfolio.title} source code`">
        <el-button type="primary">
          <i class="fa fa-code" aria-hidden="true"></i> Source Code
        </el-button>
      </a>
    </div>

    <div class="portfolio-technologies-wrap">
      <h5 class="portfolio-technologies-title">Technologies and Tools:</h5>
      <ul class="portfolio-technologies">
        <li v-for="(tech, index) in portfolio.technologies" :key="index">
          <el-tooltip :content="tech.name" placement="bottom">
            <img :src="`images/icons/${tech.image}`" :alt="tech.name">
          </el-tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['portfolio'],
  };
</script>

<style lang="scss" scoped>
  #portfolio-dialog {
    text-align: center;
  }

  .portfolio-title {
    font-size: 56px;
    color: #222;
    text-transform: uppercase;
    margin-bottom: 10px;
    line-height: 56px;
  }

  .portfolio-tagline {
    font-size: 18px;
    font-weight: normal;
  }

  .portfolio-image-wrap {
    margin-top: 30px;
  }

  .portfolio-description-wrap {
    text-align: center;
    margin: 20px 0 25px;
  }

  .portfolio-description {
    font-size: 18px;
    max-width: 500px;
    margin: 0 auto;
    color: #444;
  }

  .portfolio-link-wrap {
    margin-top: 30px;
    i {
      margin-right: 3px;
    }
    a {
      margin-right: 5px;
      margin-left: 5px;
    }
  }

  .portfolio-technologies-wrap {
    margin-top: 40px;
  }

  .portfolio-technologies {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin-top: 0;
    li {
      list-style: none;
      padding: 10px 15px;
    }
    img {
      height: 50px;
    }
  }

  .portfolio-technologies-title {
    font-size: 14px;
    margin-bottom: 5px;
    color: #555;
  }
</style>
