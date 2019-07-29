<template>
    <div class="youtubeDash__wrapper">
        <Finder></Finder>
        <VideoGroup :videos = "videos"></VideoGroup>

    </div>
</template>

<script>
    import VideoGroup from './VideoGroup';
    import Finder from './Finder';
    import Search from './search';
    export default {
        name: "YoutubeDash",
        created(){
            Search({
                apiKey : 'AIzaSyBrREOB-zjc7wh5esoGf3xIIIkfdMBwJgs',
                term: 'cat',
                items:12
            }, response => this.videos = response);

            window.eventBus.$on('searchResultFromYoutube',videos=>{
                this.videos = videos
            });
        },
        data(){
            return{
                videos:null
            }
        },

        components:{
            VideoGroup,
            Finder
        }


    }
</script>

<style scoped>

</style>