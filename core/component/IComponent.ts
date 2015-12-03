module fx.core.component {
    export interface IComponent {
            name:string,
            type:string,
            html:string,
            singleClickEvent():void,
            doubleClickEvent():void
    }
}



