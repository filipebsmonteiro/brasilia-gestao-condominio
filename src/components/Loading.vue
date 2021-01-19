<template>
    <div class="loading">
        <div class="loading-circle"></div>
        <p class="loading-text">Carregando</p>
    </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style lang="scss" scoped>
.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
}
.loading-circle {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 7px solid transparent;
    border-left-color: #ababab;
    border-bottom-color: #ababab;
    animation: circleanimation .45s linear infinite
}
.loading-text {
    margin-top: 15px;
    color: #808080;
    font-size: 12px;
    text-align: center;
}
@keyframes circleanimation {
    from {
        transform: rotateZ(0deg);
    }
    to {
        transform: rotateZ(360deg);
    }
}
</style>
