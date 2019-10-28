import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { GridItemsComponent } from './components/grid-items/container/grid-items.component';

export const routes: Routes = [
    {
        path: '',
        component: GridItemsComponent
    },
    {
        path: 'items',
        component: GridItemsComponent
    },
    {
        path: 'items/:id',
        component: GridItemsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}