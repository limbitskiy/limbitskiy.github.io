import{D as a,O as C,I as D,Z as g,U as x,R as k,s as z,h as B,i as L,o as c,v as S,w as E,c as p,b as h,j as F,T as I,p as b,m as v,r as y,t as _,a as m,e as f,l as P}from"./index-f475b71d.js";function T(e,t){const{onFocusIn:i,onFocusOut:l}=t.value||{};e.$_pfocustrap_mutationobserver=new MutationObserver(o=>{o.forEach(n=>{if(n.type==="childList"&&!e.contains(document.activeElement)){const r=s=>{const u=a.isFocusableElement(s)?s:a.getFirstFocusableElement(s);return C.isNotEmpty(u)?u:r(s.nextSibling)};a.focus(r(n.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=o=>i&&i(o),e.$_pfocustrap_focusoutlistener=o=>l&&l(o),e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)}function w(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)}function R(e,t){const{autoFocusSelector:i="",firstFocusableSelector:l="",autoFocus:o=!1}=t.value||{};let n=a.getFirstFocusableElement(e,`[autofocus]:not(.p-hidden-focusable)${i}`);o&&!n&&(n=a.getFirstFocusableElement(e,`:not(.p-hidden-focusable)${l}`)),a.focus(n)}function M(e){const{currentTarget:t,relatedTarget:i}=e,l=i===t.$_pfocustrap_lasthiddenfocusableelement?a.getFirstFocusableElement(t.parentElement,`:not(.p-hidden-focusable)${t.$_pfocustrap_focusableselector}`):t.$_pfocustrap_lasthiddenfocusableelement;a.focus(l)}function j(e){const{currentTarget:t,relatedTarget:i}=e,l=i===t.$_pfocustrap_firsthiddenfocusableelement?a.getLastFocusableElement(t.parentElement,`:not(.p-hidden-focusable)${t.$_pfocustrap_focusableselector}`):t.$_pfocustrap_firsthiddenfocusableelement;a.focus(l)}function A(e,t){const{tabIndex:i=0,firstFocusableSelector:l="",lastFocusableSelector:o=""}=t.value||{},n=u=>{const d=document.createElement("span");return d.classList="p-hidden-accessible p-hidden-focusable",d.tabIndex=i,d.setAttribute("aria-hidden","true"),d.setAttribute("role","presentation"),d.addEventListener("focus",u),d},r=n(M),s=n(j);r.$_pfocustrap_lasthiddenfocusableelement=s,r.$_pfocustrap_focusableselector=l,s.$_pfocustrap_firsthiddenfocusableelement=r,s.$_pfocustrap_focusableselector=o,e.prepend(r),e.append(s)}const K={mounted(e,t){const{disabled:i}=t.value||{};i||(A(e,t),T(e,t),R(e,t))},updated(e,t){const{disabled:i}=t.value||{};i&&w(e)},unmounted(e){w(e)}};var $={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:"pi pi-times"},maximizeIcon:{type:String,default:"pi pi-window-maximize"},minimizeIcon:{type:String,default:"pi pi-window-minimize"},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:D(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&g.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){e.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&g.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&a.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusableClose=null,this.focusableMax=null},onAfterLeave(){this.autoZIndex&&g.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(e){this.dismissableMask&&this.modal&&this.mask===e.target&&this.close()},focus(){const e=i=>i.querySelector("[autofocus]");let t=this.$slots.footer&&e(this.footerContainer);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=this.$slots.default&&e(this.content),t||(this.maximizable?(this.focusableMax=!0,t=this.maximizableButton):(this.focusableClose=!0,t=this.closeButton)))),t&&a.focus(t)},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?a.addClass(document.body,"p-overflow-hidden"):a.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&a.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&a.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},footerContainerRef(e){this.footerContainer=e},maximizableRef(e){this.maximizableButton=e},closeButtonRef(e){this.closeButton=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){a.hasClass(e.target,"p-dialog-header-icon")||a.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",a.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=a.getOuterWidth(this.container),i=a.getOuterHeight(this.container),l=e.pageX-this.lastPageX,o=e.pageY-this.lastPageY,n=this.container.getBoundingClientRect(),r=n.left+l,s=n.top+o,u=a.getViewport();this.container.style.position="fixed",this.keepInViewport?(r>=this.minX&&r+t<u.width&&(this.lastPageX=e.pageX,this.container.style.left=r+"px"),s>=this.minY&&s+i<u.height&&(this.lastPageY=e.pageY,this.container.style.top=s+"px")):(this.lastPageX=e.pageX,this.container.style.left=r+"px",this.lastPageY=e.pageY,this.container.style.top=s+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,a.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon",{[this.maximizeIcon]:!this.maximized,[this.minimizeIcon]:this.maximized}]},ariaId(){return x()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return x()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:k,focustrap:K},components:{Portal:z}};const X=["aria-labelledby","aria-modal"],Y=["id"],N={class:"p-dialog-header-icons"},V=["autofocus","tabindex"],O=["autofocus","aria-label"];function H(e,t,i,l,o,n){const r=B("Portal"),s=L("ripple"),u=L("focustrap");return c(),S(r,{appendTo:i.appendTo},{default:E(()=>[o.containerVisible?(c(),p("div",{key:0,ref:n.maskRef,class:h(n.maskClass),onClick:t[3]||(t[3]=(...d)=>n.onMaskClick&&n.onMaskClick(...d))},[F(I,{name:"p-dialog",onBeforeEnter:n.onBeforeEnter,onEnter:n.onEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:E(()=>[i.visible?b((c(),p("div",v({key:0,ref:n.containerRef,class:n.dialogClass,role:"dialog","aria-labelledby":n.ariaLabelledById,"aria-modal":i.modal},e.$attrs),[i.showHeader?(c(),p("div",{key:0,ref:n.headerContainerRef,class:"p-dialog-header",onMousedown:t[2]||(t[2]=(...d)=>n.initDrag&&n.initDrag(...d))},[y(e.$slots,"header",{},()=>[i.header?(c(),p("span",{key:0,id:n.ariaLabelledById,class:"p-dialog-title"},_(i.header),9,Y)):m("",!0)]),f("div",N,[i.maximizable?b((c(),p("button",{key:0,ref:n.maximizableRef,autofocus:o.focusableMax,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[0]||(t[0]=(...d)=>n.maximize&&n.maximize(...d)),type:"button",tabindex:i.maximizable?"0":"-1"},[f("span",{class:h(n.maximizeIconClass)},null,2)],8,V)),[[s]]):m("",!0),i.closable?b((c(),p("button",v({key:1,ref:n.closeButtonRef,autofocus:o.focusableClose,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[1]||(t[1]=(...d)=>n.close&&n.close(...d)),"aria-label":n.closeAriaLabel,type:"button"},i.closeButtonProps),[f("span",{class:h(["p-dialog-header-close-icon",i.closeIcon])},null,2)],16,O)),[[s]]):m("",!0)])],544)):m("",!0),f("div",v({ref:n.contentRef,class:n.contentStyleClass,style:i.contentStyle},i.contentProps),[y(e.$slots,"default")],16),i.footer||e.$slots.footer?(c(),p("div",{key:1,ref:n.footerContainerRef,class:"p-dialog-footer"},[y(e.$slots,"footer",{},()=>[P(_(i.footer),1)])],512)):m("",!0)],16,X)),[[u,{disabled:!i.modal}]]):m("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):m("",!0)]),_:3},8,["appendTo"])}function Z(e,t){t===void 0&&(t={});var i=t.insertAt;if(!(!e||typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",i==="top"&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var G=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}
.p-dialog-footer {
    flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: flex;
    align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

/* Position */
.p-dialog-left {
    justify-content: flex-start;
}
.p-dialog-right {
    justify-content: flex-end;
}
.p-dialog-top {
    align-items: flex-start;
}
.p-dialog-topleft {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-dialog-topright {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-dialog-bottom {
    align-items: flex-end;
}
.p-dialog-bottomleft {
    justify-content: flex-start;
    align-items: flex-end;
}
.p-dialog-bottomright {
    justify-content: flex-end;
    align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`;Z(G);$.render=H;export{$ as s};
