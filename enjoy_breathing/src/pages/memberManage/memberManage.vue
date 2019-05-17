<template>
    <div class="member-manage">
        <div class="top-bar">
            <span>工作室成员</span>
            <span class="float-right add-icon cubeic-add" @click="show=!show"></span>
            <ul class="invite" v-show="show">
                <li>发送邀请连接</li>
                <li>通过账号添加</li>
            </ul>
        </div>
        <div class="container flex flex-column">
            <div class="card flex" v-for="item in memberList" :key="item.id">
                <img class="avatar" src="@/assets/images/default.png" alt="">
                <div>
                    <div class="flex">
                        <span class="name">{{item.userName}}</span>
                        <span class="role">{{item.role}}</span>
                    </div>
                    <p class="phone">{{item.mobilePhone}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            memberList: []
        }
    },
    created() {
        const studioInfo = JSON.parse(sessionStorage.getItem('studioInfo'))
        this.getMemberList(studioInfo.id);
    },
    methods: {
        getMemberList(id) {
            const params = {
                path: 'respiratory:findStudioMenbers',
                params: {
                    id,
                }
            }
            this.$api.polling(params).then(res => {
                this.memberList = res.items;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.member-manage {
    height: 100vh;
    background: #f4f4f4;
    .top-bar {
        position: relative;
        background: #fff;
        padding: 0 2rem;
        text-align: center;
        font-size: 1.1rem;
        .invite {
            position: absolute;
            top: 2.6rem;
            right: 1rem;
            padding: .8rem 2rem;
            background: #fff;
            box-shadow: 0rem 0rem 1.5rem 0rem rgba(221, 221, 221, 0.44);
        }
        .add-icon {
            text-align: right;
            width: 1.2rem;
            height: 1.2rem;
            line-height: 1.2rem;
        }
    }
    .container {
        padding: 0.3rem 0.8rem;
    }
    .card {
        width: 100%;
        height: 5.6rem;
        padding: 0 1.4rem;
        box-sizing: border-box;
        box-shadow: 0rem 0rem 1.5rem 0rem 
		rgba(221, 221, 221, 0.27);
        border-radius: 0.2rem;
        background: #fff;
        margin-bottom: .3rem;
        .avatar {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 2rem;
            margin-right: 1.2rem;
        }
        .name {
            font-size: 1.1rem;
            color: #383838;
            margin-right: .8rem;
        }
        .role {
            padding: .1rem .2rem;
            border: 1px solid #4c8bfb;
            font-size: 0.5rem;
            color: #4c8bfb;
            line-height: 1;
        }
        .phone {
            font-size: 0.8rem;
	        color: #707070;
        }
    }
}
</style>

