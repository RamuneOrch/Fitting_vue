<template>
  <div class="vuegram-post">
    <div class="header level">
        <div class="level-left">
          <figure class="image is-32x32">
            <img :src="posts.userImage" />
          </figure>
          <span class="username">{{posts.username}}</span>
        </div>
    </div>
    <div class="image-container"
      :class="posts.filter"
      :style="{ backgroundImage: 'url(' + posts.postImage + ')' }"
      @dblclick="like"
    >
    </div>
    <div class="content">
      <div class="heart">
        <i class="far fa-heart fa-lg"
          :class="{'fas' : this.posts.hasBeenLiked}"
          @click="like"
        ></i>
      </div>
      <p class="likes">{{posts.likes}} likes</p>
      <p class="caption"><span>{{posts.username}}</span> {{posts.caption}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuegramPost",
  props: {
    posts: Object
  },
  methods: {
    like(){
      this.posts.hasBeenLiked
        ? this.posts.likes-- : this.posts.likes++;
      this.posts.hasBeenLiked = !this.posts.hasBeenLiked;
    }
  }
};
</script>

<style lang="scss" src="../styles/vuegram-post.scss">

</style>