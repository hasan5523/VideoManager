<template>
    <div class="videoGroup__wrapper">
        <div class="container-fluid">
            <div class="row row-eq-height">
                <div class="col-md-3" v-for="video in videos" :key="video.id.videoId">
                    <VideoItem  :video = "video" >

                    </VideoItem>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import VideoItem from './VideoItem'
    export default {
        name: "VideoGroup",
        props:['videos'],

        components:{
            VideoItem
        }
    }
</script>

<style scoped>

</style>