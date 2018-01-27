<template>
  <div id="footer">
    <div class="footer-info">
      <span>
        &copy; Samantha Ming {{ new Date().getFullYear() }}.
      </span>
      <span>
        Built &amp; Designed by
        <a>
          Samantha Ming
        </a>
        <i class="fa fa-star"></i>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #footer {
    padding-top: 50px;
    padding-bottom: 15px;
  }
  .footer-info {
    text-align: center;
    font-size: 12px;

    .fa {
      color: #FFCD26;
    }
  }
</style>
