import Vue from 'vue'
import Router from 'vue-router'

import HomeComponent from '../components/Home.vue';
import NswComponent from '../components/jurisdictions/Nsw.vue';
import VicComponent from '../components/jurisdictions/Vic.vue';
import QldComponent from '../components/jurisdictions/Qld.vue';
import ActComponent from '../components/jurisdictions/Act.vue';
import WasComponent from '../components/jurisdictions/Was.vue';
import TasComponent from '../components/jurisdictions/Tas.vue';
import NtComponent from '../components/jurisdictions/Nt.vue';
import LoginComponent from '../components/user/login.vue';
import UserRegistrationComponent from '../components/user/user_registration.vue';
import UserReportComponent from '../components/reports/User_report.vue';

Vue.use(Router)

export const routes = [
    {
        path: '/',
        redirect: {
            name: "login"
        }
    },
    {
        path: "/login",
        name: "login",
        component: LoginComponent
    },
    {
        path: '/home',
        name: "home",
        component: HomeComponent
    },
    {
        path: '/report',
        name: "report",
        component: UserReportComponent
    },
    {
        path: '/registration',
        name: "registration",
        component: UserRegistrationComponent
    },
    { path: '/nsw', component: NswComponent },
    { path: '/vic', component: VicComponent },
    { path: '/qld', component: QldComponent },
    { path: '/act', component: ActComponent },
    { path: '/wa', component: WasComponent },
    { path: '/tas', component: TasComponent },
    { path: '/nt', component: NtComponent },

];

export default routes
