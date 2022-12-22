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
            <div class="events">
                <div class="under">
                    <img src="/img/play.png" alt="">
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

.events {
    display: flex;
    position: absolute;

    .under {
        height: 550px;
        width: 550px;
        background-image: url(/img/video-bg-3.jpg);
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 60px;
            height: 60px;
            border-radius: 100px;
        }


    }

    .over {
        position: relative;
        height: 550px;
        width: 550px;
        box-shadow: 10px 10px 15px #f7f4f4;
        top: 60px;
        right: 180px;
        background-color: white;
    }


}
</style>