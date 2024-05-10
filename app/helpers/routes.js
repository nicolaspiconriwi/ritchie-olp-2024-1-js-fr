import { LoginPage } from '../scenes/public/login';
import { HomeScene } from '../scenes/private/home';
import { ReportScene } from '../scenes/private/reports';


export const routes = {
    private: [
        { path: '/dashboard', component: HomeScene },
        { path: '/dashboard/reports', component: ReportScene },
    ],
    public: [
        { path: '/login', component: LoginPage }
    ]
};