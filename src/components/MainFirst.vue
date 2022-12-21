<script>
export default {
    name: "MainFirst",

    data() {
        return {
            cardArray: [
                {
                    image: "/svg/svg-0.svg",
                    title: "Online Coaching",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam vel enim soluta debitis sunt nam repudiandae odio dolor facere, ipsam ullam eveniet. Cupiditate explicabo maiores ducimus alias sed temporibus!"
                },
                {
                    image: "/svg/svg-1.svg",
                    title: "Consultation",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam vel enim soluta debitis sunt nam repudiandae odio dolor facere, ipsam ullam eveniet. Cupiditate explicabo maiores ducimus alias sed temporibus!"
                },
                {
                    image: "/svg/svg-2.svg",
                    title: "Life Programs",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam vel enim soluta debitis sunt nam repudiandae odio dolor facere, ipsam ullam eveniet. Cupiditate explicabo maiores ducimus alias sed temporibus!"
                },
            ]

        }
    },
}
</script>


<template>
    <section>
        <div class="container">
            <div>Since 2000, weve been partnering with aducation leaders to <span class="color">increase
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
</style>