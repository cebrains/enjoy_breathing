import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import doctor from '@/pages/doctor'
import homePage from '@/pages/homePage/homePage'
import personalAccounts from '@/pages/personalAccounts/personalAccounts'
import login from '@/pages/login/login'
import pendingReply from '@/pages/pendingReply/pendingReply'
import studio from '@/pages/studio/studio'
import editStudio from '@/pages/studio/editStudio/editStudio'
import mall from '@/pages/mall/mall'
import invitePatients from '@/pages/InvitePatients/InvitePatients'
import my from '@/pages/my/my'
import invite from '@/pages/my/invite'
import patientList from '@/pages/patientList/patientList'
import memberManage from '@/pages/memberManage/memberManage'
import patientRecord from '@/pages/patientRecord/patientRecord'
import joinStudio from '@/pages/joinStudio'
import medicalRecord from '@/pages/medicalRecord'
import assessmentScale from '@/pages/assessmentScale'
import scaleHistory from '@/pages/scaleHistory'
import inquiryDetail from '@/pages/inquiryDetail'
import recordPhoto from '@/pages/recordPhoto'
import pulmonaryData from '@/pages/pulmonaryData'
import inquiryPrice from '@/pages/inquiryPrice'
import caseShare from '@/pages/caseShare'
import caseDetails from '@/pages/caseDetails'
import myStudio from '@/pages/myStudio'
import recordHistory from '@/pages/recordHistory'
import authInfo from '@/pages/authInfo'
import test from '@/pages/test'

// user page

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: doctor,
      children: [{
        path: '',
        redirect: 'homePage',
      }, {
        path: 'homePage',
        component: homePage,
      }, {
        path: 'personalAccounts',
        component: personalAccounts
      }, {
        path: 'login',
        component: login
      }, {
        path: 'pendingReply',
        component: pendingReply
      }, {
        path: 'studio',
        component: studio
      }, {
        path: 'editStudio',
        component: editStudio
      }, {
        path: 'my',
        component: my
      }, {
        path: 'invite',
        component: invite
      }, {
        path: 'mall',
        component: mall
      }, {
        path: 'invitePatients',
        component: invitePatients
      }, {
        path: 'patientList',
        component: patientList
      }, {
        path: 'patientRecord',
        component: patientRecord
      }, {
        path: 'memberManage',
        component: memberManage
      }, {
        path: 'joinStudio',
        component: joinStudio
      }, {
        path: 'medicalRecord',
        component: medicalRecord
      }, {
        path: 'assessmentScale',
        component: assessmentScale
      }, {
        path: 'scaleHistory',
        component: scaleHistory
      }, {
        path: 'inquiryDetail',
        component: inquiryDetail
      }, {
        path: 'recordPhoto',
        component: recordPhoto
      }, {
        path: 'pulmonaryData',
        component: pulmonaryData
      }, {
        path: 'inquiryPrice',
        component: inquiryPrice
      }, {
        path: 'caseShare',
        component: caseShare
      }, {
        path: 'caseDetails',
        component: caseDetails
      }, {
        path: 'myStudio',
        component: myStudio
      }, {
        path: 'recordHistory',
        component: recordHistory
      }, {
        path: 'authInfo',
        component: authInfo
      }]
    },
  ]
})
