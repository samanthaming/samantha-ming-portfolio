<template>
  <div id="portfolio">
    <el-row :gutter="10">

      <el-col :span="24" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" v-for="(portfolio, index) in portfolios" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <a @click.prevent="portfolio.dialog = true" class="portfolio-link">
            <div class="portfolio-hover">
              <i class="fa fa-plus-square" aria-hidden="true"></i>
            </div>
            <img :src="`images/${portfolio.cover}`" class="image">
          </a>
          <div class="el-card-content" style="padding: 14px;">
            <h3 class="portfolio-title">{{ portfolio.title }}</h3>
            <p class="portfolio-subtitle">Web Application</p>
            <div class="bottom clearfix">
              <el-dialog :visible.sync="portfolio.dialog" fullscreen close-on-press-escape center>
                <div slot="title" class="dialog-title">Samantha Ming</div>
                <PortfolioDialog :portfolio="portfolio"></PortfolioDialog>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="portfolio.dialog = false">Close</el-button>
                </div>
              </el-dialog>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import PortfolioDialog from './PortfolioDialog.vue';
  import portfolios from '~/data/index.js';

  export default {
    components: {
      PortfolioDialog
    },
    data() {
      return {
        portfolios,
      };
    }
  };
</script>

<style lang="scss" scoped>
  .el-col {
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
  }

  .el-card {
    width: 300px;
    border: none;
  }

  #portfolio .el-dialog {
    background: #D0ECE6 !important;
  }

  .el-dialog .dialog-footer button {
    background: transparent;
    border-color: #888;
  }

  .el-dialog .dialog-title {
    font-size: 16px;
    color: #999;
  }

  .portfolio-title {
    text-align: center;
    margin: 0;
  }

  .portfolio-subtitle {
    color: #999;
    text-align: center;
    padding: 0;
    margin: 5px 0 0;
    font-style: italic;
    font-weight: bold;
  }

  .portfolio-link {
    display: flex;
    position: relative;
    display: center;
    align-self: center;
    align-items: center;
    justify-content: center;
    background: grey;
    height: 300px;
  }

  .portfolio-hover i {
    display: none;
  }

  .portfolio-link:hover {
    cursor: pointer;
    .portfolio-hover {
      position: absolute;
      width: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 100;
    }
    i {
      display: block;
      color: #333;
      font-size: 60px;
    }
    img {
      background-color: #000;
      opacity: 0.5;
      transition: all ease .3s;
      -webkit-transition: all ease .3s;
      -moz-transition: all ease .3s;
    }
  }
</style>
