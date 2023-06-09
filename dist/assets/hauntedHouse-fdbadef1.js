(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Or="148",Nn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},On={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cl=0,ta=1,hl=2,yo=1,Mo=2,Si=3,Tn=0,Le=1,zr=2,Hi=3,en=0,ti=1,Tr=2,ea=3,na=4,ul=5,Kn=100,dl=101,fl=102,ia=103,sa=104,pl=200,ml=201,gl=202,_l=203,bo=204,So=205,xl=206,vl=207,yl=208,Ml=209,bl=210,Sl=0,wl=1,Tl=2,Er=3,El=4,Al=5,Cl=6,Ll=7,wo=0,Pl=1,Dl=2,Ze=0,Rl=1,Il=2,Fl=3,Nl=4,Ol=5,To=300,ni=301,ii=302,Ar=303,Cr=304,_s=306,Zt=1e3,Fe=1001,Lr=1002,ge=1003,ra=1004,Gs=1005,Ce=1006,zl=1007,Pi=1008,En=1009,Ul=1010,Bl=1011,Eo=1012,kl=1013,Mn=1014,bn=1015,Di=1016,Vl=1017,Gl=1018,ei=1020,Hl=1021,Wl=1022,Ne=1023,Xl=1024,ql=1025,Sn=1026,si=1027,$l=1028,jl=1029,Yl=1030,Zl=1031,Kl=1033,Hs=33776,Ws=33777,Xs=33778,qs=33779,aa=35840,oa=35841,la=35842,ca=35843,Jl=36196,ha=37492,ua=37496,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,xa=37814,va=37815,ya=37816,Ma=37817,ba=37818,Sa=37819,wa=37820,Ta=37821,Ea=36492,An=3e3,kt=3001,Ql=3200,tc=3201,Ao=0,ec=1,Oe="srgb",Ri="srgb-linear",$s=7680,nc=519,Aa=35044,js=35048,Ca="300 es",Pr=1035;class Dn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let La=1234567;const Ci=Math.PI/180,fs=180/Math.PI;function li(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ue[r&255]+ue[r>>8&255]+ue[r>>16&255]+ue[r>>24&255]+"-"+ue[t&255]+ue[t>>8&255]+"-"+ue[t>>16&15|64]+ue[t>>24&255]+"-"+ue[e&63|128]+ue[e>>8&255]+"-"+ue[e>>16&255]+ue[e>>24&255]+ue[n&255]+ue[n>>8&255]+ue[n>>16&255]+ue[n>>24&255]).toLowerCase()}function _e(r,t,e){return Math.max(t,Math.min(e,r))}function Ur(r,t){return(r%t+t)%t}function ic(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function sc(r,t,e){return r!==t?(e-r)/(t-r):0}function Li(r,t,e){return(1-e)*r+e*t}function rc(r,t,e,n){return Li(r,t,1-Math.exp(-e*n))}function ac(r,t=1){return t-Math.abs(Ur(r,t*2)-t)}function oc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function lc(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function cc(r,t){return r+Math.floor(Math.random()*(t-r+1))}function hc(r,t){return r+Math.random()*(t-r)}function uc(r){return r*(.5-Math.random())}function dc(r){r!==void 0&&(La=r);let t=La+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fc(r){return r*Ci}function pc(r){return r*fs}function Dr(r){return(r&r-1)===0&&r!==0}function mc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ps(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gc(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),m=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*_,c*m,a*l);break;case"YXY":r.set(c*m,a*h,c*_,a*l);break;case"ZYZ":r.set(c*_,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wi(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xe(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ys=Object.freeze({__proto__:null,DEG2RAD:Ci,RAD2DEG:fs,generateUUID:li,clamp:_e,euclideanModulo:Ur,mapLinear:ic,inverseLerp:sc,lerp:Li,damp:rc,pingpong:ac,smoothstep:oc,smootherstep:lc,randInt:cc,randFloat:hc,randFloatSpread:uc,seededRandom:dc,degToRad:fc,radToDeg:pc,isPowerOfTwo:Dr,ceilPowerOfTwo:mc,floorPowerOfTwo:ps,setQuaternionFromProperEuler:gc,normalize:xe,denormalize:wi});class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Te{constructor(){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],_=n[8],p=i[0],f=i[3],g=i[6],w=i[1],y=i[4],M=i[7],S=i[2],L=i[5],R=i[8];return s[0]=o*p+a*w+c*S,s[3]=o*f+a*y+c*L,s[6]=o*g+a*M+c*R,s[1]=l*p+h*w+u*S,s[4]=l*f+h*y+u*L,s[7]=l*g+h*M+u*R,s[2]=d*p+m*w+_*S,s[5]=d*f+m*y+_*L,s[8]=d*g+m*M+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,_=e*u+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return t[0]=u*p,t[1]=(i*l-h*n)*p,t[2]=(a*n-i*o)*p,t[3]=d*p,t[4]=(h*e-i*c)*p,t[5]=(i*s-a*e)*p,t[6]=m*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zs.makeScale(t,e)),this}rotate(t){return this.premultiply(Zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zs.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new Te;function Co(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ii(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ks={[Oe]:{[Ri]:wn},[Ri]:{[Oe]:us}},pe={legacyMode:!0,get workingColorSpace(){return Ri},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(Ks[t]&&Ks[t][e]!==void 0){const n=Ks[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},Lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ee={r:0,g:0,b:0},De={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function Js(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function Xi(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=Ur(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Js(o,s,t+1/3),this.g=Js(o,s,t),this.b=Js(o,s,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pe.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Oe){const n=Lo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return pe.fromWorkingColorSpace(Xi(this,ee),t),_e(ee.r*255,0,255)<<16^_e(ee.g*255,0,255)<<8^_e(ee.b*255,0,255)<<0}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Xi(this,ee),e);const n=ee.r,i=ee.g,s=ee.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Xi(this,ee),e),t.r=ee.r,t.g=ee.g,t.b=ee.b,t}getStyle(t=Oe){return pe.fromWorkingColorSpace(Xi(this,ee),t),t!==Oe?`color(${t} ${ee.r} ${ee.g} ${ee.b})`:`rgb(${ee.r*255|0},${ee.g*255|0},${ee.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(De),De.h+=t,De.s+=e,De.l+=n,this.setHSL(De.h,De.s,De.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(De),t.getHSL(Wi);const n=Li(De.h,Wi.h,e),i=Li(De.s,Wi.s,e),s=Li(De.l,Wi.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ut.NAMES=Lo;let zn;class Po{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zn===void 0&&(zn=Ii("canvas")),zn.width=t.width,zn.height=t.height;const n=zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ii("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=wn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Do{constructor(t=null){this.isSource=!0,this.uuid=li(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Qs(i[o].image)):s.push(Qs(i[o]))}else s=Qs(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Qs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Po.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _c=0;class ve extends Dn{constructor(t=ve.DEFAULT_IMAGE,e=ve.DEFAULT_MAPPING,n=Fe,i=Fe,s=Ce,o=Pi,a=Ne,c=En,l=ve.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=li(),this.name="",this.source=new Do(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==To)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zt:t.x=t.x-Math.floor(t.x);break;case Fe:t.x=t.x<0?0:1;break;case Lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zt:t.y=t.y-Math.floor(t.y);break;case Fe:t.y=t.y<0?0:1;break;case Lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ve.DEFAULT_IMAGE=null;ve.DEFAULT_MAPPING=To;ve.DEFAULT_ANISOTROPY=1;class Ht{constructor(t=0,e=0,n=0,i=1){Ht.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],_=c[9],p=c[2],f=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,M=(m+1)/2,S=(g+1)/2,L=(h+d)/4,R=(u+p)/4,x=(_+f)/4;return y>M&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=L/n,s=R/n):M>S?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=L/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=R/s,i=x/s),this.set(n,i,s,e),this}let w=Math.sqrt((f-_)*(f-_)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(f-_)/w,this.y=(u-p)/w,this.z=(d-h)/w,this.w=Math.acos((l+m+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cn extends Dn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ht(0,0,t,e),this.scissorTest=!1,this.viewport=new Ht(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new ve(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ce,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Do(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ro extends ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xc extends ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class an{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],m=s[o+1],_=s[o+2],p=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=p;return}if(u!==p||c!==d||l!==m||h!==_){let f=1-a;const g=c*d+l*m+h*_+u*p,w=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const S=Math.sqrt(y),L=Math.atan2(S,g*w);f=Math.sin(f*L)/S,a=Math.sin(a*L)/S}const M=a*w;if(c=c*f+d*M,l=l*f+m*M,h=h*f+_*M,u=u*f+p*M,f===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return t[e]=a*_+h*u+c*m-l*d,t[e+1]=c*_+h*d+l*u-a*m,t[e+2]=l*_+h*m+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),m=c(i/2),_=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"YZX":this._x=d*h*u+l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u-d*m*_;break;case"XZY":this._x=d*h*u-l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,h=c*n+a*e-s*i,u=c*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=l*c+d*-s+h*-a-u*-o,this.y=h*c+d*-o+u*-s-l*-a,this.z=u*c+d*-a+l*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tr.copy(this).projectOnVector(t),this.sub(tr)}reflect(t){return this.sub(tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tr=new C,Pa=new an;class Ui{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const h=t[c],u=t[c+1],d=t[c+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const h=t.getX(c),u=t.getY(c),d=t.getZ(c);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)dn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(dn)}else n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox),er.applyMatrix4(t.matrixWorld),this.union(er);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mi),qi.subVectors(this.max,mi),Un.subVectors(t.a,mi),Bn.subVectors(t.b,mi),kn.subVectors(t.c,mi),Ke.subVectors(Bn,Un),Je.subVectors(kn,Bn),fn.subVectors(Un,kn);let e=[0,-Ke.z,Ke.y,0,-Je.z,Je.y,0,-fn.z,fn.y,Ke.z,0,-Ke.x,Je.z,0,-Je.x,fn.z,0,-fn.x,-Ke.y,Ke.x,0,-Je.y,Je.x,0,-fn.y,fn.x,0];return!nr(e,Un,Bn,kn,qi)||(e=[1,0,0,0,1,0,0,0,1],!nr(e,Un,Bn,kn,qi))?!1:($i.crossVectors(Ke,Je),e=[$i.x,$i.y,$i.z],nr(e,Un,Bn,kn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return dn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(He[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),He[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),He[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),He[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),He[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),He[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),He[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),He[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(He),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const He=[new C,new C,new C,new C,new C,new C,new C,new C],dn=new C,er=new Ui,Un=new C,Bn=new C,kn=new C,Ke=new C,Je=new C,fn=new C,mi=new C,qi=new C,$i=new C,pn=new C;function nr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){pn.fromArray(r,s);const a=i.x*Math.abs(pn.x)+i.y*Math.abs(pn.y)+i.z*Math.abs(pn.z),c=t.dot(pn),l=e.dot(pn),h=n.dot(pn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const vc=new Ui,gi=new C,ir=new C;class xs{constructor(t=new C,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gi.subVectors(t,this.center);const e=gi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ir.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gi.copy(t.center).add(ir)),this.expandByPoint(gi.copy(t.center).sub(ir))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const We=new C,sr=new C,ji=new C,Qe=new C,rr=new C,Yi=new C,ar=new C;class Io{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,We)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=We.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(We.copy(this.direction).multiplyScalar(e).add(this.origin),We.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sr.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),Qe.copy(this.origin).sub(sr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ji),a=Qe.dot(this.direction),c=-Qe.dot(ji),l=Qe.lengthSq(),h=Math.abs(1-o*o);let u,d,m,_;if(h>0)if(u=o*c-a,d=o*a-c,_=s*h,u>=0)if(d>=-_)if(d<=_){const p=1/h;u*=p,d*=p,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(ji).multiplyScalar(d).add(sr),m}intersectSphere(t,e){We.subVectors(t.center,this.origin);const n=We.dot(this.direction),i=We.dot(We)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,We)!==null}intersectTriangle(t,e,n,i,s){rr.subVectors(e,t),Yi.subVectors(n,t),ar.crossVectors(rr,Yi);let o=this.direction.dot(ar),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qe.subVectors(this.origin,t);const c=a*this.direction.dot(Yi.crossVectors(Qe,Yi));if(c<0)return null;const l=a*this.direction.dot(rr.cross(Qe));if(l<0||c+l>o)return null;const h=-a*Qe.dot(ar);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,a,c,l,h,u,d,m,_,p,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=m,g[7]=_,g[11]=p,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Vn.setFromMatrixColumn(t,0).length(),s=1/Vn.setFromMatrixColumn(t,1).length(),o=1/Vn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,m=o*u,_=a*h,p=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+_*l,e[5]=d-p*l,e[9]=-a*c,e[2]=p-d*l,e[6]=_+m*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,_=l*h,p=l*u;e[0]=d+p*a,e[4]=_*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=p+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,_=l*h,p=l*u;e[0]=d-p*a,e[4]=-o*u,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=p-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,m=o*u,_=a*h,p=a*u;e[0]=c*h,e[4]=_*l-m,e[8]=d*l+p,e[1]=c*u,e[5]=p*l+d,e[9]=m*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*l,_=a*c,p=a*l;e[0]=c*h,e[4]=p-d*u,e[8]=_*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+_,e[10]=d-p*u}else if(t.order==="XZY"){const d=o*c,m=o*l,_=a*c,p=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+p,e[5]=o*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=a*h,e[10]=p*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yc,t,Mc)}lookAt(t,e,n){const i=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),tn.crossVectors(n,be),tn.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),tn.crossVectors(n,be)),tn.normalize(),Zi.crossVectors(be,tn),i[0]=tn.x,i[4]=Zi.x,i[8]=be.x,i[1]=tn.y,i[5]=Zi.y,i[9]=be.y,i[2]=tn.z,i[6]=Zi.z,i[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],_=n[2],p=n[6],f=n[10],g=n[14],w=n[3],y=n[7],M=n[11],S=n[15],L=i[0],R=i[4],x=i[8],E=i[12],D=i[1],U=i[5],G=i[9],N=i[13],I=i[2],W=i[6],Z=i[10],Q=i[14],$=i[3],K=i[7],Y=i[11],H=i[15];return s[0]=o*L+a*D+c*I+l*$,s[4]=o*R+a*U+c*W+l*K,s[8]=o*x+a*G+c*Z+l*Y,s[12]=o*E+a*N+c*Q+l*H,s[1]=h*L+u*D+d*I+m*$,s[5]=h*R+u*U+d*W+m*K,s[9]=h*x+u*G+d*Z+m*Y,s[13]=h*E+u*N+d*Q+m*H,s[2]=_*L+p*D+f*I+g*$,s[6]=_*R+p*U+f*W+g*K,s[10]=_*x+p*G+f*Z+g*Y,s[14]=_*E+p*N+f*Q+g*H,s[3]=w*L+y*D+M*I+S*$,s[7]=w*R+y*U+M*W+S*K,s[11]=w*x+y*G+M*Z+S*Y,s[15]=w*E+y*N+M*Q+S*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],p=t[7],f=t[11],g=t[15];return _*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*m-n*c*m)+p*(+e*c*m-e*l*d+s*o*d-i*o*m+i*l*h-s*c*h)+f*(+e*l*u-e*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+g*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],p=t[13],f=t[14],g=t[15],w=u*f*l-p*d*l+p*c*m-a*f*m-u*c*g+a*d*g,y=_*d*l-h*f*l-_*c*m+o*f*m+h*c*g-o*d*g,M=h*p*l-_*u*l+_*a*m-o*p*m-h*a*g+o*u*g,S=_*u*c-h*p*c-_*a*d+o*p*d+h*a*f-o*u*f,L=e*w+n*y+i*M+s*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return t[0]=w*R,t[1]=(p*d*s-u*f*s-p*i*m+n*f*m+u*i*g-n*d*g)*R,t[2]=(a*f*s-p*c*s+p*i*l-n*f*l-a*i*g+n*c*g)*R,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*m-n*c*m)*R,t[4]=y*R,t[5]=(h*f*s-_*d*s+_*i*m-e*f*m-h*i*g+e*d*g)*R,t[6]=(_*c*s-o*f*s-_*i*l+e*f*l+o*i*g-e*c*g)*R,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*m+e*c*m)*R,t[8]=M*R,t[9]=(_*u*s-h*p*s-_*n*m+e*p*m+h*n*g-e*u*g)*R,t[10]=(o*p*s-_*a*s+_*n*l-e*p*l-o*n*g+e*a*g)*R,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*m-e*a*m)*R,t[12]=S*R,t[13]=(h*p*i-_*u*i+_*n*d-e*p*d-h*n*f+e*u*f)*R,t[14]=(_*a*i-o*p*i-_*n*c+e*p*c+o*n*f-e*a*f)*R,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,_=s*u,p=o*h,f=o*u,g=a*u,w=c*l,y=c*h,M=c*u,S=n.x,L=n.y,R=n.z;return i[0]=(1-(p+g))*S,i[1]=(m+M)*S,i[2]=(_-y)*S,i[3]=0,i[4]=(m-M)*L,i[5]=(1-(d+g))*L,i[6]=(f+w)*L,i[7]=0,i[8]=(_+y)*R,i[9]=(f-w)*R,i[10]=(1-(d+p))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Vn.set(i[0],i[1],i[2]).length();const o=Vn.set(i[4],i[5],i[6]).length(),a=Vn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Re.copy(this);const l=1/s,h=1/o,u=1/a;return Re.elements[0]*=l,Re.elements[1]*=l,Re.elements[2]*=l,Re.elements[4]*=h,Re.elements[5]*=h,Re.elements[6]*=h,Re.elements[8]*=u,Re.elements[9]*=u,Re.elements[10]*=u,e.setFromRotationMatrix(Re),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){const a=this.elements,c=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,c=1/(e-t),l=1/(n-i),h=1/(o-s),u=(e+t)*c,d=(n+i)*l,m=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vn=new C,Re=new Yt,yc=new C(0,0,0),Mc=new C(1,1,1),tn=new C,Zi=new C,be=new C,Da=new Yt,Ra=new an;class Bi{constructor(t=0,e=0,n=0,i=Bi.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Da,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Bi.DefaultOrder="XYZ";Bi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Fo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bc=0;const Ia=new C,Gn=new an,Xe=new Yt,Ki=new C,_i=new C,Sc=new C,wc=new an,Fa=new C(1,0,0),Na=new C(0,1,0),Oa=new C(0,0,1),Tc={type:"added"},za={type:"removed"};class ne extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ne.DefaultUp.clone();const t=new C,e=new Bi,n=new an,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Te}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=ne.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ne.DefaultMatrixWorldAutoUpdate,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(t,e){return Gn.setFromAxisAngle(t,e),this.quaternion.premultiply(Gn),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Na,t)}rotateZ(t){return this.rotateOnAxis(Oa,t)}translateOnAxis(t,e){return Ia.copy(t).applyQuaternion(this.quaternion),this.position.add(Ia.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Na,t)}translateZ(t){return this.translateOnAxis(Oa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ki.copy(t):Ki.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xe.lookAt(_i,Ki,this.up):Xe.lookAt(Ki,_i,this.up),this.quaternion.setFromRotationMatrix(Xe),i&&(Xe.extractRotation(i.matrixWorld),Gn.setFromRotationMatrix(Xe),this.quaternion.premultiply(Gn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Tc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(za)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(za)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Xe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,t,Sc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,wc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ne.DefaultUp=new C(0,1,0);ne.DefaultMatrixAutoUpdate=!0;ne.DefaultMatrixWorldAutoUpdate=!0;const Ie=new C,qe=new C,or=new C,$e=new C,Hn=new C,Wn=new C,Ua=new C,lr=new C,cr=new C,hr=new C;class Ye{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ie.subVectors(t,e),i.cross(Ie);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ie.subVectors(i,e),qe.subVectors(n,e),or.subVectors(t,e);const o=Ie.dot(Ie),a=Ie.dot(qe),c=Ie.dot(or),l=qe.dot(qe),h=qe.dot(or),u=o*l-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,m=(l*c-a*h)*d,_=(o*h-a*c)*d;return s.set(1-m-_,_,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$e),$e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getUV(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,$e),c.set(0,0),c.addScaledVector(s,$e.x),c.addScaledVector(o,$e.y),c.addScaledVector(a,$e.z),c}static isFrontFacing(t,e,n,i){return Ie.subVectors(n,e),qe.subVectors(t,e),Ie.cross(qe).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ie.subVectors(this.c,this.b),qe.subVectors(this.a,this.b),Ie.cross(qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ye.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Hn.subVectors(i,n),Wn.subVectors(s,n),lr.subVectors(t,n);const c=Hn.dot(lr),l=Wn.dot(lr);if(c<=0&&l<=0)return e.copy(n);cr.subVectors(t,i);const h=Hn.dot(cr),u=Wn.dot(cr);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Hn,o);hr.subVectors(t,s);const m=Hn.dot(hr),_=Wn.dot(hr);if(_>=0&&m<=_)return e.copy(s);const p=m*l-c*_;if(p<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Wn,a);const f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return Ua.subVectors(s,i),a=(u-h)/(u-h+(m-_)),e.copy(i).addScaledVector(Ua,a);const g=1/(f+p+d);return o=p*g,a=d*g,e.copy(n).addScaledVector(Hn,o).addScaledVector(Wn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Ec=0;class ci extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=li(),this.name="",this.type="Material",this.blending=ti,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bo,this.blendDst=So,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Br extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qt=new C,Ji=new St;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Aa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ji.fromBufferAttribute(this,e),Ji.applyMatrix3(t),this.setXY(e,Ji.x,Ji.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.applyMatrix3(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.applyMatrix4(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.applyNormalMatrix(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.transformDirection(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Aa&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class No extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kr extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ac=0;const Ae=new Yt,ur=new ne,Xn=new C,Se=new Ui,xi=new Ui,le=new C;class Pe extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Co(t)?kr:No)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ae.makeRotationFromQuaternion(t),this.applyMatrix4(Ae),this}rotateX(t){return Ae.makeRotationX(t),this.applyMatrix4(Ae),this}rotateY(t){return Ae.makeRotationY(t),this.applyMatrix4(Ae),this}rotateZ(t){return Ae.makeRotationZ(t),this.applyMatrix4(Ae),this}translate(t,e,n){return Ae.makeTranslation(t,e,n),this.applyMatrix4(Ae),this}scale(t,e,n){return Ae.makeScale(t,e,n),this.applyMatrix4(Ae),this}lookAt(t){return ur.lookAt(t),ur.updateMatrix(),this.applyMatrix4(ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Se.setFromBufferAttribute(s),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Se.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Se.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Se.min),this.boundingBox.expandByPoint(Se.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Se.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];xi.setFromBufferAttribute(a),this.morphTargetsRelative?(le.addVectors(Se.min,xi.min),Se.expandByPoint(le),le.addVectors(Se.max,xi.max),Se.expandByPoint(le)):(Se.expandByPoint(xi.min),Se.expandByPoint(xi.max))}Se.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)le.fromBufferAttribute(a,l),c&&(Xn.fromBufferAttribute(t,l),le.add(Xn)),i=Math.max(i,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<a;D++)l[D]=new C,h[D]=new C;const u=new C,d=new C,m=new C,_=new St,p=new St,f=new St,g=new C,w=new C;function y(D,U,G){u.fromArray(i,D*3),d.fromArray(i,U*3),m.fromArray(i,G*3),_.fromArray(o,D*2),p.fromArray(o,U*2),f.fromArray(o,G*2),d.sub(u),m.sub(u),p.sub(_),f.sub(_);const N=1/(p.x*f.y-f.x*p.y);isFinite(N)&&(g.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(N),w.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(N),l[D].add(g),l[U].add(g),l[G].add(g),h[D].add(w),h[U].add(w),h[G].add(w))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let D=0,U=M.length;D<U;++D){const G=M[D],N=G.start,I=G.count;for(let W=N,Z=N+I;W<Z;W+=3)y(n[W+0],n[W+1],n[W+2])}const S=new C,L=new C,R=new C,x=new C;function E(D){R.fromArray(s,D*3),x.copy(R);const U=l[D];S.copy(U),S.sub(R.multiplyScalar(R.dot(U))).normalize(),L.crossVectors(x,U);const N=L.dot(h[D])<0?-1:1;c[D*4]=S.x,c[D*4+1]=S.y,c[D*4+2]=S.z,c[D*4+3]=N}for(let D=0,U=M.length;D<U;++D){const G=M[D],N=G.start,I=G.count;for(let W=N,Z=N+I;W<Z;W+=3)E(n[W+0]),E(n[W+1]),E(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),p=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,f),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,_=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*h;for(let g=0;g<h;g++)d[_++]=l[m++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new Yt,qn=new Io,dr=new xs,vi=new C,yi=new C,Mi=new C,fr=new C,Qi=new C,ts=new St,es=new St,ns=new St,pr=new C,is=new C;class jt extends ne{constructor(t=new Pe,e=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Qi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(fr.fromBufferAttribute(u,t),o?Qi.addScaledVector(fr,h):Qi.addScaledVector(fr.sub(e),h))}e.add(Qi)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(s),t.ray.intersectsSphere(dr)===!1)||(Ba.copy(s).invert(),qn.copy(t.ray).applyMatrix4(Ba),n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,_=u.length;m<_;m++){const p=u[m],f=i[p.materialIndex],g=Math.max(p.start,d.start),w=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=g,M=w;y<M;y+=3){const S=a.getX(y),L=a.getX(y+1),R=a.getX(y+2);o=ss(this,f,t,qn,l,h,S,L,R),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,f=_;p<f;p+=3){const g=a.getX(p),w=a.getX(p+1),y=a.getX(p+2);o=ss(this,i,t,qn,l,h,g,w,y),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,_=u.length;m<_;m++){const p=u[m],f=i[p.materialIndex],g=Math.max(p.start,d.start),w=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=g,M=w;y<M;y+=3){const S=y,L=y+1,R=y+2;o=ss(this,f,t,qn,l,h,S,L,R),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=p.materialIndex,e.push(o))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=m,f=_;p<f;p+=3){const g=p,w=p+1,y=p+2;o=ss(this,i,t,qn,l,h,g,w,y),o&&(o.faceIndex=Math.floor(p/3),e.push(o))}}}}function Cc(r,t,e,n,i,s,o,a){let c;if(t.side===Le?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===Tn,a),c===null)return null;is.copy(a),is.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(is);return l<e.near||l>e.far?null:{distance:l,point:is.clone(),object:r}}function ss(r,t,e,n,i,s,o,a,c){r.getVertexPosition(o,vi),r.getVertexPosition(a,yi),r.getVertexPosition(c,Mi);const l=Cc(r,t,e,n,vi,yi,Mi,pr);if(l){i&&(ts.fromBufferAttribute(i,o),es.fromBufferAttribute(i,a),ns.fromBufferAttribute(i,c),l.uv=Ye.getUV(pr,vi,yi,Mi,ts,es,ns,new St)),s&&(ts.fromBufferAttribute(s,o),es.fromBufferAttribute(s,a),ns.fromBufferAttribute(s,c),l.uv2=Ye.getUV(pr,vi,yi,Mi,ts,es,ns,new St));const h={a:o,b:a,c,normal:new C,materialIndex:0};Ye.getNormal(vi,yi,Mi,h.normal),l.face=h}return l}class Rn extends Pe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function _(p,f,g,w,y,M,S,L,R,x,E){const D=M/R,U=S/x,G=M/2,N=S/2,I=L/2,W=R+1,Z=x+1;let Q=0,$=0;const K=new C;for(let Y=0;Y<Z;Y++){const H=Y*U-N;for(let B=0;B<W;B++){const it=B*D-G;K[p]=it*w,K[f]=H*y,K[g]=I,l.push(K.x,K.y,K.z),K[p]=0,K[f]=0,K[g]=L>0?1:-1,h.push(K.x,K.y,K.z),u.push(B/R),u.push(1-Y/x),Q+=1}}for(let Y=0;Y<x;Y++)for(let H=0;H<R;H++){const B=d+H+W*Y,it=d+H+W*(Y+1),et=d+(H+1)+W*(Y+1),st=d+(H+1)+W*Y;c.push(B,it,st),c.push(it,et,st),$+=6}a.addGroup(m,$,E),m+=$,d+=Q}}static fromJSON(t){return new Rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ri(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function me(r){const t={};for(let e=0;e<r.length;e++){const n=ri(r[e]);for(const i in n)t[i]=n[i]}return t}function Lc(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Oo(r){return r.getRenderTarget()===null&&r.outputEncoding===kt?Oe:Ri}const Pc={clone:ri,merge:me};var Dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dc,this.fragmentShader=Rc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ri(t.uniforms),this.uniformsGroups=Lc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zo extends ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class we extends zo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ci*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $n=-90,jn=1;class Ic extends ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new we($n,jn,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new we($n,jn,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new we($n,jn,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new we($n,jn,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new we($n,jn,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new we($n,jn,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,h=t.getRenderTarget(),u=t.toneMapping,d=t.xr.enabled;t.toneMapping=Ze,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Uo extends ve{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ni,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fc extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Uo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Rn(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:en});s.uniforms.tEquirect.value=e;const o=new jt(i,s),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Ce),new Ic(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const mr=new C,Nc=new C,Oc=new Te;class _n{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=mr.subVectors(n,e).cross(Nc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(mr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Oc.getNormalMatrix(t),i=this.coplanarPoint(mr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new xs,rs=new C;class Vr{constructor(t=new _n,e=new _n,n=new _n,i=new _n,s=new _n,o=new _n){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],m=n[9],_=n[10],p=n[11],f=n[12],g=n[13],w=n[14],y=n[15];return e[0].setComponents(a-i,u-c,p-d,y-f).normalize(),e[1].setComponents(a+i,u+c,p+d,y+f).normalize(),e[2].setComponents(a+s,u+l,p+m,y+g).normalize(),e[3].setComponents(a-s,u-l,p-m,y-g).normalize(),e[4].setComponents(a-o,u-h,p-_,y-w).normalize(),e[5].setComponents(a+o,u+h,p+_,y+w).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(rs.x=i.normal.x>0?t.max.x:t.min.x,rs.y=i.normal.y>0?t.max.y:t.min.y,rs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bo(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function zc(r,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=5126;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(u instanceof Int16Array)_=5122;else if(u instanceof Uint32Array)_=5125;else if(u instanceof Int32Array)_=5124;else if(u instanceof Int8Array)_=5120;else if(u instanceof Uint8Array)_=5121;else if(u instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,u){const d=h.array,m=h.updateRange;r.bindBuffer(u,l),m.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(s(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class ki extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,m=[],_=[],p=[],f=[];for(let g=0;g<h;g++){const w=g*d-o;for(let y=0;y<l;y++){const M=y*u-s;_.push(M,-w,0),p.push(0,0,1),f.push(y/a),f.push(1-g/c)}}for(let g=0;g<c;g++)for(let w=0;w<a;w++){const y=w+l*g,M=w+l*(g+1),S=w+1+l*(g+1),L=w+1+l*g;m.push(y,M,L),m.push(M,S,L)}this.setIndex(m),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(f,2))}static fromJSON(t){return new ki(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Bc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wc="vec3 transformed = vec3( position );",Xc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,$c=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ih=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",uh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ph=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Th=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ah=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ch=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ph=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ih=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,kh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$h=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Jh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ru=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,du=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_u=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,xu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Su=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Au=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Cu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Lu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Pu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Du=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ru=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Iu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Nu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ju=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ku=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ju=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ed=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,id=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,od=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ld=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Tt={alphamap_fragment:Uc,alphamap_pars_fragment:Bc,alphatest_fragment:kc,alphatest_pars_fragment:Vc,aomap_fragment:Gc,aomap_pars_fragment:Hc,begin_vertex:Wc,beginnormal_vertex:Xc,bsdfs:qc,iridescence_fragment:$c,bumpmap_pars_fragment:jc,clipping_planes_fragment:Yc,clipping_planes_pars_fragment:Zc,clipping_planes_pars_vertex:Kc,clipping_planes_vertex:Jc,color_fragment:Qc,color_pars_fragment:th,color_pars_vertex:eh,color_vertex:nh,common:ih,cube_uv_reflection_fragment:sh,defaultnormal_vertex:rh,displacementmap_pars_vertex:ah,displacementmap_vertex:oh,emissivemap_fragment:lh,emissivemap_pars_fragment:ch,encodings_fragment:hh,encodings_pars_fragment:uh,envmap_fragment:dh,envmap_common_pars_fragment:fh,envmap_pars_fragment:ph,envmap_pars_vertex:mh,envmap_physical_pars_fragment:Ah,envmap_vertex:gh,fog_vertex:_h,fog_pars_vertex:xh,fog_fragment:vh,fog_pars_fragment:yh,gradientmap_pars_fragment:Mh,lightmap_fragment:bh,lightmap_pars_fragment:Sh,lights_lambert_fragment:wh,lights_lambert_pars_fragment:Th,lights_pars_begin:Eh,lights_toon_fragment:Ch,lights_toon_pars_fragment:Lh,lights_phong_fragment:Ph,lights_phong_pars_fragment:Dh,lights_physical_fragment:Rh,lights_physical_pars_fragment:Ih,lights_fragment_begin:Fh,lights_fragment_maps:Nh,lights_fragment_end:Oh,logdepthbuf_fragment:zh,logdepthbuf_pars_fragment:Uh,logdepthbuf_pars_vertex:Bh,logdepthbuf_vertex:kh,map_fragment:Vh,map_pars_fragment:Gh,map_particle_fragment:Hh,map_particle_pars_fragment:Wh,metalnessmap_fragment:Xh,metalnessmap_pars_fragment:qh,morphcolor_vertex:$h,morphnormal_vertex:jh,morphtarget_pars_vertex:Yh,morphtarget_vertex:Zh,normal_fragment_begin:Kh,normal_fragment_maps:Jh,normal_pars_fragment:Qh,normal_pars_vertex:tu,normal_vertex:eu,normalmap_pars_fragment:nu,clearcoat_normal_fragment_begin:iu,clearcoat_normal_fragment_maps:su,clearcoat_pars_fragment:ru,iridescence_pars_fragment:au,output_fragment:ou,packing:lu,premultiplied_alpha_fragment:cu,project_vertex:hu,dithering_fragment:uu,dithering_pars_fragment:du,roughnessmap_fragment:fu,roughnessmap_pars_fragment:pu,shadowmap_pars_fragment:mu,shadowmap_pars_vertex:gu,shadowmap_vertex:_u,shadowmask_pars_fragment:xu,skinbase_vertex:vu,skinning_pars_vertex:yu,skinning_vertex:Mu,skinnormal_vertex:bu,specularmap_fragment:Su,specularmap_pars_fragment:wu,tonemapping_fragment:Tu,tonemapping_pars_fragment:Eu,transmission_fragment:Au,transmission_pars_fragment:Cu,uv_pars_fragment:Lu,uv_pars_vertex:Pu,uv_vertex:Du,uv2_pars_fragment:Ru,uv2_pars_vertex:Iu,uv2_vertex:Fu,worldpos_vertex:Nu,background_vert:Ou,background_frag:zu,backgroundCube_vert:Uu,backgroundCube_frag:Bu,cube_vert:ku,cube_frag:Vu,depth_vert:Gu,depth_frag:Hu,distanceRGBA_vert:Wu,distanceRGBA_frag:Xu,equirect_vert:qu,equirect_frag:$u,linedashed_vert:ju,linedashed_frag:Yu,meshbasic_vert:Zu,meshbasic_frag:Ku,meshlambert_vert:Ju,meshlambert_frag:Qu,meshmatcap_vert:td,meshmatcap_frag:ed,meshnormal_vert:nd,meshnormal_frag:id,meshphong_vert:sd,meshphong_frag:rd,meshphysical_vert:ad,meshphysical_frag:od,meshtoon_vert:ld,meshtoon_frag:cd,points_vert:hd,points_frag:ud,shadow_vert:dd,shadow_frag:fd,sprite_vert:pd,sprite_frag:md},rt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Te},uv2Transform:{value:new Te},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Te}}},ze={basic:{uniforms:me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:me([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:me([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:me([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:me([rt.points,rt.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:me([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:me([rt.common,rt.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:me([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:me([rt.sprite,rt.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:me([rt.common,rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:me([rt.lights,rt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};ze.physical={uniforms:me([ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new St(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const as={r:0,b:0,g:0};function gd(r,t,e,n,i,s,o){const a=new Ut(0);let c=s===!0?0:1,l,h,u=null,d=0,m=null;function _(f,g){let w=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?e:t).get(y));const M=r.xr,S=M.getSession&&M.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?p(a,c):y&&y.isColor&&(p(y,1),w=!0),(r.autoClear||w)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===_s)?(h===void 0&&(h=new jt(new Rn(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:ri(ze.backgroundCube.uniforms),vertexShader:ze.backgroundCube.vertexShader,fragmentShader:ze.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=y.encoding!==kt,(u!==y||d!==y.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,m=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new jt(new ki(2,2),new Ln({name:"BackgroundMaterial",uniforms:ri(ze.background.uniforms),vertexShader:ze.background.vertexShader,fragmentShader:ze.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=y.encoding!==kt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,m=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,g){f.getRGB(as,Oo(r)),n.buffers.color.setClear(as.r,as.g,as.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(f,g=1){a.set(f),c=g,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,p(a,c)},render:_}}function _d(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=f(null);let l=c,h=!1;function u(I,W,Z,Q,$){let K=!1;if(o){const Y=p(Q,Z,W);l!==Y&&(l=Y,m(l.object)),K=g(I,Q,Z,$),K&&w(I,Q,Z,$)}else{const Y=W.wireframe===!0;(l.geometry!==Q.id||l.program!==Z.id||l.wireframe!==Y)&&(l.geometry=Q.id,l.program=Z.id,l.wireframe=Y,K=!0)}$!==null&&e.update($,34963),(K||h)&&(h=!1,x(I,W,Z,Q),$!==null&&r.bindBuffer(34963,e.get($).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,W,Z){const Q=Z.wireframe===!0;let $=a[I.id];$===void 0&&($={},a[I.id]=$);let K=$[W.id];K===void 0&&(K={},$[W.id]=K);let Y=K[Q];return Y===void 0&&(Y=f(d()),K[Q]=Y),Y}function f(I){const W=[],Z=[],Q=[];for(let $=0;$<i;$++)W[$]=0,Z[$]=0,Q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Z,attributeDivisors:Q,object:I,attributes:{},index:null}}function g(I,W,Z,Q){const $=l.attributes,K=W.attributes;let Y=0;const H=Z.getAttributes();for(const B in H)if(H[B].location>=0){const et=$[B];let st=K[B];if(st===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(st=I.instanceColor)),et===void 0||et.attribute!==st||st&&et.data!==st.data)return!0;Y++}return l.attributesNum!==Y||l.index!==Q}function w(I,W,Z,Q){const $={},K=W.attributes;let Y=0;const H=Z.getAttributes();for(const B in H)if(H[B].location>=0){let et=K[B];et===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(et=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(et=I.instanceColor));const st={};st.attribute=et,et&&et.data&&(st.data=et.data),$[B]=st,Y++}l.attributes=$,l.attributesNum=Y,l.index=Q}function y(){const I=l.newAttributes;for(let W=0,Z=I.length;W<Z;W++)I[W]=0}function M(I){S(I,0)}function S(I,W){const Z=l.newAttributes,Q=l.enabledAttributes,$=l.attributeDivisors;Z[I]=1,Q[I]===0&&(r.enableVertexAttribArray(I),Q[I]=1),$[I]!==W&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),$[I]=W)}function L(){const I=l.newAttributes,W=l.enabledAttributes;for(let Z=0,Q=W.length;Z<Q;Z++)W[Z]!==I[Z]&&(r.disableVertexAttribArray(Z),W[Z]=0)}function R(I,W,Z,Q,$,K){n.isWebGL2===!0&&(Z===5124||Z===5125)?r.vertexAttribIPointer(I,W,Z,$,K):r.vertexAttribPointer(I,W,Z,Q,$,K)}function x(I,W,Z,Q){if(n.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const $=Q.attributes,K=Z.getAttributes(),Y=W.defaultAttributeValues;for(const H in K){const B=K[H];if(B.location>=0){let it=$[H];if(it===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(it=I.instanceColor)),it!==void 0){const et=it.normalized,st=it.itemSize,X=e.get(it);if(X===void 0)continue;const yt=X.buffer,ht=X.type,mt=X.bytesPerElement;if(it.isInterleavedBufferAttribute){const lt=it.data,Lt=lt.stride,Mt=it.offset;if(lt.isInstancedInterleavedBuffer){for(let xt=0;xt<B.locationSize;xt++)S(B.location+xt,lt.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let xt=0;xt<B.locationSize;xt++)M(B.location+xt);r.bindBuffer(34962,yt);for(let xt=0;xt<B.locationSize;xt++)R(B.location+xt,st/B.locationSize,ht,et,Lt*mt,(Mt+st/B.locationSize*xt)*mt)}else{if(it.isInstancedBufferAttribute){for(let lt=0;lt<B.locationSize;lt++)S(B.location+lt,it.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let lt=0;lt<B.locationSize;lt++)M(B.location+lt);r.bindBuffer(34962,yt);for(let lt=0;lt<B.locationSize;lt++)R(B.location+lt,st/B.locationSize,ht,et,st*mt,st/B.locationSize*lt*mt)}}else if(Y!==void 0){const et=Y[H];if(et!==void 0)switch(et.length){case 2:r.vertexAttrib2fv(B.location,et);break;case 3:r.vertexAttrib3fv(B.location,et);break;case 4:r.vertexAttrib4fv(B.location,et);break;default:r.vertexAttrib1fv(B.location,et)}}}}L()}function E(){G();for(const I in a){const W=a[I];for(const Z in W){const Q=W[Z];for(const $ in Q)_(Q[$].object),delete Q[$];delete W[Z]}delete a[I]}}function D(I){if(a[I.id]===void 0)return;const W=a[I.id];for(const Z in W){const Q=W[Z];for(const $ in Q)_(Q[$].object),delete Q[$];delete W[Z]}delete a[I.id]}function U(I){for(const W in a){const Z=a[W];if(Z[I.id]===void 0)continue;const Q=Z[I.id];for(const $ in Q)_(Q[$].object),delete Q[$];delete Z[I.id]}}function G(){N(),h=!0,l!==c&&(l=c,m(l.object))}function N(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:G,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:D,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:M,disableUnusedAttributes:L}}function xd(r,t,e,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,h){r.drawArrays(s,l,h),e.update(h,s,1)}function c(l,h,u){if(u===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,h,u),e.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=c}function vd(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),_=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),g=r.getParameter(36348),w=r.getParameter(36349),y=d>0,M=o||t.has("OES_texture_float"),S=y&&M,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:g,maxFragmentUniforms:w,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:L}}function yd(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new _n,a=new Te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,m){const _=u.length!==0||d||n!==0||i;return i=d,e=h(u,m,0),n=u.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(u,d,m){const _=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,g=r.get(u);if(!i||_===null||_.length===0||s&&!f)s?h(null):l();else{const w=s?0:n,y=w*4;let M=g.clippingState||null;c.value=M,M=h(_,d,y,m);for(let S=0;S!==y;++S)M[S]=e[S];g.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,m,_){const p=u!==null?u.length:0;let f=null;if(p!==0){if(f=c.value,_!==!0||f===null){const g=m+p*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<g)&&(f=new Float32Array(g));for(let y=0,M=m;y!==p;++y,M+=4)o.copy(u[y]).applyMatrix4(w,a),o.normal.toArray(f,M),f[M+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function Md(r){let t=new WeakMap;function e(o,a){return a===Ar?o.mapping=ni:a===Cr&&(o.mapping=ii),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ar||a===Cr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Fc(c.height/2);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ko extends zo{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Jn=4,ka=[.125,.215,.35,.446,.526,.582],vn=20,gr=new ko,Va=new Ut;let _r=null;const xn=(1+Math.sqrt(5))/2,Zn=1/xn,Ga=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,xn,Zn),new C(0,xn,-Zn),new C(Zn,0,xn),new C(-Zn,0,xn),new C(xn,Zn,0),new C(-xn,Zn,0)];class Ha{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){_r=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_r),t.scissorTest=!1,os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ni||t.mapping===ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_r=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:Di,format:Ne,encoding:An,depthBuffer:!1},i=Wa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bd(s)),this._blurMaterial=Sd(s,t,e)}return i}_compileMaterial(t){const e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,n,i){const a=new we(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Va),h.toneMapping=Ze,h.autoClear=!1;const m=new Br({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),_=new jt(new Rn,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(Va),p=!0);for(let g=0;g<6;g++){const w=g%3;w===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):w===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const y=this._cubeSize;os(i,w*y,g>2?y:0,y,y),h.setRenderTarget(i),p&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ni||t.mapping===ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xa());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;os(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,gr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ga[(i-1)%Ga.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new jt(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vn-1),p=s/_,f=isFinite(s)?1+Math.floor(h*p):vn;f>vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${vn}`);const g=[];let w=0;for(let R=0;R<vn;++R){const x=R/p,E=Math.exp(-x*x/2);g.push(E),R===0?w+=E:R<f&&(w+=2*E)}for(let R=0;R<g.length;R++)g[R]=g[R]/w;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const M=this._sizeLods[i],S=3*M*(i>y-Jn?i-y+Jn:0),L=4*(this._cubeSize-M);os(e,S,L,3*M,2*M),c.setRenderTarget(e),c.render(u,gr)}}function bd(r){const t=[],e=[],n=[];let i=r;const s=r-Jn+1+ka.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Jn?c=ka[o-r+Jn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,p=3,f=2,g=1,w=new Float32Array(p*_*m),y=new Float32Array(f*_*m),M=new Float32Array(g*_*m);for(let L=0;L<m;L++){const R=L%3*2/3-1,x=L>2?0:-1,E=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];w.set(E,p*_*L),y.set(d,f*_*L);const D=[L,L,L,L,L,L];M.set(D,g*_*L)}const S=new Pe;S.setAttribute("position",new Be(w,p)),S.setAttribute("uv",new Be(y,f)),S.setAttribute("faceIndex",new Be(M,g)),t.push(S),i>Jn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wa(r,t,e){const n=new Cn(r,t,e);return n.texture.mapping=_s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Sd(r,t,e){const n=new Float32Array(vn),i=new C(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Xa(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function qa(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Gr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wd(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ar||c===Cr,h=c===ni||c===ii;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Ha(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Ha(r));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Td(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ed(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],34962);const m=u.morphAttributes;for(const _ in m){const p=m[_];for(let f=0,g=p.length;f<g;f++)t.update(p[f],34962)}}function l(u){const d=[],m=u.index,_=u.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let y=0,M=w.length;y<M;y+=3){const S=w[y+0],L=w[y+1],R=w[y+2];d.push(S,L,L,R,R,S)}}else{const w=_.array;p=_.version;for(let y=0,M=w.length/3-1;y<M;y+=3){const S=y+0,L=y+1,R=y+2;d.push(S,L,L,R,R,S)}}const f=new(Co(d)?kr:No)(d,1);f.version=p;const g=s.get(u);g&&t.remove(g),s.set(u,f)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ad(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,m){r.drawElements(s,m,a,d*c),e.update(m,s,1)}function u(d,m,_){if(_===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*c,_),e.update(m,s,_)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function Cd(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ld(r,t){return r[0]-t[0]}function Pd(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Dd(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ht,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u,d){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=_!==void 0?_.length:0;let f=s.get(h);if(f===void 0||f.count!==p){let W=function(){N.dispose(),s.delete(h),h.removeEventListener("dispose",W)};f!==void 0&&f.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],x=h.morphAttributes.color||[];let E=0;y===!0&&(E=1),M===!0&&(E=2),S===!0&&(E=3);let D=h.attributes.position.count*E,U=1;D>t.maxTextureSize&&(U=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const G=new Float32Array(D*U*4*p),N=new Ro(G,D,U,p);N.type=bn,N.needsUpdate=!0;const I=E*4;for(let Z=0;Z<p;Z++){const Q=L[Z],$=R[Z],K=x[Z],Y=D*U*4*Z;for(let H=0;H<Q.count;H++){const B=H*I;y===!0&&(o.fromBufferAttribute(Q,H),G[Y+B+0]=o.x,G[Y+B+1]=o.y,G[Y+B+2]=o.z,G[Y+B+3]=0),M===!0&&(o.fromBufferAttribute($,H),G[Y+B+4]=o.x,G[Y+B+5]=o.y,G[Y+B+6]=o.z,G[Y+B+7]=0),S===!0&&(o.fromBufferAttribute(K,H),G[Y+B+8]=o.x,G[Y+B+9]=o.y,G[Y+B+10]=o.z,G[Y+B+11]=K.itemSize===4?o.w:1)}}f={count:p,texture:N,size:new St(D,U)},s.set(h,f),h.addEventListener("dispose",W)}let g=0;for(let y=0;y<m.length;y++)g+=m[y];const w=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const _=m===void 0?0:m.length;let p=n[h.id];if(p===void 0||p.length!==_){p=[];for(let M=0;M<_;M++)p[M]=[M,0];n[h.id]=p}for(let M=0;M<_;M++){const S=p[M];S[0]=M,S[1]=m[M]}p.sort(Pd);for(let M=0;M<8;M++)M<_&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Ld);const f=h.morphAttributes.position,g=h.morphAttributes.normal;let w=0;for(let M=0;M<8;M++){const S=a[M],L=S[0],R=S[1];L!==Number.MAX_SAFE_INTEGER&&R?(f&&h.getAttribute("morphTarget"+M)!==f[L]&&h.setAttribute("morphTarget"+M,f[L]),g&&h.getAttribute("morphNormal"+M)!==g[L]&&h.setAttribute("morphNormal"+M,g[L]),i[M]=R,w+=R):(f&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),g&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const y=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Rd(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);return i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Vo=new ve,Go=new Ro,Ho=new xc,Wo=new Uo,$a=[],ja=[],Ya=new Float32Array(16),Za=new Float32Array(9),Ka=new Float32Array(4);function hi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=$a[i];if(s===void 0&&(s=new Float32Array(i),$a[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ie(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function se(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function vs(r,t){let e=ja[t];e===void 0&&(e=new Int32Array(t),ja[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Id(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Fd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;r.uniform2fv(this.addr,t),se(e,t)}}function Nd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ie(e,t))return;r.uniform3fv(this.addr,t),se(e,t)}}function Od(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;r.uniform4fv(this.addr,t),se(e,t)}}function zd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),se(e,t)}else{if(ie(e,n))return;Ka.set(n),r.uniformMatrix2fv(this.addr,!1,Ka),se(e,n)}}function Ud(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),se(e,t)}else{if(ie(e,n))return;Za.set(n),r.uniformMatrix3fv(this.addr,!1,Za),se(e,n)}}function Bd(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),se(e,t)}else{if(ie(e,n))return;Ya.set(n),r.uniformMatrix4fv(this.addr,!1,Ya),se(e,n)}}function kd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Vd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;r.uniform2iv(this.addr,t),se(e,t)}}function Gd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;r.uniform3iv(this.addr,t),se(e,t)}}function Hd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;r.uniform4iv(this.addr,t),se(e,t)}}function Wd(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Xd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;r.uniform2uiv(this.addr,t),se(e,t)}}function qd(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;r.uniform3uiv(this.addr,t),se(e,t)}}function $d(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;r.uniform4uiv(this.addr,t),se(e,t)}}function jd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Vo,i)}function Yd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ho,i)}function Zd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wo,i)}function Kd(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Go,i)}function Jd(r){switch(r){case 5126:return Id;case 35664:return Fd;case 35665:return Nd;case 35666:return Od;case 35674:return zd;case 35675:return Ud;case 35676:return Bd;case 5124:case 35670:return kd;case 35667:case 35671:return Vd;case 35668:case 35672:return Gd;case 35669:case 35673:return Hd;case 5125:return Wd;case 36294:return Xd;case 36295:return qd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return jd;case 35679:case 36299:case 36307:return Yd;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return Kd}}function Qd(r,t){r.uniform1fv(this.addr,t)}function tf(r,t){const e=hi(t,this.size,2);r.uniform2fv(this.addr,e)}function ef(r,t){const e=hi(t,this.size,3);r.uniform3fv(this.addr,e)}function nf(r,t){const e=hi(t,this.size,4);r.uniform4fv(this.addr,e)}function sf(r,t){const e=hi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function rf(r,t){const e=hi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function af(r,t){const e=hi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function of(r,t){r.uniform1iv(this.addr,t)}function lf(r,t){r.uniform2iv(this.addr,t)}function cf(r,t){r.uniform3iv(this.addr,t)}function hf(r,t){r.uniform4iv(this.addr,t)}function uf(r,t){r.uniform1uiv(this.addr,t)}function df(r,t){r.uniform2uiv(this.addr,t)}function ff(r,t){r.uniform3uiv(this.addr,t)}function pf(r,t){r.uniform4uiv(this.addr,t)}function mf(r,t,e){const n=this.cache,i=t.length,s=vs(e,i);ie(n,s)||(r.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Vo,s[o])}function gf(r,t,e){const n=this.cache,i=t.length,s=vs(e,i);ie(n,s)||(r.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ho,s[o])}function _f(r,t,e){const n=this.cache,i=t.length,s=vs(e,i);ie(n,s)||(r.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Wo,s[o])}function xf(r,t,e){const n=this.cache,i=t.length,s=vs(e,i);ie(n,s)||(r.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Go,s[o])}function vf(r){switch(r){case 5126:return Qd;case 35664:return tf;case 35665:return ef;case 35666:return nf;case 35674:return sf;case 35675:return rf;case 35676:return af;case 5124:case 35670:return of;case 35667:case 35671:return lf;case 35668:case 35672:return cf;case 35669:case 35673:return hf;case 5125:return uf;case 36294:return df;case 36295:return ff;case 36296:return pf;case 35678:case 36198:case 36298:case 36306:case 35682:return mf;case 35679:case 36299:case 36307:return gf;case 35680:case 36300:case 36308:case 36293:return _f;case 36289:case 36303:case 36311:case 36292:return xf}}class yf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Jd(e.type)}}class Mf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=vf(e.type)}}class bf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const xr=/(\w+)(\])?(\[|\.)?/g;function Ja(r,t){r.seq.push(t),r.map[t.id]=t}function Sf(r,t,e){const n=r.name,i=n.length;for(xr.lastIndex=0;;){const s=xr.exec(n),o=xr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ja(e,l===void 0?new yf(a,r,t):new Mf(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new bf(a),Ja(e,u)),e=u}}}class ds{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Sf(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Qa(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let wf=0;function Tf(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Ef(r){switch(r){case An:return["Linear","( value )"];case kt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function to(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Tf(r.getShaderSource(t),o)}else return i}function Af(r,t){const e=Ef(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Cf(r,t){let e;switch(t){case Rl:e="Linear";break;case Il:e="Reinhard";break;case Fl:e="OptimizedCineon";break;case Nl:e="ACESFilmic";break;case Ol:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Lf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function Pf(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Df(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ti(r){return r!==""}function eo(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function no(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rr(r){return r.replace(Rf,If)}function If(r,t){const e=Tt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Rr(e)}const Ff=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function io(r){return r.replace(Ff,Nf)}function Nf(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function so(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Of(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===yo?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Mo?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function zf(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ni:case ii:t="ENVMAP_TYPE_CUBE";break;case _s:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Uf(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ii:t="ENVMAP_MODE_REFRACTION";break}return t}function Bf(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wo:t="ENVMAP_BLENDING_MULTIPLY";break;case Pl:t="ENVMAP_BLENDING_MIX";break;case Dl:t="ENVMAP_BLENDING_ADD";break}return t}function kf(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Vf(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Of(e),l=zf(e),h=Uf(e),u=Bf(e),d=kf(e),m=e.isWebGL2?"":Lf(e),_=Pf(s),p=i.createProgram();let f,g,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[_].filter(Ti).join(`
`),f.length>0&&(f+=`
`),g=[m,_].filter(Ti).join(`
`),g.length>0&&(g+=`
`)):(f=[so(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),g=[m,so(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ze?"#define TONE_MAPPING":"",e.toneMapping!==Ze?Tt.tonemapping_pars_fragment:"",e.toneMapping!==Ze?Cf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.encodings_pars_fragment,Af("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),o=Rr(o),o=eo(o,e),o=no(o,e),a=Rr(a),a=eo(a,e),a=no(a,e),o=io(o),a=io(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=w+f+o,M=w+g+a,S=Qa(i,35633,y),L=Qa(i,35632,M);if(i.attachShader(p,S),i.attachShader(p,L),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(S).trim(),U=i.getShaderInfoLog(L).trim();let G=!0,N=!0;if(i.getProgramParameter(p,35714)===!1){G=!1;const I=to(i,S,"vertex"),W=to(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+I+`
`+W)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(D===""||U==="")&&(N=!1);N&&(this.diagnostics={runnable:G,programLog:E,vertexShader:{log:D,prefix:f},fragmentShader:{log:U,prefix:g}})}i.deleteShader(S),i.deleteShader(L);let R;this.getUniforms=function(){return R===void 0&&(R=new ds(i,p)),R};let x;return this.getAttributes=function(){return x===void 0&&(x=Df(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=wf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=L,this}let Gf=0;class Hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wf(t),e.set(t,n)),n}}class Wf{constructor(t){this.id=Gf++,this.code=t,this.usedTimes=0}}function Xf(r,t,e,n,i,s,o){const a=new Fo,c=new Hf,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,E,D,U,G){const N=U.fog,I=G.geometry,W=x.isMeshStandardMaterial?U.environment:null,Z=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),Q=Z&&Z.mapping===_s?Z.image.height:null,$=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Y=K!==void 0?K.length:0;let H=0;I.morphAttributes.position!==void 0&&(H=1),I.morphAttributes.normal!==void 0&&(H=2),I.morphAttributes.color!==void 0&&(H=3);let B,it,et,st;if($){const Lt=ze[$];B=Lt.vertexShader,it=Lt.fragmentShader}else B=x.vertexShader,it=x.fragmentShader,c.update(x),et=c.getVertexShaderID(x),st=c.getFragmentShaderID(x);const X=r.getRenderTarget(),yt=x.alphaTest>0,ht=x.clearcoat>0,mt=x.iridescence>0;return{isWebGL2:h,shaderID:$,shaderName:x.type,vertexShader:B,fragmentShader:it,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:st,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:d,outputEncoding:X===null?r.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:An,map:!!x.map,matcap:!!x.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:Q,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===ec,tangentSpaceNormalMap:x.normalMapType===Ao,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===kt,clearcoat:ht,clearcoatMap:ht&&!!x.clearcoatMap,clearcoatRoughnessMap:ht&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ht&&!!x.clearcoatNormalMap,iridescence:mt,iridescenceMap:mt&&!!x.iridescenceMap,iridescenceThicknessMap:mt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ti,alphaMap:!!x.alphaMap,alphaTest:yt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!I.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:H,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:Ze,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zr,flipSided:x.side===Le,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)E.push(D),E.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(E,x),w(E,x),E.push(r.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function w(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),x.push(a.mask)}function y(x){const E=_[x.type];let D;if(E){const U=ze[E];D=Pc.clone(U.uniforms)}else D=x.uniforms;return D}function M(x,E){let D;for(let U=0,G=l.length;U<G;U++){const N=l[U];if(N.cacheKey===E){D=N,++D.usedTimes;break}}return D===void 0&&(D=new Vf(r,E,x,s),l.push(D)),D}function S(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),x.destroy()}}function L(x){c.remove(x)}function R(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:L,programs:l,dispose:R}}function qf(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function $f(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ro(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ao(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,m,_,p,f){let g=r[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:p,group:f},r[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=u.renderOrder,g.z=p,g.group=f),t++,g}function a(u,d,m,_,p,f){const g=o(u,d,m,_,p,f);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):e.push(g)}function c(u,d,m,_,p,f){const g=o(u,d,m,_,p,f);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):e.unshift(g)}function l(u,d){e.length>1&&e.sort(u||$f),n.length>1&&n.sort(d||ro),i.length>1&&i.sort(d||ro)}function h(){for(let u=t,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function jf(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ao,r.set(n,[o])):i>=s.length?(o=new ao,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Yf(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Ut};break;case"SpotLight":e={position:new C,direction:new C,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function Zf(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Kf=0;function Jf(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Qf(r,t){const e=new Yf,n=Zf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,o=new Yt,a=new Yt;function c(h,u){let d=0,m=0,_=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,f=0,g=0,w=0,y=0,M=0,S=0,L=0,R=0,x=0;h.sort(Jf);const E=u!==!0?Math.PI:1;for(let U=0,G=h.length;U<G;U++){const N=h[U],I=N.color,W=N.intensity,Z=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=I.r*W*E,m+=I.g*W*E,_+=I.b*W*E;else if(N.isLightProbe)for(let $=0;$<9;$++)i.probe[$].addScaledVector(N.sh.coefficients[$],W);else if(N.isDirectionalLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const K=N.shadow,Y=n.get(N);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=N.shadow.matrix,M++}i.directional[p]=$,p++}else if(N.isSpotLight){const $=e.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(I).multiplyScalar(W*E),$.distance=Z,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,i.spot[g]=$;const K=N.shadow;if(N.map&&(i.spotLightMap[R]=N.map,R++,K.updateMatrices(N),N.castShadow&&x++),i.spotLightMatrix[g]=K.matrix,N.castShadow){const Y=n.get(N);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,i.spotShadow[g]=Y,i.spotShadowMap[g]=Q,L++}g++}else if(N.isRectAreaLight){const $=e.get(N);$.color.copy(I).multiplyScalar(W),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=$,w++}else if(N.isPointLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*E),$.distance=N.distance,$.decay=N.decay,N.castShadow){const K=N.shadow,Y=n.get(N);Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,i.pointShadow[f]=Y,i.pointShadowMap[f]=Q,i.pointShadowMatrix[f]=N.shadow.matrix,S++}i.point[f]=$,f++}else if(N.isHemisphereLight){const $=e.get(N);$.skyColor.copy(N.color).multiplyScalar(W*E),$.groundColor.copy(N.groundColor).multiplyScalar(W*E),i.hemi[y]=$,y++}}w>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const D=i.hash;(D.directionalLength!==p||D.pointLength!==f||D.spotLength!==g||D.rectAreaLength!==w||D.hemiLength!==y||D.numDirectionalShadows!==M||D.numPointShadows!==S||D.numSpotShadows!==L||D.numSpotMaps!==R)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=w,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=L+R-x,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=x,D.directionalLength=p,D.pointLength=f,D.spotLength=g,D.rectAreaLength=w,D.hemiLength=y,D.numDirectionalShadows=M,D.numPointShadows=S,D.numSpotShadows=L,D.numSpotMaps=R,i.version=Kf++)}function l(h,u){let d=0,m=0,_=0,p=0,f=0;const g=u.matrixWorldInverse;for(let w=0,y=h.length;w<y;w++){const M=h[w];if(M.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(M.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),_++}else if(M.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const S=i.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),m++}else if(M.isHemisphereLight){const S=i.hemi[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),f++}}}return{setup:c,setupView:l,state:i}}function oo(r,t){const e=new Qf(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function tp(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let c;return a===void 0?(c=new oo(r,t),e.set(s,[c])):o>=a.length?(c=new oo(r,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class ep extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class np extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ip=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rp(r,t,e){let n=new Vr;const i=new St,s=new St,o=new Ht,a=new ep({depthPacking:tc}),c=new np,l={},h=e.maxTextureSize,u={0:Le,1:Tn,2:zr},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:ip,fragmentShader:sp}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Pe;_.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new jt(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo,this.render=function(M,S,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;const R=r.getRenderTarget(),x=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),D=r.state;D.setBlending(en),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let U=0,G=M.length;U<G;U++){const N=M[U],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const W=I.getFrameExtents();if(i.multiply(W),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/W.x),i.x=s.x*W.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/W.y),i.y=s.y*W.y,I.mapSize.y=s.y)),I.map===null){const Q=this.type!==Si?{minFilter:ge,magFilter:ge}:{};I.map=new Cn(i.x,i.y,Q),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const Z=I.getViewportCount();for(let Q=0;Q<Z;Q++){const $=I.getViewport(Q);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),D.viewport(o),I.updateMatrices(N,Q),n=I.getFrustum(),y(S,L,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===Si&&g(I,L),I.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(R,x,E)};function g(M,S){const L=t.update(p);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Cn(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(S,null,L,d,p,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(S,null,L,m,p,null)}function w(M,S,L,R,x,E){let D=null;const U=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)D=U;else if(D=L.isPointLight===!0?c:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const G=D.uuid,N=S.uuid;let I=l[G];I===void 0&&(I={},l[G]=I);let W=I[N];W===void 0&&(W=D.clone(),I[N]=W),D=W}return D.visible=S.visible,D.wireframe=S.wireframe,E===Si?D.side=S.shadowSide!==null?S.shadowSide:S.side:D.side=S.shadowSide!==null?S.shadowSide:u[S.side],D.alphaMap=S.alphaMap,D.alphaTest=S.alphaTest,D.map=S.map,D.clipShadows=S.clipShadows,D.clippingPlanes=S.clippingPlanes,D.clipIntersection=S.clipIntersection,D.displacementMap=S.displacementMap,D.displacementScale=S.displacementScale,D.displacementBias=S.displacementBias,D.wireframeLinewidth=S.wireframeLinewidth,D.linewidth=S.linewidth,L.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(L.matrixWorld),D.nearDistance=R,D.farDistance=x),D}function y(M,S,L,R,x){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Si)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const U=t.update(M),G=M.material;if(Array.isArray(G)){const N=U.groups;for(let I=0,W=N.length;I<W;I++){const Z=N[I],Q=G[Z.materialIndex];if(Q&&Q.visible){const $=w(M,Q,R,L.near,L.far,x);r.renderBufferDirect(L,null,U,$,M,Z)}}}else if(G.visible){const N=w(M,G,R,L.near,L.far,x);r.renderBufferDirect(L,null,U,N,M,null)}}const D=M.children;for(let U=0,G=D.length;U<G;U++)y(D[U],S,L,R,x)}}function ap(r,t,e){const n=e.isWebGL2;function i(){let P=!1;const k=new Ht;let J=null;const dt=new Ht(0,0,0,0);return{setMask:function(gt){J!==gt&&!P&&(r.colorMask(gt,gt,gt,gt),J=gt)},setLocked:function(gt){P=gt},setClear:function(gt,zt,ae,he,ln){ln===!0&&(gt*=he,zt*=he,ae*=he),k.set(gt,zt,ae,he),dt.equals(k)===!1&&(r.clearColor(gt,zt,ae,he),dt.copy(k))},reset:function(){P=!1,J=null,dt.set(-1,0,0,0)}}}function s(){let P=!1,k=null,J=null,dt=null;return{setTest:function(gt){gt?yt(2929):ht(2929)},setMask:function(gt){k!==gt&&!P&&(r.depthMask(gt),k=gt)},setFunc:function(gt){if(J!==gt){switch(gt){case Sl:r.depthFunc(512);break;case wl:r.depthFunc(519);break;case Tl:r.depthFunc(513);break;case Er:r.depthFunc(515);break;case El:r.depthFunc(514);break;case Al:r.depthFunc(518);break;case Cl:r.depthFunc(516);break;case Ll:r.depthFunc(517);break;default:r.depthFunc(515)}J=gt}},setLocked:function(gt){P=gt},setClear:function(gt){dt!==gt&&(r.clearDepth(gt),dt=gt)},reset:function(){P=!1,k=null,J=null,dt=null}}}function o(){let P=!1,k=null,J=null,dt=null,gt=null,zt=null,ae=null,he=null,ln=null;return{setTest:function(Vt){P||(Vt?yt(2960):ht(2960))},setMask:function(Vt){k!==Vt&&!P&&(r.stencilMask(Vt),k=Vt)},setFunc:function(Vt,Ve,Ee){(J!==Vt||dt!==Ve||gt!==Ee)&&(r.stencilFunc(Vt,Ve,Ee),J=Vt,dt=Ve,gt=Ee)},setOp:function(Vt,Ve,Ee){(zt!==Vt||ae!==Ve||he!==Ee)&&(r.stencilOp(Vt,Ve,Ee),zt=Vt,ae=Ve,he=Ee)},setLocked:function(Vt){P=Vt},setClear:function(Vt){ln!==Vt&&(r.clearStencil(Vt),ln=Vt)},reset:function(){P=!1,k=null,J=null,dt=null,gt=null,zt=null,ae=null,he=null,ln=null}}}const a=new i,c=new s,l=new o,h=new WeakMap,u=new WeakMap;let d={},m={},_=new WeakMap,p=[],f=null,g=!1,w=null,y=null,M=null,S=null,L=null,R=null,x=null,E=!1,D=null,U=null,G=null,N=null,I=null;const W=r.getParameter(35661);let Z=!1,Q=0;const $=r.getParameter(7938);$.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=Q>=1):$.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=Q>=2);let K=null,Y={};const H=r.getParameter(3088),B=r.getParameter(2978),it=new Ht().fromArray(H),et=new Ht().fromArray(B);function st(P,k,J){const dt=new Uint8Array(4),gt=r.createTexture();r.bindTexture(P,gt),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let zt=0;zt<J;zt++)r.texImage2D(k+zt,0,6408,1,1,0,6408,5121,dt);return gt}const X={};X[3553]=st(3553,3553,1),X[34067]=st(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),yt(2929),c.setFunc(Er),Xt(!1),te(ta),yt(2884),qt(en);function yt(P){d[P]!==!0&&(r.enable(P),d[P]=!0)}function ht(P){d[P]!==!1&&(r.disable(P),d[P]=!1)}function mt(P,k){return m[P]!==k?(r.bindFramebuffer(P,k),m[P]=k,n&&(P===36009&&(m[36160]=k),P===36160&&(m[36009]=k)),!0):!1}function lt(P,k){let J=p,dt=!1;if(P)if(J=_.get(k),J===void 0&&(J=[],_.set(k,J)),P.isWebGLMultipleRenderTargets){const gt=P.texture;if(J.length!==gt.length||J[0]!==36064){for(let zt=0,ae=gt.length;zt<ae;zt++)J[zt]=36064+zt;J.length=gt.length,dt=!0}}else J[0]!==36064&&(J[0]=36064,dt=!0);else J[0]!==1029&&(J[0]=1029,dt=!0);dt&&(e.isWebGL2?r.drawBuffers(J):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function Lt(P){return f!==P?(r.useProgram(P),f=P,!0):!1}const Mt={[Kn]:32774,[dl]:32778,[fl]:32779};if(n)Mt[ia]=32775,Mt[sa]=32776;else{const P=t.get("EXT_blend_minmax");P!==null&&(Mt[ia]=P.MIN_EXT,Mt[sa]=P.MAX_EXT)}const xt={[pl]:0,[ml]:1,[gl]:768,[bo]:770,[bl]:776,[yl]:774,[xl]:772,[_l]:769,[So]:771,[Ml]:775,[vl]:773};function qt(P,k,J,dt,gt,zt,ae,he){if(P===en){g===!0&&(ht(3042),g=!1);return}if(g===!1&&(yt(3042),g=!0),P!==ul){if(P!==w||he!==E){if((y!==Kn||L!==Kn)&&(r.blendEquation(32774),y=Kn,L=Kn),he)switch(P){case ti:r.blendFuncSeparate(1,771,1,771);break;case Tr:r.blendFunc(1,1);break;case ea:r.blendFuncSeparate(0,769,0,1);break;case na:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ti:r.blendFuncSeparate(770,771,1,771);break;case Tr:r.blendFunc(770,1);break;case ea:r.blendFuncSeparate(0,769,0,1);break;case na:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,S=null,R=null,x=null,w=P,E=he}return}gt=gt||k,zt=zt||J,ae=ae||dt,(k!==y||gt!==L)&&(r.blendEquationSeparate(Mt[k],Mt[gt]),y=k,L=gt),(J!==M||dt!==S||zt!==R||ae!==x)&&(r.blendFuncSeparate(xt[J],xt[dt],xt[zt],xt[ae]),M=J,S=dt,R=zt,x=ae),w=P,E=!1}function Wt(P,k){P.side===zr?ht(2884):yt(2884);let J=P.side===Le;k&&(J=!J),Xt(J),P.blending===ti&&P.transparent===!1?qt(en):qt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const dt=P.stencilWrite;l.setTest(dt),dt&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ft(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?yt(32926):ht(32926)}function Xt(P){D!==P&&(P?r.frontFace(2304):r.frontFace(2305),D=P)}function te(P){P!==cl?(yt(2884),P!==U&&(P===ta?r.cullFace(1029):P===hl?r.cullFace(1028):r.cullFace(1032))):ht(2884),U=P}function Bt(P){P!==G&&(Z&&r.lineWidth(P),G=P)}function Ft(P,k,J){P?(yt(32823),(N!==k||I!==J)&&(r.polygonOffset(k,J),N=k,I=J)):ht(32823)}function ce(P){P?yt(3089):ht(3089)}function re(P){P===void 0&&(P=33984+W-1),K!==P&&(r.activeTexture(P),K=P)}function T(P,k,J){J===void 0&&(K===null?J=33984+W-1:J=K);let dt=Y[J];dt===void 0&&(dt={type:void 0,texture:void 0},Y[J]=dt),(dt.type!==P||dt.texture!==k)&&(K!==J&&(r.activeTexture(J),K=J),r.bindTexture(P,k||X[P]),dt.type=P,dt.texture=k)}function v(){const P=Y[K];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function V(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function tt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(P){it.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),it.copy(P))}function ft(P){et.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),et.copy(P))}function At(P,k){let J=u.get(k);J===void 0&&(J=new WeakMap,u.set(k,J));let dt=J.get(P);dt===void 0&&(dt=r.getUniformBlockIndex(k,P.name),J.set(P,dt))}function wt(P,k){const dt=u.get(k).get(P);h.get(k)!==dt&&(r.uniformBlockBinding(k,dt,P.__bindingPointIndex),h.set(k,dt))}function Pt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},K=null,Y={},m={},_=new WeakMap,p=[],f=null,g=!1,w=null,y=null,M=null,S=null,L=null,R=null,x=null,E=!1,D=null,U=null,G=null,N=null,I=null,it.set(0,0,r.canvas.width,r.canvas.height),et.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:yt,disable:ht,bindFramebuffer:mt,drawBuffers:lt,useProgram:Lt,setBlending:qt,setMaterial:Wt,setFlipSided:Xt,setCullFace:te,setLineWidth:Bt,setPolygonOffset:Ft,setScissorTest:ce,activeTexture:re,bindTexture:T,unbindTexture:v,compressedTexImage2D:V,compressedTexImage3D:tt,texImage2D:ut,texImage3D:ct,updateUBOMapping:At,uniformBlockBinding:wt,texStorage2D:F,texStorage3D:ot,texSubImage2D:nt,texSubImage3D:at,compressedTexSubImage2D:_t,compressedTexSubImage3D:A,scissor:pt,viewport:ft,reset:Pt}}function op(r,t,e,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(T,v){return g?new OffscreenCanvas(T,v):Ii("canvas")}function y(T,v,V,tt){let nt=1;if((T.width>tt||T.height>tt)&&(nt=tt/Math.max(T.width,T.height)),nt<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const at=v?ps:Math.floor,_t=at(nt*T.width),A=at(nt*T.height);p===void 0&&(p=w(_t,A));const F=V?w(_t,A):p;return F.width=_t,F.height=A,F.getContext("2d").drawImage(T,0,0,_t,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+_t+"x"+A+")."),F}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return Dr(T.width)&&Dr(T.height)}function S(T){return a?!1:T.wrapS!==Fe||T.wrapT!==Fe||T.minFilter!==ge&&T.minFilter!==Ce}function L(T,v){return T.generateMipmaps&&v&&T.minFilter!==ge&&T.minFilter!==Ce}function R(T){r.generateMipmap(T)}function x(T,v,V,tt,nt=!1){if(a===!1)return v;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let at=v;return v===6403&&(V===5126&&(at=33326),V===5131&&(at=33325),V===5121&&(at=33321)),v===33319&&(V===5126&&(at=33328),V===5131&&(at=33327),V===5121&&(at=33323)),v===6408&&(V===5126&&(at=34836),V===5131&&(at=34842),V===5121&&(at=tt===kt&&nt===!1?35907:32856),V===32819&&(at=32854),V===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function E(T,v,V){return L(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==ge&&T.minFilter!==Ce?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function D(T){return T===ge||T===ra||T===Gs?9728:9729}function U(T){const v=T.target;v.removeEventListener("dispose",U),N(v),v.isVideoTexture&&_.delete(v)}function G(T){const v=T.target;v.removeEventListener("dispose",G),W(v)}function N(T){const v=n.get(T);if(v.__webglInit===void 0)return;const V=T.source,tt=f.get(V);if(tt){const nt=tt[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&I(T),Object.keys(tt).length===0&&f.delete(V)}n.remove(T)}function I(T){const v=n.get(T);r.deleteTexture(v.__webglTexture);const V=T.source,tt=f.get(V);delete tt[v.__cacheKey],o.memory.textures--}function W(T){const v=T.texture,V=n.get(T),tt=n.get(v);if(tt.__webglTexture!==void 0&&(r.deleteTexture(tt.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)r.deleteFramebuffer(V.__webglFramebuffer[nt]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[nt]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let nt=0;nt<V.__webglColorRenderbuffer.length;nt++)V.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[nt]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let nt=0,at=v.length;nt<at;nt++){const _t=n.get(v[nt]);_t.__webglTexture&&(r.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(v[nt])}n.remove(v),n.remove(T)}let Z=0;function Q(){Z=0}function $(){const T=Z;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),Z+=1,T}function K(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.encoding),v.join()}function Y(T,v){const V=n.get(T);if(T.isVideoTexture&&ce(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const tt=T.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(V,T,v);return}}e.bindTexture(3553,V.__webglTexture,33984+v)}function H(T,v){const V=n.get(T);if(T.version>0&&V.__version!==T.version){ht(V,T,v);return}e.bindTexture(35866,V.__webglTexture,33984+v)}function B(T,v){const V=n.get(T);if(T.version>0&&V.__version!==T.version){ht(V,T,v);return}e.bindTexture(32879,V.__webglTexture,33984+v)}function it(T,v){const V=n.get(T);if(T.version>0&&V.__version!==T.version){mt(V,T,v);return}e.bindTexture(34067,V.__webglTexture,33984+v)}const et={[Zt]:10497,[Fe]:33071,[Lr]:33648},st={[ge]:9728,[ra]:9984,[Gs]:9986,[Ce]:9729,[zl]:9985,[Pi]:9987};function X(T,v,V){if(V?(r.texParameteri(T,10242,et[v.wrapS]),r.texParameteri(T,10243,et[v.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,et[v.wrapR]),r.texParameteri(T,10240,st[v.magFilter]),r.texParameteri(T,10241,st[v.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(v.wrapS!==Fe||v.wrapT!==Fe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,D(v.magFilter)),r.texParameteri(T,10241,D(v.minFilter)),v.minFilter!==ge&&v.minFilter!==Ce&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===ge||v.minFilter!==Gs&&v.minFilter!==Pi||v.type===bn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===Di&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(T,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function yt(T,v){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",U));const tt=v.source;let nt=f.get(tt);nt===void 0&&(nt={},f.set(tt,nt));const at=K(v);if(at!==T.__cacheKey){nt[at]===void 0&&(nt[at]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[at].usedTimes++;const _t=nt[T.__cacheKey];_t!==void 0&&(nt[T.__cacheKey].usedTimes--,_t.usedTimes===0&&I(v)),T.__cacheKey=at,T.__webglTexture=nt[at].texture}return V}function ht(T,v,V){let tt=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=35866),v.isData3DTexture&&(tt=32879);const nt=yt(T,v),at=v.source;e.bindTexture(tt,T.__webglTexture,33984+V);const _t=n.get(at);if(at.version!==_t.__version||nt===!0){e.activeTexture(33984+V),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const A=S(v)&&M(v.image)===!1;let F=y(v.image,A,!1,h);F=re(v,F);const ot=M(F)||a,ut=s.convert(v.format,v.encoding);let ct=s.convert(v.type),pt=x(v.internalFormat,ut,ct,v.encoding,v.isVideoTexture);X(tt,v,ot);let ft;const At=v.mipmaps,wt=a&&v.isVideoTexture!==!0,Pt=_t.__version===void 0||nt===!0,P=E(v,F,ot);if(v.isDepthTexture)pt=6402,a?v.type===bn?pt=36012:v.type===Mn?pt=33190:v.type===ei?pt=35056:pt=33189:v.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Sn&&pt===6402&&v.type!==Eo&&v.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Mn,ct=s.convert(v.type)),v.format===si&&pt===6402&&(pt=34041,v.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=ei,ct=s.convert(v.type))),Pt&&(wt?e.texStorage2D(3553,1,pt,F.width,F.height):e.texImage2D(3553,0,pt,F.width,F.height,0,ut,ct,null));else if(v.isDataTexture)if(At.length>0&&ot){wt&&Pt&&e.texStorage2D(3553,P,pt,At[0].width,At[0].height);for(let k=0,J=At.length;k<J;k++)ft=At[k],wt?e.texSubImage2D(3553,k,0,0,ft.width,ft.height,ut,ct,ft.data):e.texImage2D(3553,k,pt,ft.width,ft.height,0,ut,ct,ft.data);v.generateMipmaps=!1}else wt?(Pt&&e.texStorage2D(3553,P,pt,F.width,F.height),e.texSubImage2D(3553,0,0,0,F.width,F.height,ut,ct,F.data)):e.texImage2D(3553,0,pt,F.width,F.height,0,ut,ct,F.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){wt&&Pt&&e.texStorage3D(35866,P,pt,At[0].width,At[0].height,F.depth);for(let k=0,J=At.length;k<J;k++)ft=At[k],v.format!==Ne?ut!==null?wt?e.compressedTexSubImage3D(35866,k,0,0,0,ft.width,ft.height,F.depth,ut,ft.data,0,0):e.compressedTexImage3D(35866,k,pt,ft.width,ft.height,F.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?e.texSubImage3D(35866,k,0,0,0,ft.width,ft.height,F.depth,ut,ct,ft.data):e.texImage3D(35866,k,pt,ft.width,ft.height,F.depth,0,ut,ct,ft.data)}else{wt&&Pt&&e.texStorage2D(3553,P,pt,At[0].width,At[0].height);for(let k=0,J=At.length;k<J;k++)ft=At[k],v.format!==Ne?ut!==null?wt?e.compressedTexSubImage2D(3553,k,0,0,ft.width,ft.height,ut,ft.data):e.compressedTexImage2D(3553,k,pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?e.texSubImage2D(3553,k,0,0,ft.width,ft.height,ut,ct,ft.data):e.texImage2D(3553,k,pt,ft.width,ft.height,0,ut,ct,ft.data)}else if(v.isDataArrayTexture)wt?(Pt&&e.texStorage3D(35866,P,pt,F.width,F.height,F.depth),e.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,ut,ct,F.data)):e.texImage3D(35866,0,pt,F.width,F.height,F.depth,0,ut,ct,F.data);else if(v.isData3DTexture)wt?(Pt&&e.texStorage3D(32879,P,pt,F.width,F.height,F.depth),e.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,ut,ct,F.data)):e.texImage3D(32879,0,pt,F.width,F.height,F.depth,0,ut,ct,F.data);else if(v.isFramebufferTexture){if(Pt)if(wt)e.texStorage2D(3553,P,pt,F.width,F.height);else{let k=F.width,J=F.height;for(let dt=0;dt<P;dt++)e.texImage2D(3553,dt,pt,k,J,0,ut,ct,null),k>>=1,J>>=1}}else if(At.length>0&&ot){wt&&Pt&&e.texStorage2D(3553,P,pt,At[0].width,At[0].height);for(let k=0,J=At.length;k<J;k++)ft=At[k],wt?e.texSubImage2D(3553,k,0,0,ut,ct,ft):e.texImage2D(3553,k,pt,ut,ct,ft);v.generateMipmaps=!1}else wt?(Pt&&e.texStorage2D(3553,P,pt,F.width,F.height),e.texSubImage2D(3553,0,0,0,ut,ct,F)):e.texImage2D(3553,0,pt,ut,ct,F);L(v,ot)&&R(tt),_t.__version=at.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function mt(T,v,V){if(v.image.length!==6)return;const tt=yt(T,v),nt=v.source;e.bindTexture(34067,T.__webglTexture,33984+V);const at=n.get(nt);if(nt.version!==at.__version||tt===!0){e.activeTexture(33984+V),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const _t=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,F=[];for(let k=0;k<6;k++)!_t&&!A?F[k]=y(v.image[k],!1,!0,l):F[k]=A?v.image[k].image:v.image[k],F[k]=re(v,F[k]);const ot=F[0],ut=M(ot)||a,ct=s.convert(v.format,v.encoding),pt=s.convert(v.type),ft=x(v.internalFormat,ct,pt,v.encoding),At=a&&v.isVideoTexture!==!0,wt=at.__version===void 0||tt===!0;let Pt=E(v,ot,ut);X(34067,v,ut);let P;if(_t){At&&wt&&e.texStorage2D(34067,Pt,ft,ot.width,ot.height);for(let k=0;k<6;k++){P=F[k].mipmaps;for(let J=0;J<P.length;J++){const dt=P[J];v.format!==Ne?ct!==null?At?e.compressedTexSubImage2D(34069+k,J,0,0,dt.width,dt.height,ct,dt.data):e.compressedTexImage2D(34069+k,J,ft,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?e.texSubImage2D(34069+k,J,0,0,dt.width,dt.height,ct,pt,dt.data):e.texImage2D(34069+k,J,ft,dt.width,dt.height,0,ct,pt,dt.data)}}}else{P=v.mipmaps,At&&wt&&(P.length>0&&Pt++,e.texStorage2D(34067,Pt,ft,F[0].width,F[0].height));for(let k=0;k<6;k++)if(A){At?e.texSubImage2D(34069+k,0,0,0,F[k].width,F[k].height,ct,pt,F[k].data):e.texImage2D(34069+k,0,ft,F[k].width,F[k].height,0,ct,pt,F[k].data);for(let J=0;J<P.length;J++){const gt=P[J].image[k].image;At?e.texSubImage2D(34069+k,J+1,0,0,gt.width,gt.height,ct,pt,gt.data):e.texImage2D(34069+k,J+1,ft,gt.width,gt.height,0,ct,pt,gt.data)}}else{At?e.texSubImage2D(34069+k,0,0,0,ct,pt,F[k]):e.texImage2D(34069+k,0,ft,ct,pt,F[k]);for(let J=0;J<P.length;J++){const dt=P[J];At?e.texSubImage2D(34069+k,J+1,0,0,ct,pt,dt.image[k]):e.texImage2D(34069+k,J+1,ft,ct,pt,dt.image[k])}}}L(v,ut)&&R(34067),at.__version=nt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function lt(T,v,V,tt,nt){const at=s.convert(V.format,V.encoding),_t=s.convert(V.type),A=x(V.internalFormat,at,_t,V.encoding);n.get(v).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,A,v.width,v.height,v.depth,0,at,_t,null):e.texImage2D(nt,0,A,v.width,v.height,0,at,_t,null)),e.bindFramebuffer(36160,T),Ft(v)?d.framebufferTexture2DMultisampleEXT(36160,tt,nt,n.get(V).__webglTexture,0,Bt(v)):(nt===3553||nt>=34069&&nt<=34074)&&r.framebufferTexture2D(36160,tt,nt,n.get(V).__webglTexture,0),e.bindFramebuffer(36160,null)}function Lt(T,v,V){if(r.bindRenderbuffer(36161,T),v.depthBuffer&&!v.stencilBuffer){let tt=33189;if(V||Ft(v)){const nt=v.depthTexture;nt&&nt.isDepthTexture&&(nt.type===bn?tt=36012:nt.type===Mn&&(tt=33190));const at=Bt(v);Ft(v)?d.renderbufferStorageMultisampleEXT(36161,at,tt,v.width,v.height):r.renderbufferStorageMultisample(36161,at,tt,v.width,v.height)}else r.renderbufferStorage(36161,tt,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(v.depthBuffer&&v.stencilBuffer){const tt=Bt(v);V&&Ft(v)===!1?r.renderbufferStorageMultisample(36161,tt,35056,v.width,v.height):Ft(v)?d.renderbufferStorageMultisampleEXT(36161,tt,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const tt=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let nt=0;nt<tt.length;nt++){const at=tt[nt],_t=s.convert(at.format,at.encoding),A=s.convert(at.type),F=x(at.internalFormat,_t,A,at.encoding),ot=Bt(v);V&&Ft(v)===!1?r.renderbufferStorageMultisample(36161,ot,F,v.width,v.height):Ft(v)?d.renderbufferStorageMultisampleEXT(36161,ot,F,v.width,v.height):r.renderbufferStorage(36161,F,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function Mt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const tt=n.get(v.depthTexture).__webglTexture,nt=Bt(v);if(v.depthTexture.format===Sn)Ft(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,nt):r.framebufferTexture2D(36160,36096,3553,tt,0);else if(v.depthTexture.format===si)Ft(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,nt):r.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function xt(T){const v=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Mt(v.__webglFramebuffer,T)}else if(V){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]=r.createRenderbuffer(),Lt(v.__webglDepthbuffer[tt],T,!1)}else e.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Lt(v.__webglDepthbuffer,T,!1);e.bindFramebuffer(36160,null)}function qt(T,v,V){const tt=n.get(T);v!==void 0&&lt(tt.__webglFramebuffer,T,T.texture,36064,3553),V!==void 0&&xt(T)}function Wt(T){const v=T.texture,V=n.get(T),tt=n.get(v);T.addEventListener("dispose",G),T.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture()),tt.__version=v.version,o.memory.textures++);const nt=T.isWebGLCubeRenderTarget===!0,at=T.isWebGLMultipleRenderTargets===!0,_t=M(T)||a;if(nt){V.__webglFramebuffer=[];for(let A=0;A<6;A++)V.__webglFramebuffer[A]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),at)if(i.drawBuffers){const A=T.texture;for(let F=0,ot=A.length;F<ot;F++){const ut=n.get(A[F]);ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Ft(T)===!1){const A=at?v:[v];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const ot=A[F];V.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[F]);const ut=s.convert(ot.format,ot.encoding),ct=s.convert(ot.type),pt=x(ot.internalFormat,ut,ct,ot.encoding,T.isXRRenderTarget===!0),ft=Bt(T);r.renderbufferStorageMultisample(36161,ft,pt,T.width,T.height),r.framebufferRenderbuffer(36160,36064+F,36161,V.__webglColorRenderbuffer[F])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Lt(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,tt.__webglTexture),X(34067,v,_t);for(let A=0;A<6;A++)lt(V.__webglFramebuffer[A],T,v,36064,34069+A);L(v,_t)&&R(34067),e.unbindTexture()}else if(at){const A=T.texture;for(let F=0,ot=A.length;F<ot;F++){const ut=A[F],ct=n.get(ut);e.bindTexture(3553,ct.__webglTexture),X(3553,ut,_t),lt(V.__webglFramebuffer,T,ut,36064+F,3553),L(ut,_t)&&R(3553)}e.unbindTexture()}else{let A=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?A=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(A,tt.__webglTexture),X(A,v,_t),lt(V.__webglFramebuffer,T,v,36064,A),L(v,_t)&&R(A),e.unbindTexture()}T.depthBuffer&&xt(T)}function Xt(T){const v=M(T)||a,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let tt=0,nt=V.length;tt<nt;tt++){const at=V[tt];if(L(at,v)){const _t=T.isWebGLCubeRenderTarget?34067:3553,A=n.get(at).__webglTexture;e.bindTexture(_t,A),R(_t),e.unbindTexture()}}}function te(T){if(a&&T.samples>0&&Ft(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,tt=T.height;let nt=16384;const at=[],_t=T.stencilBuffer?33306:36096,A=n.get(T),F=T.isWebGLMultipleRenderTargets===!0;if(F)for(let ot=0;ot<v.length;ot++)e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ot,36161,null),e.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ot,3553,null,0);e.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,A.__webglFramebuffer);for(let ot=0;ot<v.length;ot++){at.push(36064+ot),T.depthBuffer&&at.push(_t);const ut=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(ut===!1&&(T.depthBuffer&&(nt|=256),T.stencilBuffer&&(nt|=1024)),F&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ot]),ut===!0&&(r.invalidateFramebuffer(36008,[_t]),r.invalidateFramebuffer(36009,[_t])),F){const ct=n.get(v[ot]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ct,0)}r.blitFramebuffer(0,0,V,tt,0,0,V,tt,nt,9728),m&&r.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),F)for(let ot=0;ot<v.length;ot++){e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ot,36161,A.__webglColorRenderbuffer[ot]);const ut=n.get(v[ot]).__webglTexture;e.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ot,3553,ut,0)}e.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Bt(T){return Math.min(u,T.samples)}function Ft(T){const v=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ce(T){const v=o.render.frame;_.get(T)!==v&&(_.set(T,v),T.update())}function re(T,v){const V=T.encoding,tt=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Pr||V!==An&&(V===kt?a===!1?t.has("EXT_sRGB")===!0&&tt===Ne?(T.format=Pr,T.minFilter=Ce,T.generateMipmaps=!1):v=Po.sRGBToLinear(v):(tt!==Ne||nt!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),v}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.setTexture2D=Y,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=it,this.rebindTextures=qt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ft}function lp(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===En)return 5121;if(s===Vl)return 32819;if(s===Gl)return 32820;if(s===Ul)return 5120;if(s===Bl)return 5122;if(s===Eo)return 5123;if(s===kl)return 5124;if(s===Mn)return 5125;if(s===bn)return 5126;if(s===Di)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hl)return 6406;if(s===Ne)return 6408;if(s===Xl)return 6409;if(s===ql)return 6410;if(s===Sn)return 6402;if(s===si)return 34041;if(s===Wl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Pr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$l)return 6403;if(s===jl)return 36244;if(s===Yl)return 33319;if(s===Zl)return 33320;if(s===Kl)return 36249;if(s===Hs||s===Ws||s===Xs||s===qs)if(o===kt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ws)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===aa||s===oa||s===la||s===ca)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===aa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===la)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ca)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ha||s===ua)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ha)return o===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ua)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===da||s===fa||s===pa||s===ma||s===ga||s===_a||s===xa||s===va||s===ya||s===Ma||s===ba||s===Sa||s===wa||s===Ta)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===da)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fa)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pa)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ma)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ga)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_a)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===xa)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===va)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ya)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ma)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ba)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sa)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wa)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ta)return o===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ea)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ea)return o===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ei?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class cp extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qn extends ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hp={type:"move"};class vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n),g=this._getHandJoint(l,p);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=f.radius),g.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class up extends ve{constructor(t,e,n,i,s,o,a,c,l,h){if(h=h!==void 0?h:Sn,h!==Sn&&h!==si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Sn&&(n=Mn),n===void 0&&h===si&&(n=ei),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ge,this.minFilter=c!==void 0?c:ge,this.flipY=!1,this.generateMipmaps=!1}}class dp extends Dn{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,h=null,u=null,d=null,m=null;const _=e.getContextAttributes();let p=null,f=null;const g=[],w=[],y=new Set,M=new Map,S=new we;S.layers.enable(1),S.viewport=new Ht;const L=new we;L.layers.enable(2),L.viewport=new Ht;const R=[S,L],x=new cp;x.layers.enable(1),x.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let B=g[H];return B===void 0&&(B=new vr,g[H]=B),B.getTargetRaySpace()},this.getControllerGrip=function(H){let B=g[H];return B===void 0&&(B=new vr,g[H]=B),B.getGripSpace()},this.getHand=function(H){let B=g[H];return B===void 0&&(B=new vr,g[H]=B),B.getHandSpace()};function U(H){const B=w.indexOf(H.inputSource);if(B===-1)return;const it=g[B];it!==void 0&&it.dispatchEvent({type:H.type,data:H.inputSource})}function G(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",N);for(let H=0;H<g.length;H++){const B=w[H];B!==null&&(w[H]=null,g[H].disconnect(B))}E=null,D=null,t.setRenderTarget(p),d=null,u=null,h=null,i=null,f=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",G),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,B),i.updateRenderState({baseLayer:d}),f=new Cn(d.framebufferWidth,d.framebufferHeight,{format:Ne,type:En,encoding:t.outputEncoding,stencilBuffer:_.stencil})}else{let B=null,it=null,et=null;_.depth&&(et=_.stencil?35056:33190,B=_.stencil?si:Sn,it=_.stencil?ei:Mn);const st={colorFormat:32856,depthFormat:et,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(st),i.updateRenderState({layers:[u]}),f=new Cn(u.textureWidth,u.textureHeight,{format:Ne,type:En,depthTexture:new up(u.textureWidth,u.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,encoding:t.outputEncoding,samples:_.antialias?4:0});const X=t.properties.get(f);X.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),Y.setContext(i),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(H){for(let B=0;B<H.removed.length;B++){const it=H.removed[B],et=w.indexOf(it);et>=0&&(w[et]=null,g[et].disconnect(it))}for(let B=0;B<H.added.length;B++){const it=H.added[B];let et=w.indexOf(it);if(et===-1){for(let X=0;X<g.length;X++)if(X>=w.length){w.push(it),et=X;break}else if(w[X]===null){w[X]=it,et=X;break}if(et===-1)break}const st=g[et];st&&st.connect(it)}}const I=new C,W=new C;function Z(H,B,it){I.setFromMatrixPosition(B.matrixWorld),W.setFromMatrixPosition(it.matrixWorld);const et=I.distanceTo(W),st=B.projectionMatrix.elements,X=it.projectionMatrix.elements,yt=st[14]/(st[10]-1),ht=st[14]/(st[10]+1),mt=(st[9]+1)/st[5],lt=(st[9]-1)/st[5],Lt=(st[8]-1)/st[0],Mt=(X[8]+1)/X[0],xt=yt*Lt,qt=yt*Mt,Wt=et/(-Lt+Mt),Xt=Wt*-Lt;B.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Xt),H.translateZ(Wt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const te=yt+Wt,Bt=ht+Wt,Ft=xt-Xt,ce=qt+(et-Xt),re=mt*ht/Bt*te,T=lt*ht/Bt*te;H.projectionMatrix.makePerspective(Ft,ce,re,T,te,Bt)}function Q(H,B){B===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(B.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;x.near=L.near=S.near=H.near,x.far=L.far=S.far=H.far,(E!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,D=x.far);const B=H.parent,it=x.cameras;Q(x,B);for(let st=0;st<it.length;st++)Q(it[st],B);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),H.matrix.copy(x.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const et=H.children;for(let st=0,X=et.length;st<X;st++)et[st].updateMatrixWorld(!0);it.length===2?Z(x,S,L):x.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(H){u!==null&&(u.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.getPlanes=function(){return y};let $=null;function K(H,B){if(l=B.getViewerPose(c||o),m=B,l!==null){const it=l.views;d!==null&&(t.setRenderTargetFramebuffer(f,d.framebuffer),t.setRenderTarget(f));let et=!1;it.length!==x.cameras.length&&(x.cameras.length=0,et=!0);for(let st=0;st<it.length;st++){const X=it[st];let yt=null;if(d!==null)yt=d.getViewport(X);else{const mt=h.getViewSubImage(u,X);yt=mt.viewport,st===0&&(t.setRenderTargetTextures(f,mt.colorTexture,u.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(f))}let ht=R[st];ht===void 0&&(ht=new we,ht.layers.enable(st),ht.viewport=new Ht,R[st]=ht),ht.matrix.fromArray(X.transform.matrix),ht.projectionMatrix.fromArray(X.projectionMatrix),ht.viewport.set(yt.x,yt.y,yt.width,yt.height),st===0&&x.matrix.copy(ht.matrix),et===!0&&x.cameras.push(ht)}}for(let it=0;it<g.length;it++){const et=w[it],st=g[it];et!==null&&st!==void 0&&st.update(et,B,c||o)}if($&&$(H,B),B.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:B.detectedPlanes});let it=null;for(const et of y)B.detectedPlanes.has(et)||(it===null&&(it=[]),it.push(et));if(it!==null)for(const et of it)y.delete(et),M.delete(et),n.dispatchEvent({type:"planeremoved",data:et});for(const et of B.detectedPlanes)if(!y.has(et))y.add(et),M.set(et,B.lastChangedTime),n.dispatchEvent({type:"planeadded",data:et});else{const st=M.get(et);et.lastChangedTime>st&&(M.set(et,et.lastChangedTime),n.dispatchEvent({type:"planechanged",data:et}))}}m=null}const Y=new Bo;Y.setAnimationLoop(K),this.setAnimationLoop=function(H){$=H},this.dispose=function(){}}}function fp(r,t){function e(p,f){f.color.getRGB(p.fogColor.value,Oo(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,g,w,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),u(p,f),f.isMeshPhysicalMaterial&&d(p,f,y)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),_(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,g,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Le&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Le&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const g=t.get(f).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const M=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*M}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let w;f.map?w=f.map:f.specularMap?w=f.specularMap:f.displacementMap?w=f.displacementMap:f.normalMap?w=f.normalMap:f.bumpMap?w=f.bumpMap:f.roughnessMap?w=f.roughnessMap:f.metalnessMap?w=f.metalnessMap:f.alphaMap?w=f.alphaMap:f.emissiveMap?w=f.emissiveMap:f.clearcoatMap?w=f.clearcoatMap:f.clearcoatNormalMap?w=f.clearcoatNormalMap:f.clearcoatRoughnessMap?w=f.clearcoatRoughnessMap:f.iridescenceMap?w=f.iridescenceMap:f.iridescenceThicknessMap?w=f.iridescenceThicknessMap:f.specularIntensityMap?w=f.specularIntensityMap:f.specularColorMap?w=f.specularColorMap:f.transmissionMap?w=f.transmissionMap:f.thicknessMap?w=f.thicknessMap:f.sheenColorMap?w=f.sheenColorMap:f.sheenRoughnessMap&&(w=f.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let y;f.aoMap?y=f.aoMap:f.lightMap&&(y=f.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,g,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*g,p.scale.value=w*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let y;f.map?y=f.map:f.alphaMap&&(y=f.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let g;f.map?g=f.map:f.alphaMap&&(g=f.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,g){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Le&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function pp(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(35375):0;function c(w,y){const M=y.program;n.uniformBlockBinding(w,M)}function l(w,y){let M=i[w.id];M===void 0&&(_(w),M=h(w),i[w.id]=M,w.addEventListener("dispose",f));const S=y.program;n.updateUBOMapping(w,S);const L=t.render.frame;s[w.id]!==L&&(d(w),s[w.id]=L)}function h(w){const y=u();w.__bindingPointIndex=y;const M=r.createBuffer(),S=w.__size,L=w.usage;return r.bindBuffer(35345,M),r.bufferData(35345,S,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,M),M}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const y=i[w.id],M=w.uniforms,S=w.__cache;r.bindBuffer(35345,y);for(let L=0,R=M.length;L<R;L++){const x=M[L];if(m(x,L,S)===!0){const E=x.__offset,D=Array.isArray(x.value)?x.value:[x.value];let U=0;for(let G=0;G<D.length;G++){const N=D[G],I=p(N);typeof N=="number"?(x.__data[0]=N,r.bufferSubData(35345,E+U,x.__data)):N.isMatrix3?(x.__data[0]=N.elements[0],x.__data[1]=N.elements[1],x.__data[2]=N.elements[2],x.__data[3]=N.elements[0],x.__data[4]=N.elements[3],x.__data[5]=N.elements[4],x.__data[6]=N.elements[5],x.__data[7]=N.elements[0],x.__data[8]=N.elements[6],x.__data[9]=N.elements[7],x.__data[10]=N.elements[8],x.__data[11]=N.elements[0]):(N.toArray(x.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,E,x.__data)}}r.bindBuffer(35345,null)}function m(w,y,M){const S=w.value;if(M[y]===void 0){if(typeof S=="number")M[y]=S;else{const L=Array.isArray(S)?S:[S],R=[];for(let x=0;x<L.length;x++)R.push(L[x].clone());M[y]=R}return!0}else if(typeof S=="number"){if(M[y]!==S)return M[y]=S,!0}else{const L=Array.isArray(M[y])?M[y]:[M[y]],R=Array.isArray(S)?S:[S];for(let x=0;x<L.length;x++){const E=L[x];if(E.equals(R[x])===!1)return E.copy(R[x]),!0}}return!1}function _(w){const y=w.uniforms;let M=0;const S=16;let L=0;for(let R=0,x=y.length;R<x;R++){const E=y[R],D={boundary:0,storage:0},U=Array.isArray(E.value)?E.value:[E.value];for(let G=0,N=U.length;G<N;G++){const I=U[G],W=p(I);D.boundary+=W.boundary,D.storage+=W.storage}if(E.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,R>0){L=M%S;const G=S-L;L!==0&&G-D.boundary<0&&(M+=S-L,E.__offset=M)}M+=D.storage}return L=M%S,L>0&&(M+=S-L),w.__size=M,w.__cache={},this}function p(w){const y={boundary:0,storage:0};return typeof w=="number"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function f(w){const y=w.target;y.removeEventListener("dispose",f);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function g(){for(const w in i)r.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}function mp(){const r=Ii("canvas");return r.style.display="block",r}function Xo(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:mp(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const m=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=An,this.physicallyCorrectLights=!1,this.toneMapping=Ze,this.toneMappingExposure=1;const p=this;let f=!1,g=0,w=0,y=null,M=-1,S=null;const L=new Ht,R=new Ht;let x=null,E=t.width,D=t.height,U=1,G=null,N=null;const I=new Ht(0,0,E,D),W=new Ht(0,0,E,D);let Z=!1;const Q=new Vr;let $=!1,K=!1,Y=null;const H=new Yt,B=new St,it=new C,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return y===null?U:1}let X=e;function yt(b,z){for(let q=0;q<b.length;q++){const O=b[q],j=t.getContext(O,z);if(j!==null)return j}return null}try{const b={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Or}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",At,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),X=yt(z,b),X===null)throw yt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ht,mt,lt,Lt,Mt,xt,qt,Wt,Xt,te,Bt,Ft,ce,re,T,v,V,tt,nt,at,_t,A,F,ot;function ut(){ht=new Td(X),mt=new vd(X,ht,r),ht.init(mt),A=new lp(X,ht,mt),lt=new ap(X,ht,mt),Lt=new Cd,Mt=new qf,xt=new op(X,ht,lt,Mt,mt,A,Lt),qt=new Md(p),Wt=new wd(p),Xt=new zc(X,mt),F=new _d(X,ht,Xt,mt),te=new Ed(X,Xt,Lt,F),Bt=new Rd(X,te,Xt,Lt),nt=new Dd(X,mt,xt),v=new yd(Mt),Ft=new Xf(p,qt,Wt,ht,mt,F,v),ce=new fp(p,Mt),re=new jf,T=new tp(ht,mt),tt=new gd(p,qt,Wt,lt,Bt,h,o),V=new rp(p,Bt,mt),ot=new pp(X,Lt,mt,lt),at=new xd(X,ht,Lt,mt),_t=new Ad(X,ht,Lt,mt),Lt.programs=Ft.programs,p.capabilities=mt,p.extensions=ht,p.properties=Mt,p.renderLists=re,p.shadowMap=V,p.state=lt,p.info=Lt}ut();const ct=new dp(p,X);this.xr=ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(b){b!==void 0&&(U=b,this.setSize(E,D,!1))},this.getSize=function(b){return b.set(E,D)},this.setSize=function(b,z,q){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=b,D=z,t.width=Math.floor(b*U),t.height=Math.floor(z*U),q!==!1&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(E*U,D*U).floor()},this.setDrawingBufferSize=function(b,z,q){E=b,D=z,U=q,t.width=Math.floor(b*q),t.height=Math.floor(z*q),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(I)},this.setViewport=function(b,z,q,O){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,z,q,O),lt.viewport(L.copy(I).multiplyScalar(U).floor())},this.getScissor=function(b){return b.copy(W)},this.setScissor=function(b,z,q,O){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,z,q,O),lt.scissor(R.copy(W).multiplyScalar(U).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(b){lt.setScissorTest(Z=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(b=!0,z=!0,q=!0){let O=0;b&&(O|=16384),z&&(O|=256),q&&(O|=1024),X.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",At,!1),re.dispose(),T.dispose(),Mt.dispose(),qt.dispose(),Wt.dispose(),Bt.dispose(),F.dispose(),ot.dispose(),Ft.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",dt),ct.removeEventListener("sessionend",gt),Y&&(Y.dispose(),Y=null),zt.stop()};function pt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const b=Lt.autoReset,z=V.enabled,q=V.autoUpdate,O=V.needsUpdate,j=V.type;ut(),Lt.autoReset=b,V.enabled=z,V.autoUpdate=q,V.needsUpdate=O,V.type=j}function At(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function wt(b){const z=b.target;z.removeEventListener("dispose",wt),Pt(z)}function Pt(b){P(b),Mt.remove(b)}function P(b){const z=Mt.get(b).programs;z!==void 0&&(z.forEach(function(q){Ft.releaseProgram(q)}),b.isShaderMaterial&&Ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,q,O,j,vt){z===null&&(z=et);const bt=j.isMesh&&j.matrixWorld.determinant()<0,Et=rl(b,z,q,O,j);lt.setMaterial(O,bt);let Ct=q.index,Ot=1;O.wireframe===!0&&(Ct=te.getWireframeAttribute(q),Ot=2);const Dt=q.drawRange,Rt=q.attributes.position;let Kt=Dt.start*Ot,ye=(Dt.start+Dt.count)*Ot;vt!==null&&(Kt=Math.max(Kt,vt.start*Ot),ye=Math.min(ye,(vt.start+vt.count)*Ot)),Ct!==null?(Kt=Math.max(Kt,0),ye=Math.min(ye,Ct.count)):Rt!=null&&(Kt=Math.max(Kt,0),ye=Math.min(ye,Rt.count));const Ge=ye-Kt;if(Ge<0||Ge===1/0)return;F.setup(j,O,Et,q,Ct);let cn,Jt=at;if(Ct!==null&&(cn=Xt.get(Ct),Jt=_t,Jt.setIndex(cn)),j.isMesh)O.wireframe===!0?(lt.setLineWidth(O.wireframeLinewidth*st()),Jt.setMode(1)):Jt.setMode(4);else if(j.isLine){let It=O.linewidth;It===void 0&&(It=1),lt.setLineWidth(It*st()),j.isLineSegments?Jt.setMode(1):j.isLineLoop?Jt.setMode(2):Jt.setMode(3)}else j.isPoints?Jt.setMode(0):j.isSprite&&Jt.setMode(4);if(j.isInstancedMesh)Jt.renderInstances(Kt,Ge,j.count);else if(q.isInstancedBufferGeometry){const It=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Us=Math.min(q.instanceCount,It);Jt.renderInstances(Kt,Ge,Us)}else Jt.render(Kt,Ge)},this.compile=function(b,z){function q(O,j,vt){O.transparent===!0&&O.side===Hi?(O.side=Le,O.needsUpdate=!0,Ee(O,j,vt),O.side=Tn,O.needsUpdate=!0,Ee(O,j,vt),O.side=Hi):Ee(O,j,vt)}d=T.get(b),d.init(),_.push(d),b.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(p.physicallyCorrectLights),b.traverse(function(O){const j=O.material;if(j)if(Array.isArray(j))for(let vt=0;vt<j.length;vt++){const bt=j[vt];q(bt,b,O)}else q(j,b,O)}),_.pop(),d=null};let k=null;function J(b){k&&k(b)}function dt(){zt.stop()}function gt(){zt.start()}const zt=new Bo;zt.setAnimationLoop(J),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(b){k=b,ct.setAnimationLoop(b),b===null?zt.stop():zt.start()},ct.addEventListener("sessionstart",dt),ct.addEventListener("sessionend",gt),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(z),z=ct.getCamera()),b.isScene===!0&&b.onBeforeRender(p,b,z,y),d=T.get(b,_.length),d.init(),_.push(d),H.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(H),K=this.localClippingEnabled,$=v.init(this.clippingPlanes,K,z),u=re.get(b,m.length),u.init(),m.push(u),ae(b,z,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(G,N),$===!0&&v.beginShadows();const q=d.state.shadowsArray;if(V.render(q,b,z),$===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(u,b),d.setupLights(p.physicallyCorrectLights),z.isArrayCamera){const O=z.cameras;for(let j=0,vt=O.length;j<vt;j++){const bt=O[j];he(u,b,bt,bt.viewport)}}else he(u,b,z);y!==null&&(xt.updateMultisampleRenderTarget(y),xt.updateRenderTargetMipmap(y)),b.isScene===!0&&b.onAfterRender(p,b,z),F.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function ae(b,z,q,O){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){O&&it.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);const bt=Bt.update(b),Et=b.material;Et.visible&&u.push(b,bt,Et,q,it.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Lt.render.frame&&(b.skeleton.update(),b.skeleton.frame=Lt.render.frame),!b.frustumCulled||Q.intersectsObject(b))){O&&it.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);const bt=Bt.update(b),Et=b.material;if(Array.isArray(Et)){const Ct=bt.groups;for(let Ot=0,Dt=Ct.length;Ot<Dt;Ot++){const Rt=Ct[Ot],Kt=Et[Rt.materialIndex];Kt&&Kt.visible&&u.push(b,bt,Kt,q,it.z,Rt)}}else Et.visible&&u.push(b,bt,Et,q,it.z,null)}}const vt=b.children;for(let bt=0,Et=vt.length;bt<Et;bt++)ae(vt[bt],z,q,O)}function he(b,z,q,O){const j=b.opaque,vt=b.transmissive,bt=b.transparent;d.setupLightsView(q),vt.length>0&&ln(j,z,q),O&&lt.viewport(L.copy(O)),j.length>0&&Vt(j,z,q),vt.length>0&&Vt(vt,z,q),bt.length>0&&Vt(bt,z,q),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function ln(b,z,q){const O=mt.isWebGL2;Y===null&&(Y=new Cn(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")?Di:En,minFilter:Pi,samples:O&&s===!0?4:0})),p.getDrawingBufferSize(B),O?Y.setSize(B.x,B.y):Y.setSize(ps(B.x),ps(B.y));const j=p.getRenderTarget();p.setRenderTarget(Y),p.clear();const vt=p.toneMapping;p.toneMapping=Ze,Vt(b,z,q),p.toneMapping=vt,xt.updateMultisampleRenderTarget(Y),xt.updateRenderTargetMipmap(Y),p.setRenderTarget(j)}function Vt(b,z,q){const O=z.isScene===!0?z.overrideMaterial:null;for(let j=0,vt=b.length;j<vt;j++){const bt=b[j],Et=bt.object,Ct=bt.geometry,Ot=O===null?bt.material:O,Dt=bt.group;Et.layers.test(q.layers)&&Ve(Et,z,q,Ct,Ot,Dt)}}function Ve(b,z,q,O,j,vt){b.onBeforeRender(p,z,q,O,j,vt),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(p,z,q,O,b,vt),j.transparent===!0&&j.side===Hi?(j.side=Le,j.needsUpdate=!0,p.renderBufferDirect(q,z,O,j,b,vt),j.side=Tn,j.needsUpdate=!0,p.renderBufferDirect(q,z,O,j,b,vt),j.side=Hi):p.renderBufferDirect(q,z,O,j,b,vt),b.onAfterRender(p,z,q,O,j,vt)}function Ee(b,z,q){z.isScene!==!0&&(z=et);const O=Mt.get(b),j=d.state.lights,vt=d.state.shadowsArray,bt=j.state.version,Et=Ft.getParameters(b,j.state,vt,z,q),Ct=Ft.getProgramCacheKey(Et);let Ot=O.programs;O.environment=b.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(b.isMeshStandardMaterial?Wt:qt).get(b.envMap||O.environment),Ot===void 0&&(b.addEventListener("dispose",wt),Ot=new Map,O.programs=Ot);let Dt=Ot.get(Ct);if(Dt!==void 0){if(O.currentProgram===Dt&&O.lightsStateVersion===bt)return Kr(b,Et),Dt}else Et.uniforms=Ft.getUniforms(b),b.onBuild(q,Et,p),b.onBeforeCompile(Et,p),Dt=Ft.acquireProgram(Et,Ct),Ot.set(Ct,Dt),O.uniforms=Et.uniforms;const Rt=O.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=v.uniform),Kr(b,Et),O.needsLights=ol(b),O.lightsStateVersion=bt,O.needsLights&&(Rt.ambientLightColor.value=j.state.ambient,Rt.lightProbe.value=j.state.probe,Rt.directionalLights.value=j.state.directional,Rt.directionalLightShadows.value=j.state.directionalShadow,Rt.spotLights.value=j.state.spot,Rt.spotLightShadows.value=j.state.spotShadow,Rt.rectAreaLights.value=j.state.rectArea,Rt.ltc_1.value=j.state.rectAreaLTC1,Rt.ltc_2.value=j.state.rectAreaLTC2,Rt.pointLights.value=j.state.point,Rt.pointLightShadows.value=j.state.pointShadow,Rt.hemisphereLights.value=j.state.hemi,Rt.directionalShadowMap.value=j.state.directionalShadowMap,Rt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Rt.spotShadowMap.value=j.state.spotShadowMap,Rt.spotLightMatrix.value=j.state.spotLightMatrix,Rt.spotLightMap.value=j.state.spotLightMap,Rt.pointShadowMap.value=j.state.pointShadowMap,Rt.pointShadowMatrix.value=j.state.pointShadowMatrix);const Kt=Dt.getUniforms(),ye=ds.seqWithValue(Kt.seq,Rt);return O.currentProgram=Dt,O.uniformsList=ye,Dt}function Kr(b,z){const q=Mt.get(b);q.outputEncoding=z.outputEncoding,q.instancing=z.instancing,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function rl(b,z,q,O,j){z.isScene!==!0&&(z=et),xt.resetTextureUnits();const vt=z.fog,bt=O.isMeshStandardMaterial?z.environment:null,Et=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:An,Ct=(O.isMeshStandardMaterial?Wt:qt).get(O.envMap||bt),Ot=O.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Dt=!!O.normalMap&&!!q.attributes.tangent,Rt=!!q.morphAttributes.position,Kt=!!q.morphAttributes.normal,ye=!!q.morphAttributes.color,Ge=O.toneMapped?p.toneMapping:Ze,cn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Jt=cn!==void 0?cn.length:0,It=Mt.get(O),Us=d.state.lights;if($===!0&&(K===!0||b!==S)){const Me=b===S&&O.id===M;v.setState(O,b,Me)}let oe=!1;O.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Us.state.version||It.outputEncoding!==Et||j.isInstancedMesh&&It.instancing===!1||!j.isInstancedMesh&&It.instancing===!0||j.isSkinnedMesh&&It.skinning===!1||!j.isSkinnedMesh&&It.skinning===!0||It.envMap!==Ct||O.fog===!0&&It.fog!==vt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==v.numPlanes||It.numIntersection!==v.numIntersection)||It.vertexAlphas!==Ot||It.vertexTangents!==Dt||It.morphTargets!==Rt||It.morphNormals!==Kt||It.morphColors!==ye||It.toneMapping!==Ge||mt.isWebGL2===!0&&It.morphTargetsCount!==Jt)&&(oe=!0):(oe=!0,It.__version=O.version);let hn=It.currentProgram;oe===!0&&(hn=Ee(O,z,j));let Jr=!1,pi=!1,Bs=!1;const fe=hn.getUniforms(),un=It.uniforms;if(lt.useProgram(hn.program)&&(Jr=!0,pi=!0,Bs=!0),O.id!==M&&(M=O.id,pi=!0),Jr||S!==b){if(fe.setValue(X,"projectionMatrix",b.projectionMatrix),mt.logarithmicDepthBuffer&&fe.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),S!==b&&(S=b,pi=!0,Bs=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Me=fe.map.cameraPosition;Me!==void 0&&Me.setValue(X,it.setFromMatrixPosition(b.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&fe.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||j.isSkinnedMesh)&&fe.setValue(X,"viewMatrix",b.matrixWorldInverse)}if(j.isSkinnedMesh){fe.setOptional(X,j,"bindMatrix"),fe.setOptional(X,j,"bindMatrixInverse");const Me=j.skeleton;Me&&(mt.floatVertexTextures?(Me.boneTexture===null&&Me.computeBoneTexture(),fe.setValue(X,"boneTexture",Me.boneTexture,xt),fe.setValue(X,"boneTextureSize",Me.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ks=q.morphAttributes;if((ks.position!==void 0||ks.normal!==void 0||ks.color!==void 0&&mt.isWebGL2===!0)&&nt.update(j,q,O,hn),(pi||It.receiveShadow!==j.receiveShadow)&&(It.receiveShadow=j.receiveShadow,fe.setValue(X,"receiveShadow",j.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(un.envMap.value=Ct,un.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),pi&&(fe.setValue(X,"toneMappingExposure",p.toneMappingExposure),It.needsLights&&al(un,Bs),vt&&O.fog===!0&&ce.refreshFogUniforms(un,vt),ce.refreshMaterialUniforms(un,O,U,D,Y),ds.upload(X,It.uniformsList,un,xt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ds.upload(X,It.uniformsList,un,xt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&fe.setValue(X,"center",j.center),fe.setValue(X,"modelViewMatrix",j.modelViewMatrix),fe.setValue(X,"normalMatrix",j.normalMatrix),fe.setValue(X,"modelMatrix",j.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Me=O.uniformsGroups;for(let Vs=0,ll=Me.length;Vs<ll;Vs++)if(mt.isWebGL2){const Qr=Me[Vs];ot.update(Qr,hn),ot.bind(Qr,hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hn}function al(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function ol(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(b,z,q){Mt.get(b.texture).__webglTexture=z,Mt.get(b.depthTexture).__webglTexture=q;const O=Mt.get(b);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=q===void 0,O.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const q=Mt.get(b);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,q=0){y=b,g=z,w=q;let O=!0,j=null,vt=!1,bt=!1;if(b){const Ct=Mt.get(b);Ct.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(36160,null),O=!1):Ct.__webglFramebuffer===void 0?xt.setupRenderTarget(b):Ct.__hasExternalTextures&&xt.rebindTextures(b,Mt.get(b.texture).__webglTexture,Mt.get(b.depthTexture).__webglTexture);const Ot=b.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(bt=!0);const Dt=Mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(j=Dt[z],vt=!0):mt.isWebGL2&&b.samples>0&&xt.useMultisampledRTT(b)===!1?j=Mt.get(b).__webglMultisampledFramebuffer:j=Dt,L.copy(b.viewport),R.copy(b.scissor),x=b.scissorTest}else L.copy(I).multiplyScalar(U).floor(),R.copy(W).multiplyScalar(U).floor(),x=Z;if(lt.bindFramebuffer(36160,j)&&mt.drawBuffers&&O&&lt.drawBuffers(b,j),lt.viewport(L),lt.scissor(R),lt.setScissorTest(x),vt){const Ct=Mt.get(b.texture);X.framebufferTexture2D(36160,36064,34069+z,Ct.__webglTexture,q)}else if(bt){const Ct=Mt.get(b.texture),Ot=z||0;X.framebufferTextureLayer(36160,36064,Ct.__webglTexture,q||0,Ot)}M=-1},this.readRenderTargetPixels=function(b,z,q,O,j,vt,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Et=Et[bt]),Et){lt.bindFramebuffer(36160,Et);try{const Ct=b.texture,Ot=Ct.format,Dt=Ct.type;if(Ot!==Ne&&A.convert(Ot)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Rt=Dt===Di&&(ht.has("EXT_color_buffer_half_float")||mt.isWebGL2&&ht.has("EXT_color_buffer_float"));if(Dt!==En&&A.convert(Dt)!==X.getParameter(35738)&&!(Dt===bn&&(mt.isWebGL2||ht.has("OES_texture_float")||ht.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-O&&q>=0&&q<=b.height-j&&X.readPixels(z,q,O,j,A.convert(Ot),A.convert(Dt),vt)}finally{const Ct=y!==null?Mt.get(y).__webglFramebuffer:null;lt.bindFramebuffer(36160,Ct)}}},this.copyFramebufferToTexture=function(b,z,q=0){const O=Math.pow(2,-q),j=Math.floor(z.image.width*O),vt=Math.floor(z.image.height*O);xt.setTexture2D(z,0),X.copyTexSubImage2D(3553,q,0,0,b.x,b.y,j,vt),lt.unbindTexture()},this.copyTextureToTexture=function(b,z,q,O=0){const j=z.image.width,vt=z.image.height,bt=A.convert(q.format),Et=A.convert(q.type);xt.setTexture2D(q,0),X.pixelStorei(37440,q.flipY),X.pixelStorei(37441,q.premultiplyAlpha),X.pixelStorei(3317,q.unpackAlignment),z.isDataTexture?X.texSubImage2D(3553,O,b.x,b.y,j,vt,bt,Et,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(3553,O,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,bt,z.mipmaps[0].data):X.texSubImage2D(3553,O,b.x,b.y,bt,Et,z.image),O===0&&q.generateMipmaps&&X.generateMipmap(3553),lt.unbindTexture()},this.copyTextureToTexture3D=function(b,z,q,O,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=b.max.x-b.min.x+1,bt=b.max.y-b.min.y+1,Et=b.max.z-b.min.z+1,Ct=A.convert(O.format),Ot=A.convert(O.type);let Dt;if(O.isData3DTexture)xt.setTexture3D(O,0),Dt=32879;else if(O.isDataArrayTexture)xt.setTexture2DArray(O,0),Dt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,O.flipY),X.pixelStorei(37441,O.premultiplyAlpha),X.pixelStorei(3317,O.unpackAlignment);const Rt=X.getParameter(3314),Kt=X.getParameter(32878),ye=X.getParameter(3316),Ge=X.getParameter(3315),cn=X.getParameter(32877),Jt=q.isCompressedTexture?q.mipmaps[0]:q.image;X.pixelStorei(3314,Jt.width),X.pixelStorei(32878,Jt.height),X.pixelStorei(3316,b.min.x),X.pixelStorei(3315,b.min.y),X.pixelStorei(32877,b.min.z),q.isDataTexture||q.isData3DTexture?X.texSubImage3D(Dt,j,z.x,z.y,z.z,vt,bt,Et,Ct,Ot,Jt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Dt,j,z.x,z.y,z.z,vt,bt,Et,Ct,Jt.data)):X.texSubImage3D(Dt,j,z.x,z.y,z.z,vt,bt,Et,Ct,Ot,Jt),X.pixelStorei(3314,Rt),X.pixelStorei(32878,Kt),X.pixelStorei(3316,ye),X.pixelStorei(3315,Ge),X.pixelStorei(32877,cn),j===0&&O.generateMipmaps&&X.generateMipmap(Dt),lt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?xt.setTextureCube(b,0):b.isData3DTexture?xt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?xt.setTexture2DArray(b,0):xt.setTexture2D(b,0),lt.unbindTexture()},this.resetState=function(){g=0,w=0,y=null,lt.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class gp extends Xo{}gp.prototype.isWebGL1Renderer=!0;let _p=class qo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new qo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}};class xp extends ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class $o extends ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const lo=new Yt,Ir=new Io,ls=new xs,cs=new C;class vp extends ne{constructor(t=new Pe,e=new $o){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(i),ls.radius+=s,t.ray.intersectsSphere(ls)===!1)return;lo.copy(i).invert(),Ir.copy(t.ray).applyMatrix4(lo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let _=d,p=m;_<p;_++){const f=l.getX(_);cs.fromBufferAttribute(u,f),co(cs,f,c,i,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,p=m;_<p;_++)cs.fromBufferAttribute(u,_),co(cs,_,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function co(r,t,e,n,i,s,o){const a=Ir.distanceSqToPoint(r);if(a<e){const c=new C;Ir.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class Hr extends Pe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],m=[];let _=0;const p=[],f=n/2;let g=0;w(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(m,2));function w(){const M=new C,S=new C;let L=0;const R=(e-t)/n;for(let x=0;x<=s;x++){const E=[],D=x/s,U=D*(e-t)+t;for(let G=0;G<=i;G++){const N=G/i,I=N*c+a,W=Math.sin(I),Z=Math.cos(I);S.x=U*W,S.y=-D*n+f,S.z=U*Z,u.push(S.x,S.y,S.z),M.set(W,R,Z).normalize(),d.push(M.x,M.y,M.z),m.push(N,1-D),E.push(_++)}p.push(E)}for(let x=0;x<i;x++)for(let E=0;E<s;E++){const D=p[E][x],U=p[E+1][x],G=p[E+1][x+1],N=p[E][x+1];h.push(D,U,N),h.push(U,G,N),L+=6}l.addGroup(g,L,0),g+=L}function y(M){const S=_,L=new St,R=new C;let x=0;const E=M===!0?t:e,D=M===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,f*D,0),d.push(0,D,0),m.push(.5,.5),_++;const U=_;for(let G=0;G<=i;G++){const I=G/i*c+a,W=Math.cos(I),Z=Math.sin(I);R.x=E*Z,R.y=f*D,R.z=E*W,u.push(R.x,R.y,R.z),d.push(0,D,0),L.x=W*.5+.5,L.y=Z*.5*D+.5,m.push(L.x,L.y),_++}for(let G=0;G<i;G++){const N=S+G,I=U+G;M===!0?h.push(I,I+1,N):h.push(I+1,I,N),x+=3}l.addGroup(g,x,M===!0?1:2),g+=x}}static fromJSON(t){return new Hr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wr extends Hr{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Wr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xr extends Pe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new C,d=new C,m=[],_=[],p=[],f=[];for(let g=0;g<=n;g++){const w=[],y=g/n;let M=0;g==0&&o==0?M=.5/e:g==n&&c==Math.PI&&(M=-.5/e);for(let S=0;S<=e;S++){const L=S/e;u.x=-t*Math.cos(i+L*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+L*s)*Math.sin(o+y*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),p.push(d.x,d.y,d.z),f.push(L+M,1-y),w.push(l++)}h.push(w)}for(let g=0;g<n;g++)for(let w=0;w<e;w++){const y=h[g][w+1],M=h[g][w],S=h[g+1][w],L=h[g+1][w+1];(g!==0||o>0)&&m.push(y,M,L),(g!==n-1||c<Math.PI)&&m.push(M,S,L)}this.setIndex(m),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(f,2))}static fromJSON(t){return new Xr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ui extends ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ms={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class yp{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],_=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const Mp=new yp;class ys{constructor(t){this.manager=t!==void 0?t:Mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const je={};class bp extends Error{constructor(t,e){super(t),this.response=e}}class Sp extends ys{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=ms.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(je[t]!==void 0){je[t].push({onLoad:e,onProgress:n,onError:i});return}je[t]=[],je[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=je[t],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,_=m!==0;let p=0;const f=new ReadableStream({start(g){w();function w(){u.read().then(({done:y,value:M})=>{if(y)g.close();else{p+=M.byteLength;const S=new ProgressEvent("progress",{lengthComputable:_,loaded:p,total:m});for(let L=0,R=h.length;L<R;L++){const x=h[L];x.onProgress&&x.onProgress(S)}g.enqueue(M),w()}})}}});return new Response(f)}else throw new bp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(_=>m.decode(_))}}}).then(l=>{ms.add(t,l);const h=je[t];delete je[t];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=je[t];if(h===void 0)throw this.manager.itemError(t),l;delete je[t];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class wp extends ys{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=ms.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ii("img");function c(){h(),ms.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Tp extends ys{constructor(t){super(t)}load(t,e,n,i){const s=new ve,o=new wp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class qr extends ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const yr=new Yt,ho=new C,uo=new C;class jo{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ho.setFromMatrixPosition(t.matrixWorld),e.position.copy(ho),uo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uo),e.updateMatrixWorld(),yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fo=new Yt,bi=new C,Mr=new C;class Ep extends jo{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bi.setFromMatrixPosition(t.matrixWorld),n.position.copy(bi),Mr.copy(n.position),Mr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Mr),n.updateMatrixWorld(),i.makeTranslation(-bi.x,-bi.y,-bi.z),fo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fo)}}class Vi extends qr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ep}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ap extends jo{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cp extends qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ne.DefaultUp),this.updateMatrix(),this.target=new ne,this.shadow=new Ap}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Lp extends qr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let hs;class Yo{static getContext(){return hs===void 0&&(hs=new(window.AudioContext||window.webkitAudioContext)),hs}static setContext(t){hs=t}}class Pp extends ys{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Sp(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{const c=a.slice(0);Yo.getContext().decodeAudioData(c,function(h){e(h)})}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}}class Zo{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=po(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=po();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function po(){return(typeof performance>"u"?Date:performance).now()}const mn=new C,mo=new an,Dp=new C,gn=new C;class Rp extends ne{constructor(){super(),this.type="AudioListener",this.context=Yo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Zo}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(mn,mo,Dp),gn.set(0,0,-1).applyQuaternion(mo),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(mn.x,i),e.positionY.linearRampToValueAtTime(mn.y,i),e.positionZ.linearRampToValueAtTime(mn.z,i),e.forwardX.linearRampToValueAtTime(gn.x,i),e.forwardY.linearRampToValueAtTime(gn.y,i),e.forwardZ.linearRampToValueAtTime(gn.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(mn.x,mn.y,mn.z),e.setOrientation(gn.x,gn.y,gn.z,n.x,n.y,n.z)}}class Ko extends ne{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class go{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Or}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Or);const _o={type:"change"},br={type:"start"},xo={type:"end"};class Ip extends Dn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:On.ROTATE,TWO:On.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",re),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_o),n.update(),s=i.NONE},this.update=function(){const A=new C,F=new an().setFromUnitVectors(t.up,new C(0,1,0)),ot=F.clone().invert(),ut=new C,ct=new an,pt=2*Math.PI;return function(){const At=n.object.position;A.copy(At).sub(n.target),A.applyQuaternion(F),a.setFromVector3(A),n.autoRotate&&s===i.NONE&&E(R()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let wt=n.minAzimuthAngle,Pt=n.maxAzimuthAngle;return isFinite(wt)&&isFinite(Pt)&&(wt<-Math.PI?wt+=pt:wt>Math.PI&&(wt-=pt),Pt<-Math.PI?Pt+=pt:Pt>Math.PI&&(Pt-=pt),wt<=Pt?a.theta=Math.max(wt,Math.min(Pt,a.theta)):a.theta=a.theta>(wt+Pt)/2?Math.max(wt,a.theta):Math.min(Pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),A.setFromSpherical(a),A.applyQuaternion(ot),At.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||ut.distanceToSquared(n.object.position)>o||8*(1-ct.dot(n.object.quaternion))>o?(n.dispatchEvent(_o),ut.copy(n.object.position),ct.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",qt),n.domElement.removeEventListener("pointercancel",te),n.domElement.removeEventListener("wheel",ce),n.domElement.removeEventListener("pointermove",Wt),n.domElement.removeEventListener("pointerup",Xt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",re)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new go,c=new go;let l=1;const h=new C;let u=!1;const d=new St,m=new St,_=new St,p=new St,f=new St,g=new St,w=new St,y=new St,M=new St,S=[],L={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function E(A){c.theta-=A}function D(A){c.phi-=A}const U=function(){const A=new C;return function(ot,ut){A.setFromMatrixColumn(ut,0),A.multiplyScalar(-ot),h.add(A)}}(),G=function(){const A=new C;return function(ot,ut){n.screenSpacePanning===!0?A.setFromMatrixColumn(ut,1):(A.setFromMatrixColumn(ut,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ot),h.add(A)}}(),N=function(){const A=new C;return function(ot,ut){const ct=n.domElement;if(n.object.isPerspectiveCamera){const pt=n.object.position;A.copy(pt).sub(n.target);let ft=A.length();ft*=Math.tan(n.object.fov/2*Math.PI/180),U(2*ot*ft/ct.clientHeight,n.object.matrix),G(2*ut*ft/ct.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(U(ot*(n.object.right-n.object.left)/n.object.zoom/ct.clientWidth,n.object.matrix),G(ut*(n.object.top-n.object.bottom)/n.object.zoom/ct.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(A){n.object.isPerspectiveCamera?l/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function W(A){n.object.isPerspectiveCamera?l*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(A){d.set(A.clientX,A.clientY)}function Q(A){w.set(A.clientX,A.clientY)}function $(A){p.set(A.clientX,A.clientY)}function K(A){m.set(A.clientX,A.clientY),_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const F=n.domElement;E(2*Math.PI*_.x/F.clientHeight),D(2*Math.PI*_.y/F.clientHeight),d.copy(m),n.update()}function Y(A){y.set(A.clientX,A.clientY),M.subVectors(y,w),M.y>0?I(x()):M.y<0&&W(x()),w.copy(y),n.update()}function H(A){f.set(A.clientX,A.clientY),g.subVectors(f,p).multiplyScalar(n.panSpeed),N(g.x,g.y),p.copy(f),n.update()}function B(A){A.deltaY<0?W(x()):A.deltaY>0&&I(x()),n.update()}function it(A){let F=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),F=!0;break}F&&(A.preventDefault(),n.update())}function et(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),F=.5*(S[0].pageY+S[1].pageY);d.set(A,F)}}function st(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),F=.5*(S[0].pageY+S[1].pageY);p.set(A,F)}}function X(){const A=S[0].pageX-S[1].pageX,F=S[0].pageY-S[1].pageY,ot=Math.sqrt(A*A+F*F);w.set(0,ot)}function yt(){n.enableZoom&&X(),n.enablePan&&st()}function ht(){n.enableZoom&&X(),n.enableRotate&&et()}function mt(A){if(S.length==1)m.set(A.pageX,A.pageY);else{const ot=_t(A),ut=.5*(A.pageX+ot.x),ct=.5*(A.pageY+ot.y);m.set(ut,ct)}_.subVectors(m,d).multiplyScalar(n.rotateSpeed);const F=n.domElement;E(2*Math.PI*_.x/F.clientHeight),D(2*Math.PI*_.y/F.clientHeight),d.copy(m)}function lt(A){if(S.length===1)f.set(A.pageX,A.pageY);else{const F=_t(A),ot=.5*(A.pageX+F.x),ut=.5*(A.pageY+F.y);f.set(ot,ut)}g.subVectors(f,p).multiplyScalar(n.panSpeed),N(g.x,g.y),p.copy(f)}function Lt(A){const F=_t(A),ot=A.pageX-F.x,ut=A.pageY-F.y,ct=Math.sqrt(ot*ot+ut*ut);y.set(0,ct),M.set(0,Math.pow(y.y/w.y,n.zoomSpeed)),I(M.y),w.copy(y)}function Mt(A){n.enableZoom&&Lt(A),n.enablePan&&lt(A)}function xt(A){n.enableZoom&&Lt(A),n.enableRotate&&mt(A)}function qt(A){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",Wt),n.domElement.addEventListener("pointerup",Xt)),tt(A),A.pointerType==="touch"?T(A):Bt(A))}function Wt(A){n.enabled!==!1&&(A.pointerType==="touch"?v(A):Ft(A))}function Xt(A){nt(A),S.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",Wt),n.domElement.removeEventListener("pointerup",Xt)),n.dispatchEvent(xo),s=i.NONE}function te(A){nt(A)}function Bt(A){let F;switch(A.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Nn.DOLLY:if(n.enableZoom===!1)return;Q(A),s=i.DOLLY;break;case Nn.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;$(A),s=i.PAN}else{if(n.enableRotate===!1)return;Z(A),s=i.ROTATE}break;case Nn.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;Z(A),s=i.ROTATE}else{if(n.enablePan===!1)return;$(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(br)}function Ft(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;K(A);break;case i.DOLLY:if(n.enableZoom===!1)return;Y(A);break;case i.PAN:if(n.enablePan===!1)return;H(A);break}}function ce(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(br),B(A),n.dispatchEvent(xo))}function re(A){n.enabled===!1||n.enablePan===!1||it(A)}function T(A){switch(at(A),S.length){case 1:switch(n.touches.ONE){case On.ROTATE:if(n.enableRotate===!1)return;et(),s=i.TOUCH_ROTATE;break;case On.PAN:if(n.enablePan===!1)return;st(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case On.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;yt(),s=i.TOUCH_DOLLY_PAN;break;case On.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ht(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(br)}function v(A){switch(at(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;mt(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;lt(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Mt(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(A),n.update();break;default:s=i.NONE}}function V(A){n.enabled!==!1&&A.preventDefault()}function tt(A){S.push(A)}function nt(A){delete L[A.pointerId];for(let F=0;F<S.length;F++)if(S[F].pointerId==A.pointerId){S.splice(F,1);return}}function at(A){let F=L[A.pointerId];F===void 0&&(F=new St,L[A.pointerId]=F),F.set(A.pageX,A.pageY)}function _t(A){const F=A.pointerId===S[0].pointerId?S[1]:S[0];return L[F.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",qt),n.domElement.addEventListener("pointercancel",te),n.domElement.addEventListener("wheel",ce,{passive:!1}),this.update()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class ke{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),ke.nextNameID=ke.nextNameID||0,this.$name.id=`lil-gui-name-${++ke.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Fp extends ke{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Fr(r){let t,e;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Np={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Fr,toHexString:Fr},Fi={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Op={isPrimitive:!1,match:Array.isArray,fromHexString(r,t,e=1){const n=Fi.fromHexString(r);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([r,t,e],n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Fi.toHexString(i)}},zp={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,e=1){const n=Fi.fromHexString(r);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r,g:t,b:e},n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Fi.toHexString(i)}},Up=[Np,Fi,Op,zp];function Bp(r){return Up.find(t=>t.match(r))}class kp extends ke{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Bp(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Fr(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Sr extends ke{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Vp extends ke{constructor(t,e,n,i,s,o){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},e=g=>{const w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+g),this.$input.value=this.getValue())},n=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),e(this._step*this._arrowKeyMultiplier(g)*-1))},i=g=>{this._inputFocused&&(g.preventDefault(),e(this._step*this._normalizeMouseWheel(g)))};let s=!1,o,a,c,l,h;const u=5,d=g=>{o=g.clientX,a=c=g.clientY,s=!0,l=this.getValue(),h=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=g=>{if(s){const w=g.clientX-o,y=g.clientY-a;Math.abs(y)>u?(g.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>u&&_()}if(!s){const w=g.clientY-c;h-=w*this._step*this._arrowKeyMultiplier(g),l+h>this._max?h=this._max-l:l+h<this._min&&(h=this._min-l),this._snapClampSetValue(l+h)}c=g.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,w,y,M,S)=>(g-w)/(y-w)*(S-M)+M,e=g=>{const w=this.$slider.getBoundingClientRect();let y=t(g,w.left,w.right,this._min,this._max);this._snapClampSetValue(y)},n=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=g=>{e(g.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,c;const l=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,c=g.touches[0].clientY,o=!0):l(g),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=g=>{if(o){const w=g.touches[0].clientX-a,y=g.touches[0].clientY-c;Math.abs(w)>Math.abs(y)?l(g):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else g.preventDefault(),e(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),_=400;let p;const f=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const y=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(m,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Gp extends ke{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class Hp extends ke{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Wp=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Xp(r){const t=document.createElement("style");t.innerHTML=r;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let vo=!1;class $r{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!vo&&o&&(Xp(Wp),vo=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,e,n,i,s){if(Object(n)===n)return new Gp(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Vp(this,t,e,n,i,s);case"boolean":return new Fp(this,t,e);case"string":return new Hp(this,t,e);case"function":return new Sr(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new kp(this,t,e,n)}addFolder(t){return new $r({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Sr||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Sr)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}class wr{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}dot4(t,e,n,i,s){return t[0]*e+t[1]*n+t[2]*i+t[3]*s}noise(t,e){let n,i,s;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),l=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,m=l-u,_=t-d,p=e-m;let f,g;_>p?(f=1,g=0):(f=0,g=1);const w=_-f+h,y=p-g+h,M=_-1+2*h,S=p-1+2*h,L=c&255,R=l&255,x=this.perm[L+this.perm[R]]%12,E=this.perm[L+f+this.perm[R+g]]%12,D=this.perm[L+1+this.perm[R+1]]%12;let U=.5-_*_-p*p;U<0?n=0:(U*=U,n=U*U*this.dot(this.grad3[x],_,p));let G=.5-w*w-y*y;G<0?i=0:(G*=G,i=G*G*this.dot(this.grad3[E],w,y));let N=.5-M*M-S*S;return N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[D],M,S)),70*(n+i+s)}noise3d(t,e,n){let i,s,o,a;const c=.3333333333333333,l=(t+e+n)*c,h=Math.floor(t+l),u=Math.floor(e+l),d=Math.floor(n+l),m=1/6,_=(h+u+d)*m,p=h-_,f=u-_,g=d-_,w=t-p,y=e-f,M=n-g;let S,L,R,x,E,D;w>=y?y>=M?(S=1,L=0,R=0,x=1,E=1,D=0):w>=M?(S=1,L=0,R=0,x=1,E=0,D=1):(S=0,L=0,R=1,x=1,E=0,D=1):y<M?(S=0,L=0,R=1,x=0,E=1,D=1):w<M?(S=0,L=1,R=0,x=0,E=1,D=1):(S=0,L=1,R=0,x=1,E=1,D=0);const U=w-S+m,G=y-L+m,N=M-R+m,I=w-x+2*m,W=y-E+2*m,Z=M-D+2*m,Q=w-1+3*m,$=y-1+3*m,K=M-1+3*m,Y=h&255,H=u&255,B=d&255,it=this.perm[Y+this.perm[H+this.perm[B]]]%12,et=this.perm[Y+S+this.perm[H+L+this.perm[B+R]]]%12,st=this.perm[Y+x+this.perm[H+E+this.perm[B+D]]]%12,X=this.perm[Y+1+this.perm[H+1+this.perm[B+1]]]%12;let yt=.6-w*w-y*y-M*M;yt<0?i=0:(yt*=yt,i=yt*yt*this.dot3(this.grad3[it],w,y,M));let ht=.6-U*U-G*G-N*N;ht<0?s=0:(ht*=ht,s=ht*ht*this.dot3(this.grad3[et],U,G,N));let mt=.6-I*I-W*W-Z*Z;mt<0?o=0:(mt*=mt,o=mt*mt*this.dot3(this.grad3[st],I,W,Z));let lt=.6-Q*Q-$*$-K*K;return lt<0?a=0:(lt*=lt,a=lt*lt*this.dot3(this.grad3[X],Q,$,K)),32*(i+s+o+a)}noise4d(t,e,n,i){const s=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,m,_;const p=(t+e+n+i)*c,f=Math.floor(t+p),g=Math.floor(e+p),w=Math.floor(n+p),y=Math.floor(i+p),M=(f+g+w+y)*l,S=f-M,L=g-M,R=w-M,x=y-M,E=t-S,D=e-L,U=n-R,G=i-x,N=E>D?32:0,I=E>U?16:0,W=D>U?8:0,Z=E>G?4:0,Q=D>G?2:0,$=U>G?1:0,K=N+I+W+Z+Q+$,Y=o[K][0]>=3?1:0,H=o[K][1]>=3?1:0,B=o[K][2]>=3?1:0,it=o[K][3]>=3?1:0,et=o[K][0]>=2?1:0,st=o[K][1]>=2?1:0,X=o[K][2]>=2?1:0,yt=o[K][3]>=2?1:0,ht=o[K][0]>=1?1:0,mt=o[K][1]>=1?1:0,lt=o[K][2]>=1?1:0,Lt=o[K][3]>=1?1:0,Mt=E-Y+l,xt=D-H+l,qt=U-B+l,Wt=G-it+l,Xt=E-et+2*l,te=D-st+2*l,Bt=U-X+2*l,Ft=G-yt+2*l,ce=E-ht+3*l,re=D-mt+3*l,T=U-lt+3*l,v=G-Lt+3*l,V=E-1+4*l,tt=D-1+4*l,nt=U-1+4*l,at=G-1+4*l,_t=f&255,A=g&255,F=w&255,ot=y&255,ut=a[_t+a[A+a[F+a[ot]]]]%32,ct=a[_t+Y+a[A+H+a[F+B+a[ot+it]]]]%32,pt=a[_t+et+a[A+st+a[F+X+a[ot+yt]]]]%32,ft=a[_t+ht+a[A+mt+a[F+lt+a[ot+Lt]]]]%32,At=a[_t+1+a[A+1+a[F+1+a[ot+1]]]]%32;let wt=.6-E*E-D*D-U*U-G*G;wt<0?h=0:(wt*=wt,h=wt*wt*this.dot4(s[ut],E,D,U,G));let Pt=.6-Mt*Mt-xt*xt-qt*qt-Wt*Wt;Pt<0?u=0:(Pt*=Pt,u=Pt*Pt*this.dot4(s[ct],Mt,xt,qt,Wt));let P=.6-Xt*Xt-te*te-Bt*Bt-Ft*Ft;P<0?d=0:(P*=P,d=P*P*this.dot4(s[pt],Xt,te,Bt,Ft));let k=.6-ce*ce-re*re-T*T-v*v;k<0?m=0:(k*=k,m=k*k*this.dot4(s[ft],ce,re,T,v));let J=.6-V*V-tt*tt-nt*nt-at*at;return J<0?_=0:(J*=J,_=J*J*this.dot4(s[At],V,tt,nt,at)),27*(h+u+d+m+_)}}class Gt extends Pe{constructor(t={}){super(),this.isLightningStrike=!0,this.type="LightningStrike",this.init(Gt.copyParameters(t,t)),this.createMesh()}static createRandomGenerator(){const e=[];for(let i=0;i<2053;i++)e.push(Math.random());const n={currentSeed:0,random:function(){const i=e[n.currentSeed];return n.currentSeed=(n.currentSeed+1)%2053,i},getSeed:function(){return n.currentSeed/2053},setSeed:function(i){n.currentSeed=Math.floor(i*2053)%2053}};return n}static copyParameters(t={},e={}){const n=function(i){return e===t?i:i.clone()};return t.sourceOffset=e.sourceOffset!==void 0?n(e.sourceOffset):new C(0,100,0),t.destOffset=e.destOffset!==void 0?n(e.destOffset):new C(0,0,0),t.timeScale=e.timeScale!==void 0?e.timeScale:1,t.roughness=e.roughness!==void 0?e.roughness:.9,t.straightness=e.straightness!==void 0?e.straightness:.7,t.up0=e.up0!==void 0?n(e.up0):new C(0,0,1),t.up1=e.up1!==void 0?n(e.up1):new C(0,0,1),t.radius0=e.radius0!==void 0?e.radius0:1,t.radius1=e.radius1!==void 0?e.radius1:1,t.radius0Factor=e.radius0Factor!==void 0?e.radius0Factor:.5,t.radius1Factor=e.radius1Factor!==void 0?e.radius1Factor:.2,t.minRadius=e.minRadius!==void 0?e.minRadius:.2,t.isEternal=e.isEternal!==void 0?e.isEternal:e.birthTime===void 0||e.deathTime===void 0,t.birthTime=e.birthTime,t.deathTime=e.deathTime,t.propagationTimeFactor=e.propagationTimeFactor!==void 0?e.propagationTimeFactor:.1,t.vanishingTimeFactor=e.vanishingTimeFactor!==void 0?e.vanishingTimeFactor:.9,t.subrayPeriod=e.subrayPeriod!==void 0?e.subrayPeriod:4,t.subrayDutyCycle=e.subrayDutyCycle!==void 0?e.subrayDutyCycle:.6,t.maxIterations=e.maxIterations!==void 0?e.maxIterations:9,t.isStatic=e.isStatic!==void 0?e.isStatic:!1,t.ramification=e.ramification!==void 0?e.ramification:5,t.maxSubrayRecursion=e.maxSubrayRecursion!==void 0?e.maxSubrayRecursion:3,t.recursionProbability=e.recursionProbability!==void 0?e.recursionProbability:.6,t.generateUVs=e.generateUVs!==void 0?e.generateUVs:!1,t.randomGenerator=e.randomGenerator,t.noiseSeed=e.noiseSeed,t.onDecideSubrayCreation=e.onDecideSubrayCreation,t.onSubrayCreation=e.onSubrayCreation,t}update(t){this.isStatic||(this.rayParameters.isEternal||this.rayParameters.birthTime<=t&&t<=this.rayParameters.deathTime?(this.updateMesh(t),t<this.subrays[0].endPropagationTime?this.state=Gt.RAY_PROPAGATING:t>this.subrays[0].beginVanishingTime?this.state=Gt.RAY_VANISHING:this.state=Gt.RAY_STEADY,this.visible=!0):(this.visible=!1,t<this.rayParameters.birthTime?this.state=Gt.RAY_UNBORN:this.state=Gt.RAY_EXTINGUISHED))}init(t){this.rayParameters=t,this.maxIterations=t.maxIterations!==void 0?Math.floor(t.maxIterations):9,t.maxIterations=this.maxIterations,this.isStatic=t.isStatic!==void 0?t.isStatic:!1,t.isStatic=this.isStatic,this.ramification=t.ramification!==void 0?Math.floor(t.ramification):5,t.ramification=this.ramification,this.maxSubrayRecursion=t.maxSubrayRecursion!==void 0?Math.floor(t.maxSubrayRecursion):3,t.maxSubrayRecursion=this.maxSubrayRecursion,this.recursionProbability=t.recursionProbability!==void 0?t.recursionProbability:.6,t.recursionProbability=this.recursionProbability,this.generateUVs=t.generateUVs!==void 0?t.generateUVs:!1,t.generateUVs=this.generateUVs,t.randomGenerator!==void 0?(this.randomGenerator=t.randomGenerator,this.seedGenerator=t.randomGenerator,t.noiseSeed!==void 0&&this.seedGenerator.setSeed(t.noiseSeed)):(this.randomGenerator=Gt.createRandomGenerator(),this.seedGenerator=Math),t.onDecideSubrayCreation!==void 0?this.onDecideSubrayCreation=t.onDecideSubrayCreation:(this.createDefaultSubrayCreationCallbacks(),t.onSubrayCreation!==void 0&&(this.onSubrayCreation=t.onSubrayCreation)),this.state=Gt.RAY_INITIALIZED,this.maxSubrays=Math.ceil(1+Math.pow(this.ramification,Math.max(0,this.maxSubrayRecursion-1))),t.maxSubrays=this.maxSubrays,this.maxRaySegments=2*(1<<this.maxIterations),this.subrays=[];for(let e=0;e<this.maxSubrays;e++)this.subrays.push(this.createSubray());this.raySegments=[];for(let e=0;e<this.maxRaySegments;e++)this.raySegments.push(this.createSegment());this.time=0,this.timeFraction=0,this.currentSegmentCallback=null,this.currentCreateTriangleVertices=this.generateUVs?this.createTriangleVerticesWithUVs:this.createTriangleVerticesWithoutUVs,this.numSubrays=0,this.currentSubray=null,this.currentSegmentIndex=0,this.isInitialSegment=!1,this.subrayProbability=0,this.currentVertex=0,this.currentIndex=0,this.currentCoordinate=0,this.currentUVCoordinate=0,this.vertices=null,this.uvs=null,this.indices=null,this.positionAttribute=null,this.uvsAttribute=null,this.simplexX=new wr(this.seedGenerator),this.simplexY=new wr(this.seedGenerator),this.simplexZ=new wr(this.seedGenerator),this.forwards=new C,this.forwardsFill=new C,this.side=new C,this.down=new C,this.middlePos=new C,this.middleLinPos=new C,this.newPos=new C,this.vPos=new C,this.cross1=new C}createMesh(){const t=1<<this.maxIterations,e=3*(t+1)*this.maxSubrays,n=18*t*this.maxSubrays;this.vertices=new Float32Array(e*3),this.indices=new Uint32Array(n),this.generateUVs&&(this.uvs=new Float32Array(e*2)),this.fillMesh(0),this.setIndex(new kr(this.indices,1)),this.positionAttribute=new $t(this.vertices,3),this.setAttribute("position",this.positionAttribute),this.generateUVs&&(this.uvsAttribute=new $t(new Float32Array(this.uvs),2),this.setAttribute("uv",this.uvsAttribute)),this.isStatic||(this.index.usage=js,this.positionAttribute.usage=js,this.generateUVs&&(this.uvsAttribute.usage=js)),this.vertices=this.positionAttribute.array,this.indices=this.index.array,this.generateUVs&&(this.uvs=this.uvsAttribute.array)}updateMesh(t){this.fillMesh(t),this.drawRange.count=this.currentIndex,this.index.needsUpdate=!0,this.positionAttribute.needsUpdate=!0,this.generateUVs&&(this.uvsAttribute.needsUpdate=!0)}fillMesh(t){const e=this;this.currentVertex=0,this.currentIndex=0,this.currentCoordinate=0,this.currentUVCoordinate=0,this.fractalRay(t,function(i){const s=e.currentSubray;t<s.birthTime||(this.rayParameters.isEternal&&e.currentSubray.recursion==0?(e.createPrism(i),e.onDecideSubrayCreation(i,e)):t<s.endPropagationTime?e.timeFraction>=i.fraction0*s.propagationTimeFactor&&(e.createPrism(i),e.onDecideSubrayCreation(i,e)):t<s.beginVanishingTime?(e.createPrism(i),e.onDecideSubrayCreation(i,e)):(e.timeFraction<=s.vanishingTimeFactor+i.fraction1*(1-s.vanishingTimeFactor)&&e.createPrism(i),e.onDecideSubrayCreation(i,e)))})}addNewSubray(){return this.subrays[this.numSubrays++]}initSubray(t,e){t.pos0.copy(e.sourceOffset),t.pos1.copy(e.destOffset),t.up0.copy(e.up0),t.up1.copy(e.up1),t.radius0=e.radius0,t.radius1=e.radius1,t.birthTime=e.birthTime,t.deathTime=e.deathTime,t.timeScale=e.timeScale,t.roughness=e.roughness,t.straightness=e.straightness,t.propagationTimeFactor=e.propagationTimeFactor,t.vanishingTimeFactor=e.vanishingTimeFactor,t.maxIterations=this.maxIterations,t.seed=e.noiseSeed!==void 0?e.noiseSeed:0,t.recursion=0}fractalRay(t,e){this.time=t,this.currentSegmentCallback=e,this.numSubrays=0,this.initSubray(this.addNewSubray(),this.rayParameters);for(let n=0;n<this.numSubrays;n++){const i=this.subrays[n];this.currentSubray=i,this.randomGenerator.setSeed(i.seed),i.endPropagationTime=Ys.lerp(i.birthTime,i.deathTime,i.propagationTimeFactor),i.beginVanishingTime=Ys.lerp(i.deathTime,i.birthTime,1-i.vanishingTimeFactor);const s=this.randomGenerator.random;i.linPos0.set(s(),s(),s()).multiplyScalar(1e3),i.linPos1.set(s(),s(),s()).multiplyScalar(1e3),this.timeFraction=(t-i.birthTime)/(i.deathTime-i.birthTime),this.currentSegmentIndex=0,this.isInitialSegment=!0;const o=this.getNewSegment();o.iteration=0,o.pos0.copy(i.pos0),o.pos1.copy(i.pos1),o.linPos0.copy(i.linPos0),o.linPos1.copy(i.linPos1),o.up0.copy(i.up0),o.up1.copy(i.up1),o.radius0=i.radius0,o.radius1=i.radius1,o.fraction0=0,o.fraction1=1,o.positionVariationFactor=1-i.straightness,this.subrayProbability=this.ramification*Math.pow(this.recursionProbability,i.recursion)/(1<<i.maxIterations),this.fractalRayRecursive(o)}this.currentSegmentCallback=null,this.currentSubray=null}fractalRayRecursive(t){if(t.iteration>=this.currentSubray.maxIterations){this.currentSegmentCallback(t);return}this.forwards.subVectors(t.pos1,t.pos0);let e=this.forwards.length();e<1e-6&&(this.forwards.set(0,0,.01),e=this.forwards.length());const n=(t.radius0+t.radius1)*.5,i=(t.fraction0+t.fraction1)*.5,s=this.time*this.currentSubray.timeScale*Math.pow(2,t.iteration);this.middlePos.lerpVectors(t.pos0,t.pos1,.5),this.middleLinPos.lerpVectors(t.linPos0,t.linPos1,.5);const o=this.middleLinPos;this.newPos.set(this.simplexX.noise4d(o.x,o.y,o.z,s),this.simplexY.noise4d(o.x,o.y,o.z,s),this.simplexZ.noise4d(o.x,o.y,o.z,s)),this.newPos.multiplyScalar(t.positionVariationFactor*e),this.newPos.add(this.middlePos);const a=this.getNewSegment();a.pos0.copy(t.pos0),a.pos1.copy(this.newPos),a.linPos0.copy(t.linPos0),a.linPos1.copy(this.middleLinPos),a.up0.copy(t.up0),a.up1.copy(t.up1),a.radius0=t.radius0,a.radius1=n,a.fraction0=t.fraction0,a.fraction1=i,a.positionVariationFactor=t.positionVariationFactor*this.currentSubray.roughness,a.iteration=t.iteration+1;const c=this.getNewSegment();c.pos0.copy(this.newPos),c.pos1.copy(t.pos1),c.linPos0.copy(this.middleLinPos),c.linPos1.copy(t.linPos1),this.cross1.crossVectors(t.up0,this.forwards.normalize()),c.up0.crossVectors(this.forwards,this.cross1).normalize(),c.up1.copy(t.up1),c.radius0=n,c.radius1=t.radius1,c.fraction0=i,c.fraction1=t.fraction1,c.positionVariationFactor=t.positionVariationFactor*this.currentSubray.roughness,c.iteration=t.iteration+1,this.fractalRayRecursive(a),this.fractalRayRecursive(c)}createPrism(t){this.forwardsFill.subVectors(t.pos1,t.pos0).normalize(),this.isInitialSegment&&(this.currentCreateTriangleVertices(t.pos0,t.up0,this.forwardsFill,t.radius0,0),this.isInitialSegment=!1),this.currentCreateTriangleVertices(t.pos1,t.up0,this.forwardsFill,t.radius1,t.fraction1),this.createPrismFaces()}createTriangleVerticesWithoutUVs(t,e,n,i){this.side.crossVectors(e,n).multiplyScalar(i*Gt.COS30DEG),this.down.copy(e).multiplyScalar(-i*Gt.SIN30DEG);const s=this.vPos,o=this.vertices;s.copy(t).sub(this.side).add(this.down),o[this.currentCoordinate++]=s.x,o[this.currentCoordinate++]=s.y,o[this.currentCoordinate++]=s.z,s.copy(t).add(this.side).add(this.down),o[this.currentCoordinate++]=s.x,o[this.currentCoordinate++]=s.y,o[this.currentCoordinate++]=s.z,s.copy(e).multiplyScalar(i).add(t),o[this.currentCoordinate++]=s.x,o[this.currentCoordinate++]=s.y,o[this.currentCoordinate++]=s.z,this.currentVertex+=3}createTriangleVerticesWithUVs(t,e,n,i,s){this.side.crossVectors(e,n).multiplyScalar(i*Gt.COS30DEG),this.down.copy(e).multiplyScalar(-i*Gt.SIN30DEG);const o=this.vPos,a=this.vertices,c=this.uvs;o.copy(t).sub(this.side).add(this.down),a[this.currentCoordinate++]=o.x,a[this.currentCoordinate++]=o.y,a[this.currentCoordinate++]=o.z,c[this.currentUVCoordinate++]=s,c[this.currentUVCoordinate++]=0,o.copy(t).add(this.side).add(this.down),a[this.currentCoordinate++]=o.x,a[this.currentCoordinate++]=o.y,a[this.currentCoordinate++]=o.z,c[this.currentUVCoordinate++]=s,c[this.currentUVCoordinate++]=.5,o.copy(e).multiplyScalar(i).add(t),a[this.currentCoordinate++]=o.x,a[this.currentCoordinate++]=o.y,a[this.currentCoordinate++]=o.z,c[this.currentUVCoordinate++]=s,c[this.currentUVCoordinate++]=1,this.currentVertex+=3}createPrismFaces(t){const e=this.indices;t=this.currentVertex-6,e[this.currentIndex++]=t+1,e[this.currentIndex++]=t+2,e[this.currentIndex++]=t+5,e[this.currentIndex++]=t+1,e[this.currentIndex++]=t+5,e[this.currentIndex++]=t+4,e[this.currentIndex++]=t+0,e[this.currentIndex++]=t+1,e[this.currentIndex++]=t+4,e[this.currentIndex++]=t+0,e[this.currentIndex++]=t+4,e[this.currentIndex++]=t+3,e[this.currentIndex++]=t+2,e[this.currentIndex++]=t+0,e[this.currentIndex++]=t+3,e[this.currentIndex++]=t+2,e[this.currentIndex++]=t+3,e[this.currentIndex++]=t+5}createDefaultSubrayCreationCallbacks(){const t=this.randomGenerator.random;this.onDecideSubrayCreation=function(o,a){const c=a.currentSubray,l=a.rayParameters.subrayPeriod,h=a.rayParameters.subrayDutyCycle,u=a.rayParameters.isEternal&&c.recursion==0?-t()*l:Ys.lerp(c.birthTime,c.endPropagationTime,o.fraction0)-t()*l,d=a.time-u,m=Math.floor(d/l),_=t()*(m+1),p=d%l<=h*l;let f=0;if(p&&(f=a.subrayProbability),c.recursion<a.maxSubrayRecursion&&a.numSubrays<a.maxSubrays&&t()<f){const g=a.addNewSubray(),w=a.randomGenerator.getSeed();g.seed=_,a.randomGenerator.setSeed(_),g.recursion=c.recursion+1,g.maxIterations=Math.max(1,c.maxIterations-1),g.linPos0.set(t(),t(),t()).multiplyScalar(1e3),g.linPos1.set(t(),t(),t()).multiplyScalar(1e3),g.up0.copy(c.up0),g.up1.copy(c.up1),g.radius0=o.radius0*a.rayParameters.radius0Factor,g.radius1=Math.min(a.rayParameters.minRadius,o.radius1*a.rayParameters.radius1Factor),g.birthTime=u+m*l,g.deathTime=g.birthTime+l*h,!a.rayParameters.isEternal&&c.recursion==0&&(g.birthTime=Math.max(g.birthTime,c.birthTime),g.deathTime=Math.min(g.deathTime,c.deathTime)),g.timeScale=c.timeScale*2,g.roughness=c.roughness,g.straightness=c.straightness,g.propagationTimeFactor=c.propagationTimeFactor,g.vanishingTimeFactor=c.vanishingTimeFactor,a.onSubrayCreation(o,c,g,a),a.randomGenerator.setSeed(w)}};const e=new C,n=new C,i=new C,s=new C;this.onSubrayCreation=function(o,a,c,l){l.subrayCylinderPosition(o,a,c,.5,.6,.2)},this.subrayConePosition=function(o,a,c,l,h,u){c.pos0.copy(o.pos0),e.subVectors(a.pos1,a.pos0),n.copy(e).normalize(),e.multiplyScalar(o.fraction0+(1-o.fraction0)*(t()*l));const d=e.length();i.crossVectors(a.up0,n);const m=2*Math.PI*t();i.multiplyScalar(Math.cos(m)),s.copy(a.up0).multiplyScalar(Math.sin(m)),c.pos1.copy(i).add(s).multiplyScalar(d*h*(u+t()*(1-u))).add(e).add(a.pos0)},this.subrayCylinderPosition=function(o,a,c,l,h,u){c.pos0.copy(o.pos0),e.subVectors(a.pos1,a.pos0),n.copy(e).normalize(),e.multiplyScalar(o.fraction0+(1-o.fraction0)*((2*t()-1)*l));const d=e.length();i.crossVectors(a.up0,n);const m=2*Math.PI*t();i.multiplyScalar(Math.cos(m)),s.copy(a.up0).multiplyScalar(Math.sin(m)),c.pos1.copy(i).add(s).multiplyScalar(d*h*(u+t()*(1-u))).add(e).add(a.pos0)}}createSubray(){return{seed:0,maxIterations:0,recursion:0,pos0:new C,pos1:new C,linPos0:new C,linPos1:new C,up0:new C,up1:new C,radius0:0,radius1:0,birthTime:0,deathTime:0,timeScale:0,roughness:0,straightness:0,propagationTimeFactor:0,vanishingTimeFactor:0,endPropagationTime:0,beginVanishingTime:0}}createSegment(){return{iteration:0,pos0:new C,pos1:new C,linPos0:new C,linPos1:new C,up0:new C,up1:new C,radius0:0,radius1:0,fraction0:0,fraction1:0,positionVariationFactor:0}}getNewSegment(){return this.raySegments[this.currentSegmentIndex++]}copy(t){return super.copy(t),this.init(Gt.copyParameters({},t.rayParameters)),this}clone(){return new this.constructor(Gt.copyParameters({},this.rayParameters))}}Gt.RAY_INITIALIZED=0;Gt.RAY_UNBORN=1;Gt.RAY_PROPAGATING=2;Gt.RAY_STEADY=3;Gt.RAY_VANISHING=4;Gt.RAY_EXTINGUISHED=5;Gt.COS30DEG=Math.cos(30*Math.PI/180);Gt.SIN30DEG=Math.sin(30*Math.PI/180);const qp=""+new URL("../sound/thunder.mp3",import.meta.url).href,$p=""+new URL("../sound/rain.mp3",import.meta.url).href,jp=new $r,Jo={flashColor:"0x062d89"},Qo=document.querySelector("canvas.webgl"),de=new xp,Yp=new _p("#262837",1,15);de.fog=Yp;const Nt=new Tp,Zp=Nt.load("/textures/door/color.jpg"),Kp=Nt.load("/textures/door/alpha.jpg"),Jp=Nt.load("/textures/door/ambientOcclusion.jpg"),Qp=Nt.load("/textures/door/height.jpg"),tm=Nt.load("/textures/door/normal.jpg"),em=Nt.load("/textures/door/metalness.jpg"),nm=Nt.load("/textures/door/roughness.jpg"),im=Nt.load("/textures/bricks/color.jpg"),sm=Nt.load("/textures/bricks/ambientOcclusion.jpg"),rm=Nt.load("/textures/bricks/normal.jpg"),am=Nt.load("/textures/bricks/roughness.jpg"),Ms=Nt.load("/textures/grass/color.jpg"),bs=Nt.load("/textures/grass/ambientOcclusion.jpg"),Ss=Nt.load("/textures/grass/normal.jpg"),ws=Nt.load("/textures/grass/roughness.jpg");Ms.repeat.set(8,8);bs.repeat.set(8,8);Ss.repeat.set(8,8);ws.repeat.set(8,8);Ms.wrapS=Zt;bs.wrapS=Zt;Ss.wrapS=Zt;ws.wrapS=Zt;Ms.wrapT=Zt;bs.wrapT=Zt;Ss.wrapT=Zt;ws.wrapT=Zt;const om=Nt.load("/textures/bushes/Ground_Forest_002_baseColor.jpg"),lm=Nt.load("/textures/bushes/Ground_Forest_002_ambientOcclusion.jpg"),cm=Nt.load("/textures/bushes/Ground_Forest_002_normal.jpg"),hm=Nt.load("/textures/bushes/Ground_Forest_002_roughness.jpg"),um=Nt.load("/textures/bushes/Ground_Forest_002_height.png"),dm=Nt.load("/textures/graves/Rock_047_BaseColor.jpg"),fm=Nt.load("/textures/graves/Rock_047_AmbientOcclusion.jpg"),pm=Nt.load("/textures/graves/Rock_047_Normal.jpg"),mm=Nt.load("/textures/graves/Rock_047_Roughness.jpg"),gm=Nt.load("/textures/graves/Rock_047_Height.png"),Ts=Nt.load("/textures/roof/Rock_045_BaseColor.jpg"),Es=Nt.load("/textures/roof/Rock_045_AmbientOcclusion.jpg"),As=Nt.load("/textures/roof/Rock_045_Normal.jpg"),Cs=Nt.load("/textures/roof/Rock_045_Roughness.jpg"),_m=Nt.load("/textures/roof/Rock_045_Height.png");Ts.repeat.set(8,8);Es.repeat.set(8,8);As.repeat.set(8,8);Cs.repeat.set(8,8);Ts.wrapS=Zt;Es.wrapS=Zt;As.wrapS=Zt;Cs.wrapS=Zt;Ts.wrapT=Zt;Es.wrapT=Zt;As.wrapT=Zt;Cs.wrapT=Zt;const jr=Nt.load("/textures/sky/sky3.png");jr.wrapS=Zt;jr.wrapT=Zt;jr.repeat.set(32,32);const di=new Qn;de.add(di);const Ni=new jt(new Rn(4,2.5,4),new ui({map:im,aoMap:sm,normalMap:rm,roughnessMap:am}));Ni.geometry.setAttribute("uv2",new $t(Ni.geometry.attributes.uv.array,2));Ni.position.y=1.25;di.add(Ni);const Oi=new jt(new Wr(3.5,1,4),new ui({map:Ts,aoMap:Es,normalMap:As,roughnessMap:Cs,displacementMap:_m,displacementScale:.001}));Oi.geometry.setAttribute("uv2",new $t(Oi.geometry.attributes.uv.array,2));Oi.position.y=2.5+.5;Oi.rotation.y=Math.PI*.25;di.add(Oi);const zi=new jt(new ki(2.2,2.2,100,100),new ui({map:Zp,alphaMap:Kp,transparent:!0,aoMap:Jp,displacementMap:Qp,displacementScale:.1,normalMap:tm,metalnessMap:em,roughnessMap:nm}));zi.geometry.setAttribute("uv2",new $t(zi.geometry.attributes.uv.array,2));zi.position.y=1;zi.position.z=2+.01;di.add(zi);const ai=new Xr(1,16,16),Ls=new ui({map:om,aoMap:lm,normalMap:cm,roughnessMap:hm,displacementMap:um,displacementScale:.01});ai.setAttribute("uv2",new $t(ai.attributes.uv.array,2));const Ps=new jt(ai,Ls);Ps.scale.set(.5,.5,.5);Ps.position.set(.8,.2,2.2);const Ds=new jt(ai,Ls);Ds.scale.set(.25,.25,.25);Ds.position.set(1.4,.1,2.1);const Rs=new jt(ai,Ls);Rs.scale.set(.4,.4,.4);Rs.position.set(-.8,.1,2.2);const Is=new jt(ai,Ls);Is.scale.set(.15,.15,.15);Is.position.set(-1,.05,2.6);di.add(Ps,Ds,Rs,Is);const tl=new Qn;de.add(tl);const Nr=new Rn(.6,.8,.2),xm=new ui({map:dm,aoMap:fm,normalMap:pm,roughnessMap:mm,displacementMap:gm,displacementScale:.01});Nr.setAttribute("uv2",new $t(Nr.attributes.uv.array,2));for(let r=0;r<50;r++){const t=Math.random()*Math.PI*2,e=3+Math.random()*6,n=Math.sin(t)*e,i=Math.cos(t)*e,s=new jt(Nr,xm);s.position.set(n,.3,i),s.rotation.y=(Math.random()-.5)*.4,s.rotation.z=(Math.random()-.5)*.4,s.castShadow=!0,tl.add(s)}const oi=new jt(new ki(20,20),new ui({map:Ms,aoMap:bs,normalMap:Ss,roughnessMap:ws}));oi.geometry.setAttribute("uv2",new $t(oi.geometry.attributes.uv.array,2));oi.rotation.x=-Math.PI*.5;oi.position.y=0;de.add(oi);const vm={sourceoffset:new C(0,-6,-150),destOffset:new C(0,-5,-150),radius0:1,radius1:.1,radius0factor:.5,radius1factor:.2,minRadius:2,maxIterations:10,isEternal:!1,birthTime:.2,deathTime:2,timeScale:.7,propagationTimeFactor:.05,vanishingTimeFactor:.95,subrayPeriod:1,subrayDutyCycle:.6,maxSubrayRecursion:3,ramification:7,recursionProbability:1,roughness:.85,straightness:.65},Gi=new Gt(vm),fi=new Br({color:11599871});fi.fog=!1;fi.blending=Tr;const Fs=new jt(Gi,fi);Fs.position.set(30,0,-30);Fs.scale.set(.1,.15,.1);const Ns=new jt(Gi,fi);Ns.position.set(-10,0,-50);Ns.scale.set(.1,.15,.1);const Os=new jt(Gi,fi);Os.position.set(-20,0,20);Os.scale.set(.1,.15,.1);const zs=new jt(Gi,fi);zs.position.set(50,0,20);zs.scale.set(.1,.15,.1);de.add(Fs,Ns,Os,zs);let ym=1500,gs=new Pe;const el=[];for(let r=0;r<ym;r++){let t=new C((Math.random()-.2)*100,(Math.random()-.5)*100,(Math.random()-.5)*100);el.push(t.x,t.y,t.z),t.velocity=0}gs.setAttribute("position",new $t(el,3));const nl=new $o({transparent:!0,size:.1,sizeAttenuation:!0,map:Nt.load("/textures/sky/rain3.png"),alphaMap:Nt.load("/textures/sky/rain3.png"),depthWrite:!1}),Mm=new vp(gs,nl);de.add(Mm);nl.fog=!1;const bm=new Lp("#94979A",.12);de.add(bm);const Yr=new Cp("#94979A",.12);Yr.position.set(4,5,-2);de.add(Yr);const In=new Vi("#ff7d46",1,7);In.position.set(0,2.2,2.7);di.add(In);const nn=new Vi("#ff00ff",2,3);de.add(nn);const sn=new Vi("#00ffff",2,3);de.add(sn);const rn=new Vi("#ffff00",2,3);de.add(rn);const yn=new Vi(Jo.flashColor,30,500,1.7);jp.add(Jo,"flashColor").min(0).max(150).step(.001);yn.position.set(30,99,-30);de.add(yn);const Ue={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ue.width=window.innerWidth,Ue.height=window.innerHeight,Pn.aspect=Ue.width/Ue.height,Pn.updateProjectionMatrix(),on.setSize(Ue.width,Ue.height),on.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Pn=new we(75,Ue.width/Ue.height,.1,100);Pn.position.set(-1,2,7);de.add(Pn);const Zr=new Rp;Pn.add(Zr);const Ei=new Ko(Zr),Ai=new Ko(Zr),il=new Pp;il.load(qp,function(r){Ei.setBuffer(r),Ei.setLoop(!1),Ei.setVolume(.5),Ei.play(0)});il.load($p,function(r){Ai.setBuffer(r),Ai.setLoop(!0),Ai.setVolume(.5),Ai.play()});de.add(Ei,Ai);const Fn=new Ip(Pn,Qo);Fn.enableZoom=!1;Fn.enablePan=!1;Fn.enableDamping=!0;Fn.dampingFactor=.05;Fn.target.set(0,0,0);Fn.update();const on=new Xo({canvas:Qo});on.setSize(Ue.width,Ue.height);on.setPixelRatio(Math.min(window.devicePixelRatio,2));on.setClearColor("#262837");on.shadowMap.enabled=!0;on.shadowMap.type=Mo;Yr.castShadow=!0;In.castShadow=!0;nn.castShadow=!0;sn.castShadow=!0;rn.castShadow=!0;Ni.castShadow=!0;Ps.castShadow=!0;Ds.castShadow=!0;Rs.castShadow=!0;Is.castShadow=!0;oi.receiveShadow=!0;In.shadow.mapSize.width=256;In.shadow.mapSize.height=256;In.shadow.camera.far=7;nn.shadow.mapSize.width=256;nn.shadow.mapSize.height=256;nn.shadow.camera.far=7;sn.shadow.mapSize.width=256;sn.shadow.mapSize.height=256;sn.shadow.camera.far=7;rn.shadow.mapSize.width=256;rn.shadow.mapSize.height=256;rn.shadow.camera.far=7;const Sm=new Zo;let wm=!0;const sl=()=>{const r=Sm.getElapsedTime(),t=gs.getAttribute("position"),e=t.array;for(let c=0;c<e.length;c+=3){e[c];let l=e[c+1],h=e[c+2],u=e[c+3];l+=u,h-=.002,!(isNaN(l)||isNaN(h)||isNaN(u))&&(l<-99&&(l=99,u=0),e[c+1]=l,e[c+2]=h,e[c+3]=u)}t.needsUpdate=!0,gs.rotateY(.002),Gi.update(r*.1),r>2&&r<12?(Math.random()>.93||yn.power>100||r<5)&&(yn.power<100&&yn.position.set(Math.random()*-30,98+Math.random(),Math.random()*30),yn.power=50+Math.random()*500):yn.power=0,r>12&&de.remove(Fs,Ns,Os,zs);const n=Math.floor((Math.random()+.8)*3);Math.floor(r)%n===0&&wm&&(In.distance=Math.random()*10);const s=r*.5;nn.position.x=Math.cos(s)*4,nn.position.z=Math.sin(s)*4,nn.position.y=Math.sin(r*3);const o=-r*.32;sn.position.x=Math.cos(o)*5,sn.position.z=Math.sin(o)*5,sn.position.y=Math.sin(r*4)+Math.sin(r*2.5);const a=-r*.18;rn.position.x=Math.cos(a)*(7+Math.sin(r*.32)),rn.position.z=Math.sin(a)*(7+Math.sin(r*.5)),rn.position.y=Math.sin(r*5)+Math.sin(r*2),Fn.update(),on.render(de,Pn),window.requestAnimationFrame(sl)};sl();