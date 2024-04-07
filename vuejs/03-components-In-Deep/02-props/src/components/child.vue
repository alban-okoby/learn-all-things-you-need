<script>
    export default {
        props: {
            msg: String
        }
    }
</script>

<template>
    <h3>{{ msg || 'Aucune props passée actuellement à l\'enfant (Child)' }}</h3>
</template>