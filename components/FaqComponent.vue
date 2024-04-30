<template>
    <div class="-faqs">
        <div class="-faq d-flex" @click="toggleFaq()">
            <div class="-fag_description d-flex align-items-center">
                <h5 class="academy--title">{{faq.name}}</h5>
            </div>
            <div class="-expand d-flex align-items-center justify-content-center" :class="(is_open) ? 'expanded' : '' ">
                <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.25 0.75L13.75 13.25L1.25 25.75" stroke="#2A5673" stroke-width="2"/>
                </svg>
            </div>
        </div>
        <div class="-answer" :class="(is_open) ? 'expanded' : ''">
            <div class="-answer_body" v-html="faq.description"></div>
        </div>
    </div>    
</template>
<script>
    export default{
        name: "FaqComponent",
        props : {
            faq : {}
        },
        data(){
            return{
                is_open : false
            }
        }, 
        methods: {
            toggleFaq(){
                this.is_open = !this.is_open
            }
        }
    }
</script>
<style scoped>

</style>