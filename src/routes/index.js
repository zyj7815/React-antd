import Home from '../views/home/home'

import Button from '../views/ui/button'
import MyProgress from '../views/ui/progress'
import MyModal from '../views/ui/modal'
import Notifications from '../views/ui/notification'
import Tab from '../views/ui/tabs'

import BasicAnimation from '../views/animation/basicTable'
import ExampleAnimation from '../views/animation/exampleTable'

import BasicTable from '../views/table/basicTable'
import AdvancedTable from '../views/table/advancedTable'

import BasicForm from '../views/form/basicForm'

import Echart from '../views/chart/echarts'
import Rchart from '../views/chart/recharts'

import LeafletMaker from '../views/leaflet/leaflet-marker'
import LeafletCluster from '../views/leaflet/leaflet-cluster'
import LeafletDraw from '../views/leaflet/leaflet-draw'

import CanvasBasic from '../views/canvas/basic'

const Routes = [
        { 
            link: "/main/home", title: "首页",
            icon: "home", component: Home
        },
        { 
            link: "", title: "UI", key: "ui", icon: "bulb",
            subMenu: [
                { link: "/ui/button", title: "按钮", component: Button },
                { link: "/ui/progress", title: "进度条", component: MyProgress },
                { link: "/ui/modal", title: "对话框", component: MyModal },
                { link: "/ui/notification", title: "通知提醒框", component: Notifications },
                { link: "/ui/tabs", title: "标签页", component: Tab },

            ]
        },
        {
            link: "", title: "动画", key: "animation", icon: "rocket",
            subMenu: [
                { link: "/animation/basicAnimation", title: "基础动画", component: BasicAnimation },
                { link: "/animation/exampleAnimation", title: "动画案例", component: ExampleAnimation }
            ]
        },
        {
            link: "", title: "表格", key: "table", icon: "table",
            subMenu: [
                { link: "/table/basicTable", title: "基础表格", component: BasicTable },
                { link: "/table/advancedTable", title: "高级表格", component: AdvancedTable },
            ]
        },
        {
            link: "", title: "表单", key: "form", icon: "form",
            subMenu: [
                { link: "/form/basicForm", title: "基础表单", component: BasicForm }
            ]
        },
        {
            link: "", title: "图表", key: "chart", icon: "area-chart",
            subMenu: [
                { link: "/chart/echart", title: "echarts", component: Echart },
                { link: "/chart/rchart", title: "rcharts", component: Rchart }
            ]
        },
        {
            link: "", title: "Leaflet", key: "leaflet", icon: "area-chart",
            subMenu: [
                {link: "/leaflet/marker", title: '坐标点', component: LeafletMaker},
                {link: "/leaflet/cluster", title: '聚合', component: LeafletCluster},
                {link: "/leaflet/draw", title: '画图', component: LeafletDraw},
            ]
        },
        {
            link: "", title: "Canvas", key: "canvas", icon: "area-chart",
            subMenu: [
                {link: "/canvas/basic", title: '基础', component: CanvasBasic},
            ]
        }
]

export default Routes