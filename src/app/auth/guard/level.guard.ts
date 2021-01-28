import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

// LevelGuard 主要防止用户从浏览器输入URL进入页面，用户权限不够也可以把菜单隐藏掉

@Injectable({
  providedIn: 'root',
})
export class LevelGuard implements CanActivate {

  levelMenu = {
    1: ['home', 'users', 'product'],
    2: ['home', 'product'],
  };

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = sessionStorage.getItem('token');
    const level = token == 'admin' ? 1 : 2;
    const url = route.url.toString();

    if (this.levelMenu[level].includes(url)) {
      return true;
    }

    alert('你权限不够!!');
    return false;
  }
}
