<template>
  <div>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
        <li data-target="#myCarousel" data-slide-to="6"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="../../public/img/image1.jpg" alt="Los Angeles">
        </div>
        <div class="item">
          <img src="../../public/img/image2.jpg" alt="Chicago">
        </div>
        <div class="item">
          <img src="../../public/img/image3.jpg" alt="New York">
        </div>
        <div class="item">
          <img src="../../public/img/image4.jpg" alt="New York">
        </div>
        <div class="item">
          <img src="../../public/img/image6.jpg" alt="New York">
        </div>
        <div class="item">
          <img src="../../public/img/image7.jpg" alt="New York">
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
 // name: 'Background'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-inner .item img{
  width:100%;
  height: 535px;
}
</style>
