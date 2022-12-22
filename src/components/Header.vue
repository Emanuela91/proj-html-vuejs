<script>
export default {
    name: "Header",

    data() {
        return {
            menuNav: [
                {
                    text: "Home",
                    url: "#"
                },
                {
                    text: "About",
                    url: "#"
                },
                {
                    text: "Academics",
                    url: "#"
                },
                {
                    text: "Curses",
                    url: "#"
                },
                {
                    text: "News",
                    url: "#"
                },
            ]

        }
    },

}
</script>


<template>
    <div>
        <div class="container">
            <section class="top">
                <div class="logo">
                    <img src="../assets/img/Logo.jpg" alt="logo">
                </div>

                <nav>
                    <ul>
                        <li v-for="(link, index) in menuNav" key="index">
                            <a :href="link.url">
                                {{ link.text }}
                            </a>
                        </li>
                    </ul>
                </nav>

            </section>
        </div>
        <section class="bottom">
            <div class="container">
                <h1>Professional Development For Coaches and Leaders</h1>
                <span>Learn More</span>
            </div>

        </section>
    </div>

</template>


<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

.container {

    // stile parte superiore header con menu nav
    .top {
        height: 60px;
        @include between();

        img {
            height: 100px;
        }

        nav {
            ul {
                @include between();

                li {
                    list-style: none;
                    margin-left: 15px;

                    a {
                        text-decoration: none;
                        font-size: 18px;
                        display: inline-block;
                        color: $text;
                    }
                }
            }
        }
    }
}

// stile parte inferiore header
.bottom {
    height: 600px;
    background-image: url(../assets/img/02_Landing-Page.jpg);
    background-size: 100% 100%;

    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
        align-items: center;
        justify-content: center;

        h1 {
            width: 62%;
            font-size: 50px;
            color: $text;
        }

        span {
            padding: 10px 30px;
            border: 1px solid $text;
            margin-top: 40px;
            color: $text;
        }
    }
}
</style>