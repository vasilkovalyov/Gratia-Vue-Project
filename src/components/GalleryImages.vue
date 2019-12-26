<template>
  	<div class="gallery-images">
          <div class="row">
              <div class="col" v-for="(item,key) in arrayImages" :key="key">
                  <div class="image-holder">
                      <img :src="('images/')+item" alt="img gallery">
                  </div>
              </div>
          </div>
	</div>
</template>
<script>


export default {
    props: ["arrayImages"],
    data() {
        return {
            
        }
    }
}

</script>