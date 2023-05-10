import Admin from "./pages/Admin"
import AudiencePage from "./pages/AudiencePage"
import Auth from "./pages/Auth"
import PlansPage from "./pages/PlansPage"
import TeacherPage from "./pages/TeacherPage"
import WorksPage from "./pages/WorksPage"
import { ADMIN_ROUTE, AUDIENCE_ROUTE, LOGIN_ROUTE, PLANS_ROUTE, REGISTRATION_ROUTE, TEACHER_ROUTE, WORKS_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: TEACHER_ROUTE,
        Component: TeacherPage
    },
    {
        path: AUDIENCE_ROUTE,
        Component: AudiencePage
    },
    {
        path: WORKS_ROUTE,
        Component: WorksPage
    },
    {
        path: PLANS_ROUTE,
        Component: PlansPage
    }
]