<template>
    <div class="card">
        <h3 class="card__title">{{ idea.title }}</h3>
    </div>
</template>

<script>
export default {
    props: ["idea"]
}
</script>

<style scoped>
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #333;
    border-radius: 6px;
    background-color: white;
    height: 230px;
}

.card:hover {
    opacity: 0.5;
}
</style>