import { Routes} from '@angular/router'
import { AcessoComponent } from './Acesso/acesso-component/acesso-component.component';
import { HomeComponent } from './Home/home/home.component';
import { AutenticacaoGaurd } from './autenticacao-guard.servie';

export const ROUTES: Routes = [
    {path: '', component: AcessoComponent},
    {path: 'home', component: HomeComponent, canActivate: [AutenticacaoGaurd]},
]