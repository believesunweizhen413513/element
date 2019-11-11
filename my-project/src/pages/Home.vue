<template>
  <div>
    <Header />
    <Search />
    <Grild />
    <ImageTabbar />
    <Divider />
    <Tabbarr />
    <Card />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Search from "../components/Search.vue";
import Grild from "../components/Grild";
import ImageTabbar from "../components/ImageTabbar";
import Divider from "../components/Divider";
import Tabbarr from "../components/Tabbarr";
import Card from "../components/Card";
export default {
  components: {
    Header,
    Search,
    Grild,
    ImageTabbar,
    Divider,
    Tabbarr,
    Card
  }
};
</script>