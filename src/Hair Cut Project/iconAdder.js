import { CgSmartHomeCooker } from "react-icons/cg";

class SideBarContent{
    static Counter=0;
    constructor(header){
        SideBarContent.Counter++;
        this.value=header;
        this.icon=<CgSmartHomeCooker />;
    }
    addIcon(item){
        this.icon=item;
    }
}
   
    export {SideBarContent}