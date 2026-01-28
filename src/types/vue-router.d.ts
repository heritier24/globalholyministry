declare module 'vue-router' {
  import { Component } from 'vue'

  export interface RouteRecordRaw {
    path: string
    name?: string
    component?: Component
    components?: { [name: string]: Component }
    redirect?: string | Location
    alias?: string | string[]
    children?: RouteRecordRaw[]
    meta?: any
    beforeEnter?: (to: Route, from: Route, next: Function) => void
    props?: boolean | Object | Function
  }

  export interface Route {
    path: string
    name?: string
    params?: { [key: string]: any }
    query?: { [key: string]: any }
    hash?: string
    fullPath: string
    matched: RouteRecord[]
    meta?: any
  }

  export function createRouter(options: {
    history: any
    routes: RouteRecordRaw[]
  }): any

  export function createWebHistory(base?: string): any

  export const useRouter: () => any
  export const useRoute: () => Route
}
