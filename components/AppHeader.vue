<template>
  <div id="app-header">
    <ul class="header-list animated slideInDown">
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#main">Samantha Ming</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .header-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    padding: 20px 20px 20px;
  }

  .header-list a {
    text-decoration: none;
    color: #2b2b2b;
    font-weight: bold;
    font-size: 20px;

    &:hover {
      color: #FF92B2;//#FFF7F3;
    }
  }
</style>
