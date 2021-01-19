<template>
    <div class="d-flex align-items-center justify-content-center">
        <h1 class="mb-0 mr-3">{{ timeLeft }}</h1>
        <b-button v-if="isCounting" @click="isCounting = !isCounting" variant="outline-secondary" class="mr-1" pill>
            <i class="fa fa-pause" /></b-button>
        <b-button
            v-if="!isCounting"
            @click="() => {
                isCounting = !isCounting
                timeFuture = Date.now() + (secondsLeft * 1000)
            }"
            variant="outline-secondary"
            class="mr-1"
            pill
        ><i class="fa fa-play" /></b-button>
        <b-button @click="countDown(true)" pill variant="outline-secondary" class="mr-1">
            <i class="fa fa-redo" />
        </b-button>
        <b-dropdown variant="outline-secondary" toggle-class="rounded-pill">
            <b-dropdown-item v-for="(time, k) in times" :key="k" @click="() => {timeSelected = time.value; countDown()}">
                {{ time.label }}
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
    export default {
        name: "CountDown",
        data() {
            return {
                isCounting: true,
                secondsLeft: 0,
                timeSelected: 300,
                timeFuture: 0,
                times: [
                    {
                        label: '10 ' + this.$t('components.count_down.segundos'),
                        value: 10
                    },
                    {
                        label: '30 ' + this.$t('components.count_down.segundos'),
                        value: 30
                    },
                    {
                        label: '1 ' + this.$t('components.count_down.minuto'),
                        value: 60
                    },
                    {
                        label: '2 ' + this.$t('components.count_down.minutos'),
                        value: 120
                    },
                    {
                        label: '5 ' + this.$t('components.count_down.minutos'),
                        value: 300
                    },
                    {
                        label: '10 ' + this.$t('components.count_down.minutos'),
                        value: 600
                    }
                ]
            }
        },
        computed: {
            timeLeft() {
                const minutes = Math.floor((this.secondsLeft % 3600) / 60)
                const seconds = this.secondsLeft % 60;
                const minString = minutes < 10 ? `0${minutes}` : `${minutes}`
                const secString = seconds < 10 ? `0${seconds}` : `${seconds}`

                return `${minString}:${secString}`;
            }
        },
        mounted() {
            this.timeFuture = Date.now() + (this.secondsLeft * 1000)
            this.countDown()
        },
        methods: {
            countDown(refresh=false) {
                if (refresh) {
                    this.$emit('refresh')
                    this.timeFuture = Date.now() + (this.secondsLeft * 1000)
                }
                clearInterval(this.intervalTimer)
                this.timeFuture = Date.now() + ((this.timeSelected + 1) * 1000)
                this.intervalTimer = setInterval(() => {
                    if (this.isCounting) {
                        this.secondsLeft = Math.round((this.timeFuture - Date.now()) / 1000)
                        if (this.secondsLeft <= 0) {
                            this.$emit('time-over')
                            this.timeFuture = Date.now() + ((this.timeSelected + 1) * 1000)
                            return
                        }
                    }
                }, 1000)
            }
        },
        beforeDestroy() {
            clearInterval(this.intervalTimer)
        }
    }
</script>

<style lang="scss" scoped>
</style>
