<script>
export default {
    name: "MainSecond",

    data() {
        return {
            cardArray: [
                {
                    image: "/img/bruce-mars-FWVMhUa_wbY-unsplash.jpg",
                    status: "Free",
                    title: "UI Animation using Sketch 3, Principle App, and Flinto",
                    text: "This online photography course wil teach you how to take amazing images and even sell...",
                    course: "Course by: University"
                },
                {
                    image: "/img/course-1-2.jpg",
                    status: "Free",
                    title: "The Ultimate Drawing Course - Beginner to Advanced ",
                    text: "This online photography course wil teach you how to take amazing images and even sell...",
                    course: "Course by: University"
                },
                {
                    image: "/img/william-thomas-ny6tO4ItOEY-unsplash.jpg",
                    status: "Free",
                    title: "Your Complete Guide to Photography",
                    text: "This online photography course wil teach you how to take amazing images and even sell...",
                    course: "Course by: University"
                },
            ]

        }
    },
}
</script>


<template>
    <section>
        <div class="container">
            <h4>Recent Courses</h4>
            <p class="subtitle">Whether you considering a foundation course or an undergraduate degree master's or a
                PhD, academics is a
                place where studenst thrive.</p>

            <div class="cards">
                <div class="card" v-for="(link, index) in cardArray" key="index">
                    <img :src="link.image" alt="">
                    <span>{{ link.status }}</span>
                    <h6>{{ link.title }} </h6>
                    <p>{{ link.text }} </p>
                    <div id="course">{{ link.course }}</div>
                </div>
            </div>
        </div>
    </section>

</template>


<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

h4 {
    text-align: center;
    font-size: 25px;
    margin-top: 50px;
    margin-bottom: 20px;
}

.subtitle {
    text-align: center;
    width: 62%;
    margin-left: 20%;
}

.card {

    img {
        width: 100%;
        height: 220px;

    }

    span {
        padding-left: 20px;
        margin-bottom: 15px;

    }

    h6 {
        margin-top: 15px;
    }

    #course {
        font-size: 12px;
        color: $text_red;
        padding-left: 20px;
        margin-bottom: 20px;
    }

}
</style>