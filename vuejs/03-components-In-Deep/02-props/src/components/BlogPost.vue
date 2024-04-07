<script>
    export default {
        props: {
            post: {
                title: String = 'Aucun titre',
                content: String,
                author: {
                    name: String
                }
            }
        }
    }
</script>

<template>
    <h3>{{ post.title}}</h3> 
</template>