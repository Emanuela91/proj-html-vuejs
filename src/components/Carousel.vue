<script>
export default {
    name: "Carousel",

    data() {
        return {
            imgArray: [
                {
                    img: "/img/castle.png"
                },
                {
                    img: "/img/friends.png"
                },
                {
                    img: "/img/view.png"
                },
                {
                    img: "/img/diplom.png"
                },

            ]

        }
    },
}

</script>

<template>
    <div class="images">
        <div class="image" v-for="(link, index) in imgArray" key="index">
            <img :src="link.img" alt="">
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

.images {
    @include wrap();

    .image {
        width: calc(100% / 4);
    }
}
</style>