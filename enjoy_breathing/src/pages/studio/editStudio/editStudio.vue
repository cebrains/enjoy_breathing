<template>
    <div class="edit-studio">
        <h2 class="title">请填写工作室信息</h2>
        <ul class="info-list">
            <li class="info-item">
                <rx-item label="工作室名称" :value="form.studioName" show-icon ></rx-item>
            </li>
            <li class="info-item">
                <rx-item label="所在城市" placeholder="请选择城市" :value="form.city" show-icon @onClick="showCityPicker"></rx-item>
            </li>
            <li class="info-item">
                <rx-item label="开始工作" placeholder="请选择年份" :value="form.workDate" show-icon @onClick="showDatePicker"></rx-item>
            </li>
            <li>
                <p class="studio-desc">工作室介绍</p>
                <cube-textarea v-model="form.profiles" placeholder="请输入工作室介绍"></cube-textarea>
            </li>
            <cube-button @click="save()">保存</cube-button>
        </ul>
    </div>
</template>

<script>
import { provinceList, cityList, areaList } from '../../../../static/area.js'

const cityData = provinceList
cityData.forEach(province => {
  province.children = cityList[province.value]
//   province.children.forEach(city => {
//     city.children = areaList[city.value]
//   })
})

export default {
    data() {
        return {
            form: {
                studioName: '',
                city: '',
                workDate: '',
                profiles: '',
            },
            yearChecked: false,
            cityChecked: false,
            dateList: [],
        }
    },
    created() {
        this.getStudioInfo();
    },
    mounted() {
        this.cityPicker = this.$createCascadePicker({
            data: cityData,
            onSelect: this.citySelectHandle,
            onCancel: this.cancelHandle
        })
        let currentYear = (new Date()).getFullYear();
        for (let index = 0; index < 60; index++) {
            this.dateList.push({
                text: currentYear.toString(),
                value: currentYear.toString()
            })
            currentYear -= 1;
        }
    },
    methods: {
        getStudioInfo() {
            this.form = JSON.parse(sessionStorage.getItem('studioInfo'))
            
            const toast = this.$createToast({
                txt: 'Loading...',
                time: 0,
                mask: true
            })
            toast.show()
            const params = {
                path: "respiratory:findDoctorStudio",
                params: {
                    
                }
            }
            this.$api.polling(params).then(res => {
                toast.hide()
                this.form = res.items;
                if (!this.form.profiles) {
                    this.form.profiles = '';
                }
                sessionStorage.setItem('studioInfo', JSON.stringify(this.form))
            }, err => {
                toast.hide()
            })
            
        },
        showDatePicker() {
            if (!this.datePicker) {
                this.datePicker = this.$createPicker({
                    data: [this.dateList],
                    onSelect: this.selectHandle,
                    onCancel: this.cancelHandle
                })
            }

            this.datePicker.show()
        },
        selectHandle(selectedVal, selectedIndex, selectedText) {
            this.form.workDate = selectedVal[selectedVal.length -1];
            this.yearChecked = true;
        },
        showCityPicker() {
            this.cityPicker.show()
        },
        citySelectHandle(selectedVal, selectedIndex, selectedText) {
            this.form.city = selectedText[selectedText.length - 1];
            this.cityChecked = true;
        },
        save() {
            const toast = this.$createToast({
                txt: 'Loading...',
                time: 0,
                mask: true
            })
            toast.show()

            const params = {
                path: 'respiratory:updateStudio',
                params: this.form
            }
            this.$api.polling(params).then(res => {
                toast.hide()
                sessionStorage.setItem('studioInfo', JSON.stringify(this.form))
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>
.edit-studio {
    padding: 1.4rem;
    .title {
        margin: 1.4rem 0;
        font-size: 1.2rem;
        color: #101010;
    }
    .info-list {
        .studio-desc {
            margin: .6rem 0;
            font-size: 0.9rem;
            color: #585858;
        }
    }
    .cube-btn {
        margin-top: 1.7rem;
    }
}
</style>

