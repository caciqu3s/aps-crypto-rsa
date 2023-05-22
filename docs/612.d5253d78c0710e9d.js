"use strict";(self.webpackChunkapp_crypto_rsa=self.webpackChunkapp_crypto_rsa||[]).push([[612],{612:(On,ce,h)=>{h.r(ce),h.d(ce,{EncryptModule:()=>En});var j=h(755),o=h(20),C=h(751);let q=(()=>{class n{constructor(){}gcd(e,r){return 0===r?e:this.gcd(r,e%r)}modInverse(e,r){let[i,s]=[e,r],[a,l]=[1,0];for(;0!==s;){const u=Math.floor(i/s);[i,s]=[s,i-u*s],[a,l]=[l,a-u*l]}return a<0?a+r:a}generateRandomPrime(){const e=s=>{for(let a=2,l=Math.sqrt(s);a<=l;a++)if(s%a==0)return!1;return s>1};let i=0;for(;s=2,a=100,s=Math.ceil(s),a=Math.floor(a),i=Math.floor(Math.random()*(a-s+1))+s,!e(i););var s,a;return i}generatePublicKey(e,r){const i=e*r,s=(e-1)*(r-1);let a=2;for(;a<s&&1!==this.gcd(a,s);)a++;return{e:a,n:i}}generatePrivateKey(e,r,i){const{e:s,n:a}=i;return{d:this.modInverse(s,(e-1)*(r-1)),n:a}}generateKeys(){return new C.y(e=>{const r=this.generateRandomPrime(),i=this.generateRandomPrime(),s=this.generatePublicKey(r,i),a=this.generatePrivateKey(r,i,s),l=btoa(JSON.stringify(s)),u=btoa(JSON.stringify(a));e.next({publicKey:l,privateKey:u}),e.complete()})}readKeys(e,r){return new C.y(i=>{const s=localStorage.getItem(e),a=localStorage.getItem(r);i.next({publicKey:s,privateKey:a}),i.complete()})}saveKeys(e,r,i,s){return new C.y(a=>{localStorage.setItem(e,i),localStorage.setItem(r,s),a.next(!0),a.complete()})}encrypt(e,r){const{e:i,n:s}=r;let a="";for(let l=0;l<e.length;l++){const u=e.charCodeAt(l);a+=(BigInt(u)**BigInt(i)%BigInt(s)).toString()+" "}return a.trim()}decrypt(e,r){const{d:i,n:s}=r;let a="";const l=e.split(" ");for(let u=0;u<l.length;u++){const A=BigInt(l[u])**BigInt(i)%BigInt(s);a+=String.fromCharCode(Number(A))}return a}encryptMessage(e,r){return new C.y(i=>{const s=JSON.parse(atob(r)),a=this.encrypt(e,s);i.next(a),i.complete()})}decryptMessage(e,r){return new C.y(i=>{const s=JSON.parse(atob(r)),a=this.decrypt(e,s);i.next(a),i.complete()})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var gt=h(76),mt=h(742),yt=h(421),_t=h(669),vt=h(403),Ct=h(268),Vt=h(810),At=h(4);let de=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),_=(()=>{class n extends de{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const p=new o.OlP("NgValueAccessor"),Dt={provide:p,useExisting:(0,o.Gpc)(()=>w),multi:!0},Et=new o.OlP("CompositionEventMode");let w=(()=>{class n extends de{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Ft(){const n=(0,j.q)()?(0,j.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Et,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Dt]),o.qOj]}),n})();const c=new o.OlP("NgValidators"),m=new o.OlP("NgAsyncValidators");function be(n){return null!=n}function Ae(n){return(0,o.QGY)(n)?(0,gt.D)(n):n}function Me(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function De(n,t){return t.map(e=>e(n))}function Fe(n){return n.map(t=>function Ot(n){return!n.validate}(t)?t:e=>t.validate(e))}function L(n){return null!=n?function Ee(n){if(!n)return null;const t=n.filter(be);return 0==t.length?null:function(e){return Me(De(e,t))}}(Fe(n)):null}function Y(n){return null!=n?function we(n){if(!n)return null;const t=n.filter(be);return 0==t.length?null:function(e){return function bt(...n){const t=(0,_t.jO)(n),{args:e,keys:r}=(0,mt.D)(n),i=new C.y(s=>{const{length:a}=e;if(!a)return void s.complete();const l=new Array(a);let u=a,f=a;for(let A=0;A<a;A++){let ue=!1;(0,yt.Xf)(e[A]).subscribe((0,vt.x)(s,wn=>{ue||(ue=!0,f--),l[A]=wn},()=>u--,void 0,()=>{(!u||!ue)&&(f||s.next(r?(0,Vt.n)(r,l):l),s.complete())}))}});return t?i.pipe((0,Ct.Z)(t)):i}(De(e,t).map(Ae)).pipe((0,At.U)(Me))}}(Fe(n)):null}function Oe(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Se(n){return n._rawValidators}function Ne(n){return n._rawAsyncValidators}function W(n){return n?Array.isArray(n)?n:[n]:[]}function S(n,t){return Array.isArray(n)?n.includes(t):n===t}function xe(n,t){const e=W(t);return W(n).forEach(i=>{S(e,i)||e.push(i)}),e}function Ge(n,t){return W(t).filter(e=>!S(n,e))}class Be{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=L(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=Y(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class d extends Be{get formDirective(){return null}get path(){return null}}class y extends Be{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class ke{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Te=(()=>{class n extends ke{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(y,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),Ie=(()=>{class n extends ke{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(d,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const M="VALID",x="INVALID",V="PENDING",D="DISABLED";function Z(n){return(G(n)?n.validators:n)||null}function J(n,t){return(G(t)?t.asyncValidators:n)||null}function G(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class He{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===x}get pending(){return this.status==V}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(xe(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(xe(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Ge(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Ge(t,this._rawAsyncValidators))}hasValidator(t){return S(this._rawValidators,t)}hasAsyncValidator(t){return S(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=V,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===V)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;const e=Ae(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?x:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(x)?x:M}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){G(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Gt(n){return Array.isArray(n)?L(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Bt(n){return Array.isArray(n)?Y(n):n||null}(this._rawAsyncValidators)}}class B extends He{constructor(t,e,r){super(Z(e),J(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){(function Ue(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(r=>{(function Re(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}const b=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>k}),k="always";function F(n,t,e=k){K(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function It(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&je(n,t)})}(n,t),function Rt(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function Pt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&je(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Tt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function I(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),R(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function P(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function K(n,t){const e=Se(n);null!==t.validator?n.setValidators(Oe(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=Ne(n);null!==t.asyncValidator?n.setAsyncValidators(Oe(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();P(t._rawValidators,i),P(t._rawAsyncValidators,i)}function R(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=Se(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=Ne(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return P(t._rawValidators,r),P(t._rawAsyncValidators,r),e}function je(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ye(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function We(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const U=class extends He{constructor(t=null,e,r){super(Z(e),J(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),G(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=We(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Ye(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Ye(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){We(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let Qe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const ne=new o.OlP("NgModelWithFormControlWarning"),en={provide:d,useExisting:(0,o.Gpc)(()=>H)};let H=(()=>{class n extends d{constructor(e,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return F(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){I(e.control||null,e,!1),function qt(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function Le(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(I(r||null,e),(n=>n instanceof U)(i)&&(F(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function qe(n,t){K(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function Ut(n,t){return R(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){K(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,10),o.Y36(m,10),o.Y36(b,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([en]),o.qOj,o.TTD]}),n})();const rn={provide:y,useExisting:(0,o.Gpc)(()=>ie)};let ie=(()=>{class n extends y{set isDisabled(e){}constructor(e,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function ee(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===w?e=s:function jt(n){return Object.getPrototypeOf(n.constructor)===_}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){this._added||this._setUpControl(),function X(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function T(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(d,13),o.Y36(c,10),o.Y36(m,10),o.Y36(p,10),o.Y36(ne,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([rn]),o.qOj,o.TTD]}),n})(),vn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Qe]}),n})(),Vn=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ne,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:b,useValue:e.callSetDisabledState??k}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[vn]}),n})();const bn=["fileInput"];let An=(()=>{class n{constructor(e){this.crypto=e,this.formGroup=new B({originText:new U(""),resultText:new U("")})}selectFile(){this.fileInput.nativeElement.click()}handleFileSelected(e){const r=e.target.files;if(r.length>0){const i=r[0],s=new FileReader;s.onload=a=>{this.keyFileBase64=a.target.result.split(",")[1],console.log("Base64 data:",this.keyFileBase64)},s.readAsDataURL(i)}}processText(){console.log(),"encrypt"==this.type&&this.keyFileBase64?this.encrypt(this.formGroup.controls.originText.value,this.keyFileBase64):"decrypt"==this.type&&this.keyFileBase64&&this.decrypt(this.formGroup.controls.originText.value,this.keyFileBase64)}encrypt(e,r){this.crypto.encryptMessage(e,r).subscribe(i=>{console.log(i),this.formGroup.controls.resultText.setValue(i)})}decrypt(e,r){this.crypto.decryptMessage(e,r).subscribe(i=>this.formGroup.controls.resultText.setValue(i))}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(q))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-encrypt-forms"]],viewQuery:function(e,r){if(1&e&&o.Gf(bn,5),2&e){let i;o.iGM(i=o.CRH())&&(r.fileInput=i.first)}},inputs:{type:"type"},decls:26,vars:6,consts:[[1,"card",3,"formGroup"],[1,"col-span-full"],["for","origin-text",1,"block","text-sm","font-medium","leading-6","text-gray-900"],[1,"mt-2"],["id","origin-text","name","origin-text","rows","3","formControlName","originText",1,"block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","result-text",1,"block","text-sm","font-medium","leading-6","text-gray-900"],["id","result-text","name","result-text","rows","3","formControlName","resultText",1,"block","w-full","rounded-md","border-0","py-1.5","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","placeholder:text-gray-400","focus:ring-2","focus:ring-inset","focus:ring-indigo-600","sm:text-sm","sm:leading-6"],["for","keys",1,"block","text-sm","font-medium","leading-6","text-gray-900"],[1,"mt-2","flex","items-center","gap-x-3"],[1,"rounded-md","bg-white","px-2.5","py-1.5","text-sm","font-semibold","text-gray-900","shadow-sm","ring-1","ring-inset","ring-gray-300","hover:bg-gray-50",3,"click"],["type","file","hidden","",3,"change"],["fileInput",""],[1,"mt-6","flex","items-center","justify-end","gap-x-6"],["type","submit",1,"rounded-md","bg-indigo-600","px-3","py-2","text-sm","font-semibold","text-white","shadow-sm","hover:bg-indigo-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"disabled","click"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"label",2),o._uU(3),o.qZA(),o.TgZ(4,"div",3),o._UZ(5,"textarea",4),o.qZA()(),o._UZ(6,"br"),o.TgZ(7,"div",1)(8,"label",5),o._uU(9,"Resultado"),o.qZA(),o.TgZ(10,"div",3),o._UZ(11,"textarea",6),o.qZA()(),o._UZ(12,"br"),o.TgZ(13,"div",1)(14,"label",7),o._uU(15,"Chaves"),o.qZA(),o.TgZ(16,"div",8)(17,"span"),o._uU(18),o.qZA(),o.TgZ(19,"button",9),o.NdJ("click",function(){return r.selectFile()}),o._uU(20),o.qZA(),o.TgZ(21,"input",10,11),o.NdJ("change",function(s){return r.handleFileSelected(s)}),o.qZA()()(),o.TgZ(23,"div",12)(24,"button",13),o.NdJ("click",function(){return r.processText()}),o._uU(25),o.qZA()()()),2&e&&(o.Q6J("formGroup",r.formGroup),o.xp6(3),o.Oqu("encrypt"==r.type?"Texto a ser criptografado":"Texto a ser descriptografado"),o.xp6(15),o.Oqu("encrypt"==r.type?"Publica":"Privada"),o.xp6(2),o.Oqu(null!=r.keyFileBase64?"Carregado":"Enviar"),o.xp6(4),o.Q6J("disabled",null==r.keyFileBase64),o.xp6(1),o.Oqu("encrypt"==r.type?"Encriptar":"Descriptar"))},dependencies:[w,Te,Ie,H,ie]}),n})(),Mn=(()=>{class n{constructor(e){this.crypto=e}generateKeys(){this.crypto.generateKeys().subscribe(e=>{this.downloadFileFromBase64(e.publicKey,"public-key.txt"),this.downloadFileFromBase64(e.privateKey,"private-key.txt")})}downloadFileFromBase64(e,r){const i=atob(e),s=new Blob([i],{type:"application/octet-stream"}),a=URL.createObjectURL(s),l=document.createElement("a");l.href=a,l.download=r,l.click()}encrypt(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(q))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-encrypt-page"]],decls:8,vars:2,consts:[[1,"mx-auto","max-w-7xl","px-4","sm:px-6","lg:px-8"],[1,"mt-6","flex","items-center","justify-start","gap-x-6"],[1,"rounded-md","bg-indigo-600","px-3","py-2","text-sm","font-semibold","text-white","shadow-sm","hover:bg-indigo-500","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","focus-visible:outline-indigo-600",3,"click"],[1,"grid","gap-4","md:grid-cols-2","md:grid-rows-1"],[3,"type"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"button",2),o.NdJ("click",function(){return r.generateKeys()}),o._uU(3,"Gerar chaves"),o.qZA()(),o._UZ(4,"br"),o.TgZ(5,"div",3),o._UZ(6,"app-encrypt-forms",4)(7,"app-encrypt-forms",4),o.qZA()()),2&e&&(o.xp6(6),o.Q6J("type","encrypt"),o.xp6(1),o.Q6J("type","decrypt"))},dependencies:[An]}),n})();var ft=h(932);const Dn=[{path:"",component:Mn}];let Fn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ft.Bz.forChild(Dn),ft.Bz]}),n})(),En=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({providers:[q],imports:[j.ez,Fn,Vn]}),n})()}}]);