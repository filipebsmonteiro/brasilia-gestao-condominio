<template>
    <div class="timeline-container">
        <div v-for="event in events" class="timeline-block">
            <span class="timeline-img" />
            <b-card class="shadow timeline-content">
                <template v-slot:header>
                    <p class="font-weight-bold mb-0 flex-fill">{{ event.title }}</p>
                    <span class="d-sm-none">{{ event.date }}</span>
                </template>
                <b-card-text>
                    <p>{{ event.text }}</p>
                </b-card-text>
            </b-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TimeLine",
        props: {
            events: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>
    .timeline-container {
        position: relative;
        &::before{
            content: '';
            position: absolute;
            left: 25px;
            height: 100%;
            width: 4px;
            background: #F9B112;
            @media only screen and (min-width: 1170px) {
                left: 50%;
                margin-left: -2px;
            }
        }
    }

    .timeline-block {
        position: relative;
        margin: 1em 0;
        &:after{
            content: "";
            display: table;
            clear: both;
        }
        @media only screen and (min-width: 1170px) {
            margin: 2em 0;
            &:first-child {
                margin-top: 0;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    .timeline-img {
        position: absolute;
        top: 8px;
        left: 12px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        box-shadow: 0 0 0 4px #F9B112, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
        background: #FFDB4B;
        @media only screen and (min-width: 1170px) {
            left: 50%;
            margin-left: -15px;
            margin-top: 10px;
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;
        }
    }

    .timeline-content {
        position: relative;
        margin-left: 60px;
        margin-right: 7%;
        &::before {
            content: '';
            position: absolute;
            top: 16px;
            right: 100%;
            border: 10px solid transparent;
            border-right: 10px solid #F9B112;
        }
        @media only screen and (min-width: 1170px) {
            margin-left: 7%;
            width: 39%;
            &::before {
                top: 24px;
                left: 100%;
                border-color: transparent;
                border-left-color: #F9B112;
            }
        }
        .card-header{
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
        }
    }

    @media only screen and (min-width: 1170px) {
        .timeline-block:nth-child(even) .timeline-content {
            float: right;
        }
        .timeline-block:nth-child(even) .timeline-content::before {
            top: 24px;
            left: auto;
            right: 100%;
            border-color: transparent;
            border-right-color: #F9B112;
        }
    }
</style>