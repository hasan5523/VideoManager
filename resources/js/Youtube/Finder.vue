<template>
    <div class="search__wrapper">
        <div class="container">
            <form @submit.prevent="handleFormSubmit">
                <input type="text" class="form-control finder" v-model="searchString">

            </form>
        </div>
    </div>
</template>

<script>
    import Search from './search';
    export default {
        name: "Finder",
        data(){
          return{
              searchString:'',
          }
        },
        methods:{
            handleFormSubmit(){
                Search({
                    apiKey : 'AIzaSyBrREOB-zjc7wh5esoGf3xIIIkfdMBwJgs',
                    term: this.searchString,
                    items:12
                }, data => {
                    window.eventBus.$emit('searchResultFromYoutube',data);
                })
            }
        }
    }
</script>

<style scoped>
.finder{
    margin: 20px auto;
    width: 60%;
}
</style>