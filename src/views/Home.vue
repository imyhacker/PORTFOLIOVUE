<template>
  <div>
    <div class="home mt-5 fontt">
      <div class="jumbotron text-center py-5">
        <img src="../assets/pp.jpeg" class="rounded-circle img-thumbnail shadow-lg" width="200" />
        <h1 class="display-5 mt-3 fw-bolder text-light">Ari Farhan</h1>
        <p class="lead fst-italic">
          "Just ordinary people who like technology"
        </p>
        <p class="text-white fw-bolder font-monospace">
          Web Developer | Content Creator
        </p>

        <a class="btn btn-outline-danger btn-sm cus-btn text-white" href="#" role="button">Knew Me More </a>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#6ea8fe"
        fill-opacity="1"
        d="M0,96L48,133.3C96,171,192,245,288,245.3C384,245,480,171,576,165.3C672,160,768,224,864,245.3C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
.jumbotron {
  padding-top: 2rem;
  background-color: #6ea8fe;
}
.cus-btn {
  border-radius: 10px 10px 10px 0.1px;
}
.fontt {
  font-family: Sora;
}
</style>
