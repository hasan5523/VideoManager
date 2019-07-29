<template>
    <div class="videodetails_wrapper row" v-if="video">
        <div class="col-sm-8 col-sm-push-2">
            <h2>{{video.snippet.title}}</h2>
            <br>

            <div class="embed-responsive embed-responsive-16by9">
                <iframe :src="url" class="embed-responsive-item" frameborder="0"></iframe>
            </div>
        </div>
        <div>
            <p>Channel: {{video.snippet.channelTitle}}</p>
            <p>{{video.snippet.description}}</p>
        </div>


    </div>

</template>

<script>
    export default {
        name: "VideoDetail",
        data(){
            return{
                videoId : null,
                video : null,
                url : null
            }
        },
        created(){
            if( this.$route.params.video === undefined){
                this.$router.push({name:'youtube-dashboard'});
            }

            this.videoId = this.$route.params.id;
            this.url = `https:www.youtube.com/embed/${this.videoId}`;
            this.video = this.$route.params.video;
        }
    }
</script>

<style scoped>

</style>