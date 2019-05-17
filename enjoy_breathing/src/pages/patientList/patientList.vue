<template>
    <div class="patient-list">
        <div class="top-bar flex space-between">
            <span>患者列表</span>
            <span class="invite" @click="$router.push('invitePatients')">邀请</span>
        </div>
        <div class="new-group flex flex-center">
            <div>
                <span class="add-icon">+</span>
                新建分组
            </div>
        </div>
        <ul class="group-list">
            <li class="group-item" v-for="group in groupList" :key="group.id">
                <div class="group-item-label"  @click="handleClick(group.id)">
                    <img class="icon" :class="{active: group.id === currentId}" src="@/assets/images/ak_r.png" alt="">
                    <span>{{group.groupName}} （{{group.members.length}}）</span>
                    <p class="more" @click.stop="handleEdit(group)"><img class="icon" src="@/assets/images/more.png" alt=""></p>
                    <ul class="group-manage" v-show="currentEditId === group.id">
                        <li>编辑分组名称</li>
                        <li @click="handleDelete(group.id)">删除分组</li>
                    </ul>
                </div>
                <ul class="group-item-list" v-show="group.id === currentId">
                    <li class="member-item flex" v-for="item in group.members" :key="item.id" @click="viewPatientRecord(item)">
                        <img class="avatar" :src="require('@/assets/images/'+'default.png')" alt="">
                        <div class="member-info">
                            <span class="name">{{item.patientName}}</span>
                            <p class="extra-info">
                                <span>性别： {{item.gender}}</span>
                                <span>{{item.age}}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentId: -1,
            groupList: [],
            currentEditId: -1,
        }
    },
    created() {
        const studioInfo = JSON.parse(sessionStorage.getItem('studioInfo'));
        this.getPatienList(studioInfo.id);
        this.getPatientNewFlag(studioInfo.id);
        document.addEventListener('click', this.clickListener);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.clickListener)
    },
    methods: {
        getPatientNewFlag(id) {
            const params = {
                path: 'respiratory:updatePatientNewFlag',
                params: {
                    id,
                }
            }
            this.$api.polling(params).then(res => {
                
            })
        },
        clickListener() {
            this.currentEditId = -1;
        },
        getPatienList(id) {
            
            const params = {
                path: 'respiratory:findPatientGroupList',
                params: {
                    id,
                }
            }
            this.$api.polling(params).then(res => {
                
                this.groupList = res.items;
            })
        },
        handleClick(id) {
            this.currentId = this.currentId === id ? -1 : id;
        },
        handleEdit(group) {
            //group.isEdit = !group.isEdit
            this.currentEditId =  this.currentEditId === group.id ? -1 : group.id;
        },
        viewPatientRecord(item) {
            this.$router.push({
                path: 'patientRecord',
                query: {
                    id: item.id
                }
            })
        },
        handleDelete(id) {
            const params = {
                path: 'respiratory:deletePatientGroup',
                params: {
                    id
                }
            }
            this.$api.polling(params).then(res => {
                this.getPatienList();
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.patient-list {
    height: 100vh;
    background: #f4f4f4;
    .top-bar {
        .invite {
            position: absolute;
            right: 1rem;
            padding: 0 1rem;
        }
    }
    .new-group {
        height: 2.5rem;
        background-color: #ffffff;
        color: #1386fc;
        margin-bottom: .3rem;
        .add-icon {
            width: 1rem;
            height: 1rem;
            line-height: 1rem;
            display: inline-block;
            text-align: center;
            border-radius: 1rem;
            border: 1px solid #1386fc;
        }
    }
    .group-list {
        .group-item {
            .group-item-label {
                padding-left: 1.3rem;
                height: 2rem;
                line-height: 2rem;
                border-bottom: 1px solid #f4f4f4;
                background: #fff;
            }
            .icon {
                width: 0.8rem;
                transition: transform 0.2s;
                &.active {
                    transform: rotate(90deg);
                }
            }
            .more {
                line-height: 2rem;
                float: right;
                .icon {
                    padding: 0 1.6rem;
                }
            }
            .group-manage {
                position: absolute;
                right: 0;
                box-shadow: 2px 2px 3px 1px #eee;
                padding: .2rem .4rem;
                border: 1px solid #eee;
                background: #fff;
            }
            .group-item-list {
                .avatar {
                    width: 2.1rem;
                    height: 2.1rem;
                    border-radius: 2rem;
                    margin-right: .5rem;
                }
                .member-item {
                    padding-left: 1.9rem;
                    height: 3.8rem;
                    background-color: #fff;
                    .member-info {
                        line-height: 1.6rem;
                        .name {
                            font-size: 1rem;
                            color: #383838;
                        }
                        .extra-info {
                            font-size: .7rem;
                            color: #a3a3a3;
                            span {
                                margin-right: 1.6rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

