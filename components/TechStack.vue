<template>
  <div id="tech-stack">
    <el-row>
      <div>
        <h3 class="section-title">Technologies &amp; Tools</h3>
      </div>
      <el-col :span="24" :md="{span: 20, offset: 2}">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="(stack, index) in stacks" :key="index" :id="stack.id">
            <div class="carousel-card">
              <h4 class="title">
                {{ stack.title }}
              </h4>
              <ul class="tech-list">
                <li v-for="(tech, techIndex) in stack.tech" :key="techIndex">
                  <div class="image-wrap">
                    <img :src="`images/icons/${tech.image}`" :alt="tech.name" class="image">
                  </div>
                  <p class="tech-name">{{ tech.name }}</p>
                </li>
              </ul>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <div class="scroll-down">
      <a href="#contact" class="hvr-icon-hang">
      </a>
    </div>
  </div>
</template>

<script>
  import stacks from '~/data/stacks.js';

  export default {
    data() {
      return {
        stacks,
      };
    },
  };
</script>

<style lang="scss" scoped>
  #tech-stack {
    background: #002D55;
    padding: 20px 0 10px;
  }

  .section-title {
    text-align: center;
    color: white;
    font-weight: normal;
    font-size: 56px;
    @media (max-width: 991px) {
      font-size: 46px;
    }
    @media (max-width: 767px) {
      font-size: 40px;
    }
  }

  .carousel-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .el-carousel__item {
    @media (max-width: 767px) {
      width: 75%;
      left: -13%;
    }
  }

  .el-carousel__item .title {
    text-align: center;
    color: white;
    font-weight: normal;
    font-size: 18px;
    text-transform: uppercase;
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .el-carousel__item .tech-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 8px 10px;
    background-color: white;
    list-style: none;
    width: 100%;
    min-height: 100px;
    text-align: center;
    @media (max-width: 767px) {
      margin-top: 10px;
      padding-bottom: 5px;
    }
    li {
      padding: 0 15px 15px;
      @media (max-width: 767px) {
        padding: 0 12px 20px;
      }
    }
    .image-wrap {
      height: 40px;
    }
    .image {
      max-height: 100%;
    }
    .tech-name {
      font-size: 10px;
      margin: 0;
      padding: 5px 0 0;
      text-align: center;
      color: #888;
      font-weight: bold;
    }
  }

  .el-carousel__item#experience {
    background-color: #62C2D0;
  }

  .el-carousel__item#professionalexperience {
    background-color: #FF696D;
  }

  .el-carousel__item#education {
    background-color: #C472B3;
  }

  .scroll-down {
    text-align: center;
    font-size: 30px;
    margin-top: 80px;

    .hvr-icon-hang {
      display: inline; //override
    }

    a {
      color: #19558a;
      transition: all 0.5s ease;

      &:hover {
        color: #e5ecf2;

      }
    }
  }
</style>
