<script>
export default {
    name: "Footer",

    data() {
        return {
            supportArray: [
                {
                    link: "Privacy"
                },
                {
                    link: "Terms"
                },
                {
                    link: "Cookie Policy"
                },
                {
                    link: "Sitemap"
                },

            ],

            exploreArray: [
                {
                    link: "Accomodation"
                },
                {
                    link: "Arts Academics"
                },
                {
                    link: "Central Services"
                },
                {
                    link: "Conferences and Events"
                },
                {
                    link: "Food and Drink"
                },
            ],

            visitArray: [
                {
                    link: "Admission"
                },
                {
                    link: "Contact Us"
                },
                {
                    link: "FAQs"
                },
                {
                    link: "Request Information"
                },
                {
                    link: "Privacy Notice"
                },
            ]
        }
    },
}
</script>


<template>
    <section>
        <div class="container">

            <!-- sezione newsletter -->
            <div class="newsletter">
                <div class="register">
                    <form>
                        <input type="text" placeholder="Subscrive to our newsletter" size="40">
                        <button>Register</button>
                    </form>
                </div>
                <div class="takeme">
                    <div class="parag">
                        <span class="color">Insights is Picwik</span> University's thought leadership pubblication for
                        sharing knowledge on managment, technology and innovation.
                    </div>
                    <span id="icon">Take me there <font-awesome-icon icon="fa-solid fa-angle-right" /></span>
                </div>

            </div>

            <!-- menu navigazione footer -->
            <nav>
                <ul>
                    <li>
                        <h6>Contact Us</h6>
                    </li>
                    <li>
                        <a href=""><font-awesome-icon icon="fa-solid fa-location-dot" /> 900 Wood Street, MI New York
                            4867</a>
                    </li>
                    <li>
                        <a href=""><font-awesome-icon icon="fa-solid fa-square-phone" /> +56 345 678 000-09</a>
                    </li>
                    <li>
                        <a href=""><font-awesome-icon icon="fa-solid fa-envelope" /> info@example.com</a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <h6>Support Us</h6>
                    </li>
                    <li v-for="(link, index) in supportArray" key="index">
                        <a href="">
                            <font-awesome-icon icon="fa-solid fa-angle-right" /> {{ link.link }}
                        </a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <h6>Explore</h6>
                    </li>
                    <li v-for="(link, index) in exploreArray" key="index">
                        <a href="">
                            <font-awesome-icon icon="fa-solid fa-angle-right" /> {{ link.link }}
                        </a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <h6>Visit</h6>
                    </li>
                    <li v-for="(link, index) in visitArray" key="index">
                        <a href="">
                            <font-awesome-icon icon="fa-solid fa-angle-right" /> {{ link.link }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- parte del Copyright -->
        <div class="diritti">
            <div class="container">
                <div class="copy">
                    <font-awesome-icon icon="fa-solid fa-copyright" /> Copyright 2020 tophive. All Rights Reserved.
                </div>
                <ul>
                    <li v-for="(link, index) in supportArray" key="index">
                        <a href="">
                            {{ link.link }}
                        </a>
                    </li>
                </ul>
            </div>

        </div>


    </section>

</template>

<style lang="scss" scoped>
@use '../styles/generals.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

section {
    background-color: #192634;
    padding-top: 20px;

    // css sezione newsletter
    .newsletter {
        @include between();
        justify-content: space-around;
        box-shadow: 10px 10px 15px #252424,
            -10px 5px 15px #252424;
        padding: 30px 0;
        margin: 50px 0;

        .register {
            input {
                padding: 15px;
                border: none;
            }

            button {
                border: none;
                padding: 15px 15px;
                background-color: $text_red;
                color: white;
            }
        }

        .parag {
            color: #8597aa;
            font-size: 12px;
            margin-bottom: 5px;

            span {
                text-decoration: underline;
                text-underline-offset: 4px;
                text-decoration-color: white;
            }
        }

        #icon {
            color: white;
            font-size: 12px;
            font-weight: bold;
        }
    }

    // css menu navigazione
    nav {
        @include between();
        align-items: flex-start;

        li {
            line-height: 30px;

            h6 {
                color: white;
                margin-bottom: 15px;
            }

            a {
                color: #8597aa;
                font-size: 12px;
            }
        }
    }

    // css parte del copyright
    .diritti {
        padding: 10px 0;
        margin-top: 30px;
        background-color: #15222e;

        .container {
            @include between();
        }

        .copy {
            color: #8597aa;
            font-size: 12px;
        }

        ul {
            @include between();

            li {
                margin-left: 15px;

                a {
                    color: #8597aa;
                    font-size: 12px;
                }
            }
        }
    }


}
</style>
