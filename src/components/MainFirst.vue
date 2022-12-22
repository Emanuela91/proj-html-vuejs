<script>
export default {
    name: "MainFirst",

    data() {
        return {
            cardArray: [
                {
                    image: "/svg/svg-0.svg",
                    title: "Online Coaching",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam vel enim soluta debitis sunt nam repudiandae odio dolor facere, ipsam ullam eveniet."
                },
                {
                    image: "/svg/svg-1.svg",
                    title: "Consultation",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam vel enim soluta debitis sunt nam repudiandae odio dolor facere, ipsam ullam eveniet."
                },
                {
                    image: "/svg/svg-2.svg",
                    title: "Life Programs",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam vel enim soluta debitis sunt nam repudiandae odio dolor facere, ipsam ullam eveniet."
                },
            ]

        }
    },
}
</script>


<template>
    <section>
        <div class="container">
            <div class="sentence">Since 2000, weve been partnering with aducation leaders to <span
                    class="color">increase
                    equity and achievement</span> for all students.</div>

            <div class="cards">
                <div class="card" v-for="(link, index) in cardArray" key="index">
                    <img :src="link.image" alt="">
                    <h6>{{ link.title }} </h6>
                    <p>{{ link.text }} </p>
                </div>
            </div>
        </div>
    </section>

</template>


<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

.container {
    .sentence {
        margin-top: 50px;
        width: 80%;
        margin-left: 9%;
    }

    .cards {
        @include wrap();
        margin-top: 50px;

        .card {
            width: calc(100% / 3 - 20px);
            margin-right: 20px;
            text-align: center;
            box-shadow: 10px 10px 15px #f7f4f4,
                -10px 5px 15px #f7f4f4;
            padding-bottom: 35px;

            img {
                height: 40px;
                margin-top: 30px;
                margin-bottom: 20px;
            }

            h6 {
                margin-bottom: 20px;
            }

            p {
                margin-bottom: 40px;
                padding: 0 20px;
            }
        }

    }
}
</style>