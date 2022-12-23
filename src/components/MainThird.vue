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
            <!-- carta sotto -->
            <div class="events">
                <section class="under">
                    <img src="/img/play.png" alt="">
                </section>

                <!-- carta sopra -->
                <section class="over">
                    <h4>Upcoming Events</h4>

                    <div class="parag">
                        Princeton offers admission information sessions and student-led tours to campus
                        visitors
                    </div>
                    <span id="icon">Learn more <font-awesome-icon icon="fa-solid fa-angle-right" /></span>

                    <div class="parag">
                        Admission information sessions and student-led tours to campus
                        visitors
                    </div>
                    <span id="icon">Learn more <font-awesome-icon icon="fa-solid fa-angle-right" /></span>

                    <div class="location"><font-awesome-icon icon="fa-regular fa-map" /> Event Location
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                    </div>
                </section>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

// sezione del paragrafo
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

// sezione delle carte sovrapposte
.events {
    display: flex;
    position: absolute;

    // carta sotto
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

    // carta sopra 
    .over {
        position: relative;
        height: 550px;
        width: 550px;
        box-shadow: 10px 10px 15px #f7f4f4;
        top: 60px;
        right: 180px;
        background-color: white;

        h4 {
            background-color: $text_red;
            color: white;
            padding: 25px 0;
            margin: 0 130px;
            margin-bottom: 80px;
        }

        .parag {
            font-size: 19px;
            padding: 0 20px;
            margin-top: 40px;
            margin-bottom: 10px;
        }

        #icon {
            font-size: 12px;
            font-weight: bold;
            margin-left: 20px;
        }

        .location {
            font-size: 12px;
            font-weight: bold;
            margin-top: 60px;
            margin-left: 20px;
            text-align: center;
        }
    }
}
</style>