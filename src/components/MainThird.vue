<script>
export default {
    name: "MainThird",
}
</script>

<template>
    <section>
        <div class="container">
            <p>"Academics was committed to my success from the moment I attended an Open House. With the support of
                caring <span class="color">advisors, professors, and staff</span>
                i was able to thrive in courses, gain reconition throught scholarships, and finish
                <span id="bold"> with confidence in my
                    <span class="color">@academics</span>
                    abilities
                </span>"
            </p>

            <!-- sezione delle immagini sovrapposte -->
            <div>
                <div class="under">
                    <img src="/img/video-bg-3.jpg" alt="">
                    <font-awesome-icon class="icon" icon="fa-regular fa-play-circle" />
                </div>

                <div class="over">

                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

p {
    margin: 50px 0;
    font-size: 25px;
    text-align: center;
    line-height: 35px;
    background-image: url(/img/quote.png);
    background-size: contain;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: center;

    span.color {
        text-decoration: underline;
        text-underline-offset: 7px;
    }

    span#bold {
        font-weight: bold;
    }
}

.icon {
    color: red;
    position: relative;
    bottom: 51%;
    height: 55px;
    right: 33%;
    background-color: white;
    border-radius: 100px;
}
</style>