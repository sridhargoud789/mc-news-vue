<template>
    <div class="cart--row">
        <div class="--column -thumbnail"><div class="-img"><img src="https://apinebolus.ole.agency/storage/app/public/uploads/2022/08/08/20220808125427000000-1280x960.jpg" alt=""></div></div>
        <div class="--column -information">
            <div>
                <h4 class="-title academy--title">{{courseTranslate.name}}</h4>
            </div>
            <div>
                <strong>{{$t("author")}}:</strong> {{course.author.name}}
            </div>
        </div>
        <div class="--column -price">
            <div class="prices">
                <span class="">500$ <strong class="crypto">/ 500</strong></span>
            </div>
        </div>
        <div class="actions">
            <div class="action remove" @click="unsetItem">x</div>
        </div>
    </div>
</template>
<script>

    export default{
        name: "CourseCartRowComponent",
        props: {
            course : {}
        }, 
        data(){
            return {
                courseTranslate : {}
            }
        },methods:{
            handleUpdateLocale(){
                const locale = this.$store.state.locale.current;
                const translation = this.$getTranslation(this.course.courseTranslation, locale);
                this.courseTranslate = (translation) ? translation : this.course;
            }, 
            unsetItem(){
                this.$emit("unsetItem", this.course.id)
            }
        },
        created(){
            this.handleUpdateLocale();
            this.$nuxt.$on('changeLocale', () => this.handleUpdateLocale());
        }
    }
</script>
