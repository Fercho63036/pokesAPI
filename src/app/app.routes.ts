import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/pokedex',
        pathMatch: 'full'
    },
    {
        path: 'pokedex',
        loadChildren: () => import('./features/pokedex/pokedex.routes').then(m => m.POKEDEX_ROUTES)
    },
//   {
//     path: 'pokemon/:id',
//     loadChildren: () => import('./features/detalle-pokemon/detalle-pokemon.routes').then(m => m.DETALLE_POKEMON_ROUTES)
//   },
//   {
//     path: 'tipos',
//     loadChildren: () => import('./features/explorador-tipos/explorador-tipos.routes').then(m => m.EXPLORADOR_TIPOS_ROUTES)
//   },
    {
        path: 'calculadora-combate',
        loadChildren: () => import('./features/calculadora-combate/calculadora-combate.routes').then(m => m.CALCULADORA_COMBATE_ROUTES)
    },
//   {
//     path: 'evoluciones',
//     loadChildren: () => import('./features/cadenas-evolutivas/cadenas-evolutivas.routes').then(m => m.CADENAS_EVOLUTIVAS_ROUTES)
//   },
//   {
//     path: 'habilidades',
//     loadChildren: () => import('./features/habilidades/habilidades.routes').then(m => m.HABILIDADES_ROUTES)
//   },
//   {
//     path: 'movimientos',
//     loadChildren: () => import('./features/movimientos/movimientos.routes').then(m => m.MOVIMIENTOS_ROUTES)
//   },
//   {
//     path: 'regiones',
//     loadChildren: () => import('./features/regiones/regiones.routes').then(m => m.REGIONES_ROUTES)
//   },
//   {
//     path: 'objetos',
//     loadChildren: () => import('./features/objetos/objetos.routes').then(m => m.OBJETOS_ROUTES)
//   },
//   {
//     path: 'equipos',
//     loadChildren: () => import('./features/constructor-equipos/constructor-equipos.routes').then(m => m.CONSTRUCTOR_EQUIPOS_ROUTES)
//   },
    {
        path: 'bayas',
        loadChildren: () => import('./features/bayas/bayas.routes').then(m => m.BAYAS_ROUTES)
    },
//   {
//     path: 'ubicaciones',
//     loadChildren: () => import('./features/ubicaciones/ubicaciones.routes').then(m => m.UBICACIONES_ROUTES)
//   },
//   {
//     path: 'generaciones',
//     loadChildren: () => import('./features/generaciones/generaciones.routes').then(m => m.GENERACIONES_ROUTES)
//   },
//   {
//     path: 'favoritos',
//     loadChildren: () => import('./features/favoritos/favoritos.routes').then(m => m.FAVORITOS_ROUTES)
//   },
    {
        path: '**',
        redirectTo: '/pokedex'
    }
];