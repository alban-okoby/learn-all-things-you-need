<script>
import Child from "./components/child.vue";
import BlogPost from "./components/BlogPost.vue";

export default {
  components: {
    Child,
    BlogPost,
  },
  data() {
    return {
      greeting: "Hello du parent",
      post: {
        title: "Aucun titre",
        content: String,
        author: {
          name: String,
        },
      },
    };
  },
  props: {
    msg: String,
    post: Object,
  },
};
</script>

<template>
  <Child :msg="greeting" />
  <BlogPost :title="post.title" />
</template>
