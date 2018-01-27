<template>
  <div id="portfolio">
    <el-row :gutter="10">

      <el-col :span="24" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 12}" v-for="(portfolio, index) in portfolios" :key="index" class="portfolio-col">
        <el-card :body-style="{ padding: '0px' }">
          <div class="portfolio-frame" @click="portfolio.dialog = true">
            <div class="portfolio-type animated slideInUp">{{ portfolio.type }}</div>

            <div class="portfolio-link animated slideInUp">
              <div class="portfolio-hover">
                <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                <div class="portfolio-hover-text">{{ portfolio.title }}</div>
              </div>
              <img :src="`images/${portfolio.cover}`" class="image">
            </div>
          </div>

          <div class="el-card-content">
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
        show: true
      };
    }
  };
</script>

<style lang="scss" scoped>
  #portfolio {
    padding-top: 30px;
    padding-bottom: 80px;
  }

  .el-row {
    max-width: 1150px;
    margin: 0 auto !important;
    .el-col:first-of-type .portfolio-frame {
      background-color: #8cc0df;
    }
    .el-col:nth-of-type(2) .portfolio-frame {
      background-color: #f680a3;
    }
    .el-col:nth-of-type(3) .portfolio-frame {
      background-color: #FFCD26;
    }
    .el-col:nth-of-type(4) .portfolio-frame {
      background-color: #00C7C2;
    }
  }

  .el-col {
    margin-bottom: 75px;
    display: flex;
    justify-content: center;
  }

  .portfolio-frame {
    position: relative;
    background: #FFA9A9;
  }

  .portfolio-type {
    color: #f5f5f5;
    position: absolute;
    top: 12px;
    left: 12px;
  }

  .el-card {
    border: none;
    border-radius: 0;
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
    align-self: center;
    align-items: center;
    justify-content: center;
    height: 300px;
    padding: 50px 100px;
  }

  .portfolio-hover i,
  .portfolio-hover-text {
    display: none;
  }

  .portfolio-hover-text {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
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
    .portfolio-hover-text {
      display: block;
    }
    img {
      background-color: #000;
      opacity: 0.3;
      transition: all ease .5s;
      -webkit-transition: all ease .5s;
      -moz-transition: all ease .5s;
    }
  }
</style>
