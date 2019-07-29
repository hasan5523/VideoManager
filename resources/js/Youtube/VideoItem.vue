<template>
    <div class="videoItem__wrapper">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" v-bind:src="videoImageUrl" :alt="videoTitle">
            <div class="card-body">
                <h5 class="card-title">{{videoTitle}}</h5>
                <p class="card-text">{{videoDescription}}</p>
                <router-link :to="{name:'youtube-video', params:{id:video.id.videoId, video: video}}" class="btn btn-primary">Show Video</router-link>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "VideoItem",
        props:['video'],
        computed:{
            videoTitle(){
                return this.video.snippet.channelTitle;
            },
            videoDescription(){
                return this.video.snippet.description;
            },
            videoImageUrl(){
                return this.video.snippet.thumbnails.medium.url;
            },

        },


    }
</script>

<style scoped>

</style>