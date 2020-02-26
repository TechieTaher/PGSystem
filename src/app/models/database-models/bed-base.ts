import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BedBase {

//#region bedId Prop
        @prop()
        bedId : number;
//#endregion bedId Prop


//#region roomId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        roomId : number;
//#endregion roomId Prop


//#region bedStatus Prop
        @required()
        bedStatus : boolean;
//#endregion bedStatus Prop


//#region bedPrice Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        bedPrice : number;
//#endregion bedPrice Prop





}