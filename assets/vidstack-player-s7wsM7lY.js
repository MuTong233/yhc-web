import{H as A,M as L,u as y,e as c,s as i,c as v,a as H,d as j}from"./vidstack-sKeoTFgw-R0FUaXKr.js";import"./app-FseSN580.js";const d=class d extends A(HTMLElement,L){constructor(){super(...arguments),this.A=null,this.Vj=null}onSetup(){this.a=y(),this.setAttribute("keep-alive","")}onDestroy(){var t,e;(t=this.Vj)==null||t.remove(),this.Vj=null,(e=this.A)==null||e.remove(),this.A=null}onConnect(){c(()=>{var a,r,m;const t=this.$state.loader(),e=t==null?void 0:t.canPlay({src:"",type:"video/youtube"}),o=t==null?void 0:t.canPlay({src:"",type:"video/vimeo"}),n=e||o,s=t?n?this.ek():t.mediaType()==="audio"?this.fk():this.Yj():null;if(this.A!==s){const V=((a=this.A)==null?void 0:a.parentElement)??this;(r=this.A)==null||r.remove(),this.A=s,s&&V.prepend(s),n&&s&&c(()=>{var f;const{$iosControls:b}=this.a,{controls:E}=this.a.$state,p=E()||b();p?((f=this.Vj)==null||f.remove(),this.Vj=null):(this.Vj=this.querySelector(".vds-blocker")??document.createElement("div"),this.Vj.classList.add("vds-blocker"),s.after(this.Vj)),i(s,"data-no-controls",!p)})}e?s==null||s.classList.add("vds-youtube"):o&&(s==null||s.classList.add("vds-vimeo")),n||((m=this.Vj)==null||m.remove(),this.Vj=null),this.load(s)})}fk(){const t=this.A instanceof HTMLAudioElement?this.A:document.createElement("audio");i(t,"preload","none"),i(t,"aria-hidden","true");const{controls:e,crossorigin:o}=this.a.$state;return c(()=>{i(t,"controls",e()),i(t,"crossorigin",o())}),t}Yj(){const t=this.A instanceof HTMLVideoElement?this.A:document.createElement("video"),{controls:e,crossorigin:o,poster:n}=this.a.$state,{$iosControls:s}=this.a,a=v(()=>e()||s()?"":null),r=v(()=>n()&&(e()||s())?n():null);return c(()=>{i(t,"controls",a()),i(t,"crossorigin",o()),i(t,"poster",r())}),t}ek(){return this.A instanceof HTMLIFrameElement?this.A:document.createElement("iframe")}};d.tagName="media-provider";let h=d;const l=class l extends A(HTMLElement,H){};l.tagName="media-player",l.attrs={preferNativeHLS:"prefer-native-hls"};let u=l;j(u);j(h);
