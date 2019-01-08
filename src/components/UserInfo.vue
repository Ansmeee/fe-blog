<template>
    <div class="userinfo">
        <div class="user-img">
            <router-link :to="{ name: 'blogger' }">
                <img height="150px" width="150px" :src="user.icon">
            </router-link>
        </div>
        <p><router-link :to="{ name: 'blogger' }"><b>{{ user.name }}</b></router-link></p>
        <div class="user-blog">
            <router-link v-for="blog in blogs" :key="blog.id" class="user-blog-outline" :to="{ name: blog.url }">
                <span>{{ blog.title }}</span>
                <span>{{ blog.total }}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfo',
    data () {
        return {
            user: {
                name: 'Ansme',
                icon: 'https://upload.jianshu.io/users/upload_avatars/10524315/5295422b-5b23-45c3-91cb-932c69fd8f11.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
            },
            blogs: [
                {
                    title: '日志',
                    total: '100',
                    url: 'myblog'
                },
                {
                    title: '分类',
                    total: '10',
                    url: 'myclass'
                }
            ]
        }
    }
}
</script>

<style>
.user-img {
    overflow: hidden;
    text-align: center;
    margin: auto;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    border: 1px solid #ddd;
}

.user-blog {
    overflow: hidden;
    text-align: center;
    font-size: 14px;
}

.user-blog-outline {
    display: block;
}
</style>
