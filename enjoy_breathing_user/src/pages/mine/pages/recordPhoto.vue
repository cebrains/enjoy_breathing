<template>
    <div class="record-photo">
        <div class="top-bar">档案照片</div>
        <div class="list-wrapper">
            <p class="tips">已累计上传{{photoList.length}}张</p>
            <ul class="photo-list">
                <li class="photo-item" v-for="item in photoList" :key="item.id">
                    <p class="date">{{item.date}}</p>
                    <div class="card">
                        <p class="title">{{item.title}}</p>
                        <p class="info-text">{{item.hospital}}  {{item.type}}</p>
                        <img class="image" :src="item.image" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            photoList: [{
                date: '2018/12/11',
                title: '彩超检查单',
                hospital: '河南省人民医院',
                type: '检查报告',
                image: `/src/assets/images/default.png`
            }, {
                date: '2018/12/11',
                title: '彩超检查单',
                hospital: '河南省人民医院',
                type: '检查报告',
                image: `/src/assets/images/default.png`
            }, {
                date: '2018/12/11',
                title: '彩超检查单',
                hospital: '河南省人民医院',
                type: '检查报告',
                image: `/src/assets/images/default.png`
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.record-photo {
    .top-bar {
        height: 3rem;
        background: #fff;
        line-height: 3rem;
        text-align: center;
        box-shadow: 0rem 0rem 0.2rem 0rem 
		rgba(224, 224, 224, 0.35);
    }
    .list-wrapper {
        padding: 1.2rem;
        .tips {
            color: #383838;
        }
        .photo-list {
            padding: 1rem 1.6rem;
            .photo-item {
                position: relative;
                padding-left: 1.5rem;
                border-left: 1px solid #e5e5e5;
                padding-bottom: 2rem;
                .date {
                    font-size: 0.9rem;
                    color: #585858;
                }
                .card {
                    box-shadow: 0rem 0rem 1.1rem 0rem rgba(224, 224, 224, 0.79);
                    padding: .7rem .8rem;
                    border-radius: 0.2rem;
                    .title {
                        font-size: 0.9rem;
                        color: #585858;
                    }
                    .info-text {
                        font-size: 0.8rem;
                        color: #a3a3a3;
                    }
                    .image {
	                    height: 5.1rem;
                    }
                }
                &::before {
                    content: '';
                    position: absolute;
                    left: -0.25rem;
                    display: inline-block;
                    width: 0.5rem;
                    height: 0.5rem;
                    background-color: #1386fc;
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>
