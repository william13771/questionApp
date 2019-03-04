import Login from "../views/login";

export default [
    {
        path: "/",
        component: Login
    },
    {
        path: "/login",
        redirect: "/"
    },
    {
        path: "/layout",
        component: () => import("../views/layout/Layouts.vue"),
        children: [
            {
                path: "",
                component: () => import("../views/index")
            },
            {
                path: "index",
                component: () => import("../views/index")
            },
            {
                path: "login",
                component: Login
            },
            {
                path: "/member/member-list",
                component: () => import("../views/member/member-list")
            },
            {
                path: "/knowledge/knowledge-list",
                component: () => import("../views/knowledge/knowledge-list")
            },
            {
                path: "/project/project-list",
                component: () => import("../views/project/project-list")
            },
            {
                path: "/expert/expert-list",
                component: () => import("../views/expert/expert-list")
            },
            {
                path: "/question/question-list",
                component: () => import("../views/question/question-list")
            },
            {
                path: "/permission/user-manager",
                component: () => import("../views/permission/UserManager")
            },
            {
                path: "/permission/account-manager",
                component: () => import("../views/permission/AccountManager")
            }
        ]
    }
];
