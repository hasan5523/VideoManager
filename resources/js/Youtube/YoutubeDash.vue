<template>
    <div class="youtubeDash__wrapper">
        <VideoGroup :videos = "videos"></VideoGroup>
    </div>
</template>

<script>
    import VideoGroup from './VideoGroup';
    import Search from './search';
    export default {
        name: "YoutubeDash",
        created(){
            Search({
                apiKey : 'AIzaSyBrREOB-zjc7wh5esoGf3xIIIkfdMBwJgs',
                term: 'x men',
                items:10
            }, response => this.videos = response)
        },
        data(){
            return{
                videos:null
            }
        },

        components:{
            VideoGroup
        }


    }
</script>

<style scoped>

</style>