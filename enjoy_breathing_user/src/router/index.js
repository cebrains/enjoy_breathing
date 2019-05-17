import Vue from 'vue'
import Router from 'vue-router'
import enjoyBreathing from '@/components/enjoyBreathing'


import login from '@/pages/login'
import basicInfo from '@/pages/basicInfo'
import diseaseTypes from '@/pages/diseaseTypes'


import homePageIndex from '@/pages/homePage/index'
import homePage from '@/pages/homePage/homePage'
import studio from '@/pages/homePage/pages/studio'
import mall from '@/pages/homePage/pages/mall'
import pulmonaryData from '@/pages/homePage/pages/pulmonaryData'
import toInquiry from '@/pages/homePage/pages/toInquiry'
import scaleAssessment from '@/pages/homePage/pages/scaleAssessment'
import assessResult from '@/pages/homePage/pages/assessResult'
import scaleHistory from '@/pages/homePage/pages/scaleHistory'
import commodityDetails from '@/pages/homePage/pages/commodityDetails'
import commodityPay from '@/pages/homePage/pages/commodityPay'
import inquiryDetail from '@/pages/homePage/pages/inquiryDetail'
import recordHistory from '@/pages/homePage/pages/recordHistory'
import selectDoctor from '@/pages/homePage/pages/selectDoctor'


import inquiry from '@/pages/inquiry/inquiry'
import medicalRecord from '@/pages/inquiry/medicalRecord'
import inquiryMode from '@/pages/inquiry/pages/inquiryMode'
import selectPatien from '@/pages/inquiry/pages/selectPatien'
import inquiryPay from '@/pages/inquiry/pages/inquiryPay'

import mineIndex from '@/pages/mine/index'
import mine from '@/pages/mine/mine'
import caseManage from '@/pages/mine/pages/caseManage'
import recordPhoto from '@/pages/mine/pages/recordPhoto'
import equipmentManage from '@/pages/mine/pages/equipmentManage'
import equipmentInfo from '@/pages/mine/pages/equipmentInfo'
import relativesManage from '@/pages/mine/pages/relativesManage'

import test from '@/pages/homePage/test'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enjoyBreathing',
      component: enjoyBreathing,
      children: [{
        path: '',
        redirect: '/homePage'
      }, {
        path: 'login',
        component: login
      }, {
        path: 'basicInfo',
        component: basicInfo
      }, {
        path: 'diseaseTypes',
        component: diseaseTypes
      }, {
        path: 'homePage',
        component: homePageIndex,
        children: [{
          path: '',
          component: homePage,
        }, {
          path: 'studio',
          component: studio,
        }, {
          path: 'mall',
          component: mall,
        }, {
          path: 'pulmonaryData',
          component: pulmonaryData,
        }, {
          path: 'toInquiry',
          component: toInquiry,
        }, {
          path: 'scaleAssessment',
          component: scaleAssessment,
        }, {
          path: 'assessResult',
          component: assessResult,
        }, {
          path: 'scaleHistory',
          component: scaleHistory,
        }, {
          path: 'commodityPay',
          component: commodityPay,
        }, {
          path: 'commodityDetails',
          component: commodityDetails,
        }, {
          path: 'inquiryDetail',
          component: inquiryDetail,
        }, {
          path: 'recordHistory',
          component: recordHistory,
        }, {
          path: 'selectDoctor',
          component: selectDoctor,
        }, {
          path: 'test',
          component: test,
        }]
      }, {
        path: 'inquiry',
        component: inquiry,
        children: [{
          path: '',
          redirect: 'medicalRecord'
        }, {
          path: 'medicalRecord',
          component: medicalRecord
        }, {
          path: 'inquiryMode',
          component: inquiryMode
        }, {
          path: 'selectPatien',
          component: selectPatien
        }, {
          path: 'inquiryPay',
          component: inquiryPay
        }, {
          path: 'test',
          component: test
        }, {
          path: 'test',
          component: test
        }]
      }, {
        path: 'mine',
        component: mineIndex,
        children: [{
          path: '',
          component: mine,
        }, {
          path: 'caseManage',
          component: caseManage,
        }, {
          path: 'recordPhoto',
          component: recordPhoto,
        }, {
          path: 'equipmentManage',
          component: equipmentManage,
        }, {
          path: 'equipmentInfo',
          component: equipmentInfo
        }, {
          path: 'relativesManage',
          component: relativesManage,
        }, {
          path: 'test',
          component: test,
        }]
      }]
    }
  ]
})
