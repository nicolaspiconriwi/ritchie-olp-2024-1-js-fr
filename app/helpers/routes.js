import { LoginPage } from '../scenes/public/login';
import { HomeScene } from '../scenes/private/home';
import { ReportScene } from '../scenes/private/reports';
import { SettingsScene } from '../scenes/private/settings';
import { UserScene } from '../scenes/private/users';
import { ForumScene } from '../scenes/private/forum';
import { Showcases } from '../scenes/private/showcases';
import { RegisterPage } from '../scenes/public/register';
import { GameScene } from '../scenes/private/games/games';
import { ProfileScene } from '../scenes/private/profile/profile';
import { PostScene } from '../scenes/private/posts/posts';
import { ChallengeScene, CreateChallengeScene } from '../scenes/private/challenges';

export const routes = {
    private: [
        { path: '/dashboard', component: HomeScene },
        { path: '/dashboard/reports', component: ReportScene },
        { path: '/dashboard/settings', component: SettingsScene },
        { path: '/dashboard/users', component: UserScene },
        { path: '/dashboard/forum', component: ForumScene},
        { path: '/dashboard/show-cases', component: Showcases },
        { path: '/dashboard/games', component: GameScene },
        { path: '/dashboard/profile', component: ProfileScene },
        { path: '/dashboard/posts', component: PostScene },
        { path: '/dashboard/challenges', component: ChallengeScene},
        { path: '/dashboard/challenges/create', component: CreateChallengeScene},
        // { path: '/dashboard/routes/languages', component: LanguageByRouteScene},
        // { path: '/dashboard/routes/languages/modules', component: ModulesByLanguage}
    ],
    public: [
        { path: '/login', component: LoginPage },
        { path: '/register', component: RegisterPage },
        { path: '/profile', component: ProfileScene },
    ]
};