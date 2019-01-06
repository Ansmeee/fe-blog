<template>
    <div class="userinfo">
        <div class="user-img">
            <img height="150px" width="150px" src="../assets/logo.png">
        </div>
        <p><b>Ansme</b></p>
        <div class="user-blog">
            <div>
                <a href="">
                    <span>日志</span>
                    <span>200</span>
                </a>
            </div>
            <div>
                <a href="">
                    <span>分类</span>
                    <span>20</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserInfo'
}
</script>

<style>
.user-img {
    overflow: hidden;
    text-align: center;
    border-radius: 80px;
}

.user-blog {
    overflow: hidden;
    text-align: center;
}
</style>
