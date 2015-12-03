///<reference path='ISourceComponent.ts'/>
module fx.core.component {
    export class TextFileSource implements fx.core.component.ISourceComponent {
        name:string
        type:string
        html:string
        singleClickEvent():void {}
        doubleClickEvent():void {}
        sourceSpecificProperty:string
    }
}
