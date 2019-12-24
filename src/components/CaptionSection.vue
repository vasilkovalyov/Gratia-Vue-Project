<template>
  <div class="caption-section">
      <h1>{{ captionSection }}</h1>
      <p> {{ subcaptionText }} </p>
      <div class="image-holder">
          <img src='/images/text-img-01.png' alt='gratia'>
      </div>
  </div>
</template>

<script>

export default {
    props: ['captionSection', 'subcaptionText'],
    data() {
        return {

        }
    }
}

</script>
