"use strict";(self.webpackChunkmy_strapi=self.webpackChunkmy_strapi||[]).push([[2323],{42323:(W,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var P=_(92132),o=_(74179),n=_(52210),T=_(21272),R=_(2129),C=_(5409),i=_(44347),v=_(15126),U=_(63299),B=_(67014),t=_(59080),l=_(79275),L=_(14718),I=_(82437),d=_(61535),O=_(5790),A=_(12083),M=_(35223),E=_(74930),D=_(2600),K=_(48940),a=_(41286),h=_(56336),r=_(13426),f=_(84624),g=_(77965),S=_(54257),y=_(71210),j=_(51187),N=_(39404),V=_(58692),F=_(501),x=_(57646),$=_(23120),G=_(44414),H=_(25962),z=_(14664),X=_(42588),c=_(90325),Q=_(62785),Y=_(87443),J=_(41032),Z=_(22957),e=_(93179),u=_(73055),p=_(15747),k=_(85306),w=_(26509),b=_(32058),q=_(81185),__=_(82261),E_=_(62482),t_=_(71850),s_=_(97529),O_=_(53323),M_=_(72810),D_=_(18022),a_=_(67031);const m=()=>((0,n.u)(),(0,P.jsx)(o.e,{}))},52210:(W,s,_)=>{_.d(s,{u:()=>B});var P=_(21272),o=_(2129),n=_(67031),T=_(54894),R=_(17703),C=_(44347);const i="strapi-notification-seat-limit",v="https://cloud.strapi.io/profile/billing",U="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,T.A)(),{license:l,isError:L,isLoading:I}=(0,C.m)(),d=(0,o.hN)(),{pathname:O}=(0,R.zy)(),{enforcementUserCount:A,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=l??{};P.useEffect(()=>{if(L||I)return;const K=!n(M)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let a;E==="OVER_LIMIT"?a="warning":E==="AT_LIMIT"&&(a="softWarning"),K&&d({type:a,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:A,permittedSeats:M}),link:{url:D?v:U,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,I,M,E,A,D,L])}}}]);
