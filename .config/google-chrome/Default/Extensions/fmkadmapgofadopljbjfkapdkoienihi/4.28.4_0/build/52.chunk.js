(self["webpackChunkreact_devtools_extensions"]=self["webpackChunkreact_devtools_extensions"]||[]).push([[52],{9617:(e,t)=>{"use strict";t.byteLength=byteLength;t.toByteArray=toByteArray;t.fromByteArray=fromByteArray;var r=[];var n=[];var f=typeof Uint8Array!=="undefined"?Uint8Array:Array;var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var o=0,u=i.length;o<u;++o){r[o]=i[o];n[i.charCodeAt(o)]=o}n["-".charCodeAt(0)]=62;n["_".charCodeAt(0)]=63;function getLens(e){var t=e.length;if(t%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}var r=e.indexOf("=");if(r===-1)r=t;var n=r===t?0:4-r%4;return[r,n]}function byteLength(e){var t=getLens(e);var r=t[0];var n=t[1];return(r+n)*3/4-n}function _byteLength(e,t,r){return(t+r)*3/4-r}function toByteArray(e){var t;var r=getLens(e);var i=r[0];var o=r[1];var u=new f(_byteLength(e,i,o));var s=0;var a=o>0?i-4:i;var h;for(h=0;h<a;h+=4){t=n[e.charCodeAt(h)]<<18|n[e.charCodeAt(h+1)]<<12|n[e.charCodeAt(h+2)]<<6|n[e.charCodeAt(h+3)];u[s++]=t>>16&255;u[s++]=t>>8&255;u[s++]=t&255}if(o===2){t=n[e.charCodeAt(h)]<<2|n[e.charCodeAt(h+1)]>>4;u[s++]=t&255}if(o===1){t=n[e.charCodeAt(h)]<<10|n[e.charCodeAt(h+1)]<<4|n[e.charCodeAt(h+2)]>>2;u[s++]=t>>8&255;u[s++]=t&255}return u}function tripletToBase64(e){return r[e>>18&63]+r[e>>12&63]+r[e>>6&63]+r[e&63]}function encodeChunk(e,t,r){var n;var f=[];for(var i=t;i<r;i+=3){n=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(e[i+2]&255);f.push(tripletToBase64(n))}return f.join("")}function fromByteArray(e){var t;var n=e.length;var f=n%3;var i=[];var o=16383;for(var u=0,s=n-f;u<s;u+=o){i.push(encodeChunk(e,u,u+o>s?s:u+o))}if(f===1){t=e[n-1];i.push(r[t>>2]+r[t<<4&63]+"==")}else if(f===2){t=(e[n-2]<<8)+e[n-1];i.push(r[t>>10]+r[t>>4&63]+r[t<<2&63]+"=")}return i.join("")}},9052:(e,t,r)=>{"use strict";var n;const f=r(9617);const i=r(9218);const o=typeof Symbol==="function"&&typeof Symbol["for"]==="function"?Symbol["for"]("nodejs.util.inspect.custom"):null;t.lW=Buffer;n=SlowBuffer;t.h2=50;const u=2147483647;n=u;Buffer.TYPED_ARRAY_SUPPORT=typedArraySupport();if(!Buffer.TYPED_ARRAY_SUPPORT&&typeof console!=="undefined"&&typeof console.error==="function"){console.error("This browser lacks typed array (Uint8Array) support which is required by "+"`buffer` v5.x. Use `buffer` v4.x if you require old browser support.")}function typedArraySupport(){try{const e=new Uint8Array(1);const t={foo:function(){return 42}};Object.setPrototypeOf(t,Uint8Array.prototype);Object.setPrototypeOf(e,t);return e.foo()===42}catch(e){return false}}Object.defineProperty(Buffer.prototype,"parent",{enumerable:true,get:function(){if(!Buffer.isBuffer(this))return undefined;return this.buffer}});Object.defineProperty(Buffer.prototype,"offset",{enumerable:true,get:function(){if(!Buffer.isBuffer(this))return undefined;return this.byteOffset}});function createBuffer(e){if(e>u){throw new RangeError('The value "'+e+'" is invalid for option "size"')}const t=new Uint8Array(e);Object.setPrototypeOf(t,Buffer.prototype);return t}function Buffer(e,t,r){if(typeof e==="number"){if(typeof t==="string"){throw new TypeError('The "string" argument must be of type string. Received type number')}return allocUnsafe(e)}return from(e,t,r)}Buffer.poolSize=8192;function from(e,t,r){if(typeof e==="string"){return fromString(e,t)}if(ArrayBuffer.isView(e)){return fromArrayView(e)}if(e==null){throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, "+"or Array-like Object. Received type "+typeof e)}if(isInstance(e,ArrayBuffer)||e&&isInstance(e.buffer,ArrayBuffer)){return fromArrayBuffer(e,t,r)}if(typeof SharedArrayBuffer!=="undefined"&&(isInstance(e,SharedArrayBuffer)||e&&isInstance(e.buffer,SharedArrayBuffer))){return fromArrayBuffer(e,t,r)}if(typeof e==="number"){throw new TypeError('The "value" argument must not be of type number. Received type number')}const n=e.valueOf&&e.valueOf();if(n!=null&&n!==e){return Buffer.from(n,t,r)}const f=fromObject(e);if(f)return f;if(typeof Symbol!=="undefined"&&Symbol.toPrimitive!=null&&typeof e[Symbol.toPrimitive]==="function"){return Buffer.from(e[Symbol.toPrimitive]("string"),t,r)}throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, "+"or Array-like Object. Received type "+typeof e)}Buffer.from=function(e,t,r){return from(e,t,r)};Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype);Object.setPrototypeOf(Buffer,Uint8Array);function assertSize(e){if(typeof e!=="number"){throw new TypeError('"size" argument must be of type number')}else if(e<0){throw new RangeError('The value "'+e+'" is invalid for option "size"')}}function alloc(e,t,r){assertSize(e);if(e<=0){return createBuffer(e)}if(t!==undefined){return typeof r==="string"?createBuffer(e).fill(t,r):createBuffer(e).fill(t)}return createBuffer(e)}Buffer.alloc=function(e,t,r){return alloc(e,t,r)};function allocUnsafe(e){assertSize(e);return createBuffer(e<0?0:checked(e)|0)}Buffer.allocUnsafe=function(e){return allocUnsafe(e)};Buffer.allocUnsafeSlow=function(e){return allocUnsafe(e)};function fromString(e,t){if(typeof t!=="string"||t===""){t="utf8"}if(!Buffer.isEncoding(t)){throw new TypeError("Unknown encoding: "+t)}const r=byteLength(e,t)|0;let n=createBuffer(r);const f=n.write(e,t);if(f!==r){n=n.slice(0,f)}return n}function fromArrayLike(e){const t=e.length<0?0:checked(e.length)|0;const r=createBuffer(t);for(let n=0;n<t;n+=1){r[n]=e[n]&255}return r}function fromArrayView(e){if(isInstance(e,Uint8Array)){const t=new Uint8Array(e);return fromArrayBuffer(t.buffer,t.byteOffset,t.byteLength)}return fromArrayLike(e)}function fromArrayBuffer(e,t,r){if(t<0||e.byteLength<t){throw new RangeError('"offset" is outside of buffer bounds')}if(e.byteLength<t+(r||0)){throw new RangeError('"length" is outside of buffer bounds')}let n;if(t===undefined&&r===undefined){n=new Uint8Array(e)}else if(r===undefined){n=new Uint8Array(e,t)}else{n=new Uint8Array(e,t,r)}Object.setPrototypeOf(n,Buffer.prototype);return n}function fromObject(e){if(Buffer.isBuffer(e)){const t=checked(e.length)|0;const r=createBuffer(t);if(r.length===0){return r}e.copy(r,0,0,t);return r}if(e.length!==undefined){if(typeof e.length!=="number"||numberIsNaN(e.length)){return createBuffer(0)}return fromArrayLike(e)}if(e.type==="Buffer"&&Array.isArray(e.data)){return fromArrayLike(e.data)}}function checked(e){if(e>=u){throw new RangeError("Attempt to allocate Buffer larger than maximum "+"size: 0x"+u.toString(16)+" bytes")}return e|0}function SlowBuffer(e){if(+e!=e){e=0}return Buffer.alloc(+e)}Buffer.isBuffer=function isBuffer(e){return e!=null&&e._isBuffer===true&&e!==Buffer.prototype};Buffer.compare=function compare(e,t){if(isInstance(e,Uint8Array))e=Buffer.from(e,e.offset,e.byteLength);if(isInstance(t,Uint8Array))t=Buffer.from(t,t.offset,t.byteLength);if(!Buffer.isBuffer(e)||!Buffer.isBuffer(t)){throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array')}if(e===t)return 0;let r=e.length;let n=t.length;for(let f=0,i=Math.min(r,n);f<i;++f){if(e[f]!==t[f]){r=e[f];n=t[f];break}}if(r<n)return-1;if(n<r)return 1;return 0};Buffer.isEncoding=function isEncoding(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;default:return false}};Buffer.concat=function concat(e,t){if(!Array.isArray(e)){throw new TypeError('"list" argument must be an Array of Buffers')}if(e.length===0){return Buffer.alloc(0)}let r;if(t===undefined){t=0;for(r=0;r<e.length;++r){t+=e[r].length}}const n=Buffer.allocUnsafe(t);let f=0;for(r=0;r<e.length;++r){let t=e[r];if(isInstance(t,Uint8Array)){if(f+t.length>n.length){if(!Buffer.isBuffer(t))t=Buffer.from(t);t.copy(n,f)}else{Uint8Array.prototype.set.call(n,t,f)}}else if(!Buffer.isBuffer(t)){throw new TypeError('"list" argument must be an Array of Buffers')}else{t.copy(n,f)}f+=t.length}return n};function byteLength(e,t){if(Buffer.isBuffer(e)){return e.length}if(ArrayBuffer.isView(e)||isInstance(e,ArrayBuffer)){return e.byteLength}if(typeof e!=="string"){throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. '+"Received type "+typeof e)}const r=e.length;const n=arguments.length>2&&arguments[2]===true;if(!n&&r===0)return 0;let f=false;for(;;){switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return utf8ToBytes(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"hex":return r>>>1;case"base64":return base64ToBytes(e).length;default:if(f){return n?-1:utf8ToBytes(e).length}t=(""+t).toLowerCase();f=true}}}Buffer.byteLength=byteLength;function slowToString(e,t,r){let n=false;if(t===undefined||t<0){t=0}if(t>this.length){return""}if(r===undefined||r>this.length){r=this.length}if(r<=0){return""}r>>>=0;t>>>=0;if(r<=t){return""}if(!e)e="utf8";while(true){switch(e){case"hex":return hexSlice(this,t,r);case"utf8":case"utf-8":return utf8Slice(this,t,r);case"ascii":return asciiSlice(this,t,r);case"latin1":case"binary":return latin1Slice(this,t,r);case"base64":return base64Slice(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return utf16leSlice(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase();n=true}}}Buffer.prototype._isBuffer=true;function swap(e,t,r){const n=e[t];e[t]=e[r];e[r]=n}Buffer.prototype.swap16=function swap16(){const e=this.length;if(e%2!==0){throw new RangeError("Buffer size must be a multiple of 16-bits")}for(let t=0;t<e;t+=2){swap(this,t,t+1)}return this};Buffer.prototype.swap32=function swap32(){const e=this.length;if(e%4!==0){throw new RangeError("Buffer size must be a multiple of 32-bits")}for(let t=0;t<e;t+=4){swap(this,t,t+3);swap(this,t+1,t+2)}return this};Buffer.prototype.swap64=function swap64(){const e=this.length;if(e%8!==0){throw new RangeError("Buffer size must be a multiple of 64-bits")}for(let t=0;t<e;t+=8){swap(this,t,t+7);swap(this,t+1,t+6);swap(this,t+2,t+5);swap(this,t+3,t+4)}return this};Buffer.prototype.toString=function toString(){const e=this.length;if(e===0)return"";if(arguments.length===0)return utf8Slice(this,0,e);return slowToString.apply(this,arguments)};Buffer.prototype.toLocaleString=Buffer.prototype.toString;Buffer.prototype.equals=function equals(e){if(!Buffer.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(this===e)return true;return Buffer.compare(this,e)===0};Buffer.prototype.inspect=function inspect(){let e="";const r=t.h2;e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim();if(this.length>r)e+=" ... ";return"<Buffer "+e+">"};if(o){Buffer.prototype[o]=Buffer.prototype.inspect}Buffer.prototype.compare=function compare(e,t,r,n,f){if(isInstance(e,Uint8Array)){e=Buffer.from(e,e.offset,e.byteLength)}if(!Buffer.isBuffer(e)){throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. '+"Received type "+typeof e)}if(t===undefined){t=0}if(r===undefined){r=e?e.length:0}if(n===undefined){n=0}if(f===undefined){f=this.length}if(t<0||r>e.length||n<0||f>this.length){throw new RangeError("out of range index")}if(n>=f&&t>=r){return 0}if(n>=f){return-1}if(t>=r){return 1}t>>>=0;r>>>=0;n>>>=0;f>>>=0;if(this===e)return 0;let i=f-n;let o=r-t;const u=Math.min(i,o);const s=this.slice(n,f);const a=e.slice(t,r);for(let e=0;e<u;++e){if(s[e]!==a[e]){i=s[e];o=a[e];break}}if(i<o)return-1;if(o<i)return 1;return 0};function bidirectionalIndexOf(e,t,r,n,f){if(e.length===0)return-1;if(typeof r==="string"){n=r;r=0}else if(r>2147483647){r=2147483647}else if(r<-2147483648){r=-2147483648}r=+r;if(numberIsNaN(r)){r=f?0:e.length-1}if(r<0)r=e.length+r;if(r>=e.length){if(f)return-1;else r=e.length-1}else if(r<0){if(f)r=0;else return-1}if(typeof t==="string"){t=Buffer.from(t,n)}if(Buffer.isBuffer(t)){if(t.length===0){return-1}return arrayIndexOf(e,t,r,n,f)}else if(typeof t==="number"){t=t&255;if(typeof Uint8Array.prototype.indexOf==="function"){if(f){return Uint8Array.prototype.indexOf.call(e,t,r)}else{return Uint8Array.prototype.lastIndexOf.call(e,t,r)}}return arrayIndexOf(e,[t],r,n,f)}throw new TypeError("val must be string, number or Buffer")}function arrayIndexOf(e,t,r,n,f){let i=1;let o=e.length;let u=t.length;if(n!==undefined){n=String(n).toLowerCase();if(n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le"){if(e.length<2||t.length<2){return-1}i=2;o/=2;u/=2;r/=2}}function read(e,t){if(i===1){return e[t]}else{return e.readUInt16BE(t*i)}}let s;if(f){let n=-1;for(s=r;s<o;s++){if(read(e,s)===read(t,n===-1?0:s-n)){if(n===-1)n=s;if(s-n+1===u)return n*i}else{if(n!==-1)s-=s-n;n=-1}}}else{if(r+u>o)r=o-u;for(s=r;s>=0;s--){let r=true;for(let n=0;n<u;n++){if(read(e,s+n)!==read(t,n)){r=false;break}}if(r)return s}}return-1}Buffer.prototype.includes=function includes(e,t,r){return this.indexOf(e,t,r)!==-1};Buffer.prototype.indexOf=function indexOf(e,t,r){return bidirectionalIndexOf(this,e,t,r,true)};Buffer.prototype.lastIndexOf=function lastIndexOf(e,t,r){return bidirectionalIndexOf(this,e,t,r,false)};function hexWrite(e,t,r,n){r=Number(r)||0;const f=e.length-r;if(!n){n=f}else{n=Number(n);if(n>f){n=f}}const i=t.length;if(n>i/2){n=i/2}let o;for(o=0;o<n;++o){const n=parseInt(t.substr(o*2,2),16);if(numberIsNaN(n))return o;e[r+o]=n}return o}function utf8Write(e,t,r,n){return blitBuffer(utf8ToBytes(t,e.length-r),e,r,n)}function asciiWrite(e,t,r,n){return blitBuffer(asciiToBytes(t),e,r,n)}function base64Write(e,t,r,n){return blitBuffer(base64ToBytes(t),e,r,n)}function ucs2Write(e,t,r,n){return blitBuffer(utf16leToBytes(t,e.length-r),e,r,n)}Buffer.prototype.write=function write(e,t,r,n){if(t===undefined){n="utf8";r=this.length;t=0}else if(r===undefined&&typeof t==="string"){n=t;r=this.length;t=0}else if(isFinite(t)){t=t>>>0;if(isFinite(r)){r=r>>>0;if(n===undefined)n="utf8"}else{n=r;r=undefined}}else{throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")}const f=this.length-t;if(r===undefined||r>f)r=f;if(e.length>0&&(r<0||t<0)||t>this.length){throw new RangeError("Attempt to write outside buffer bounds")}if(!n)n="utf8";let i=false;for(;;){switch(n){case"hex":return hexWrite(this,e,t,r);case"utf8":case"utf-8":return utf8Write(this,e,t,r);case"ascii":case"latin1":case"binary":return asciiWrite(this,e,t,r);case"base64":return base64Write(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ucs2Write(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase();i=true}}};Buffer.prototype.toJSON=function toJSON(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function base64Slice(e,t,r){if(t===0&&r===e.length){return f.fromByteArray(e)}else{return f.fromByteArray(e.slice(t,r))}}function utf8Slice(e,t,r){r=Math.min(e.length,r);const n=[];let f=t;while(f<r){const t=e[f];let i=null;let o=t>239?4:t>223?3:t>191?2:1;if(f+o<=r){let r,n,u,s;switch(o){case 1:if(t<128){i=t}break;case 2:r=e[f+1];if((r&192)===128){s=(t&31)<<6|r&63;if(s>127){i=s}}break;case 3:r=e[f+1];n=e[f+2];if((r&192)===128&&(n&192)===128){s=(t&15)<<12|(r&63)<<6|n&63;if(s>2047&&(s<55296||s>57343)){i=s}}break;case 4:r=e[f+1];n=e[f+2];u=e[f+3];if((r&192)===128&&(n&192)===128&&(u&192)===128){s=(t&15)<<18|(r&63)<<12|(n&63)<<6|u&63;if(s>65535&&s<1114112){i=s}}}}if(i===null){i=65533;o=1}else if(i>65535){i-=65536;n.push(i>>>10&1023|55296);i=56320|i&1023}n.push(i);f+=o}return decodeCodePointsArray(n)}const s=4096;function decodeCodePointsArray(e){const t=e.length;if(t<=s){return String.fromCharCode.apply(String,e)}let r="";let n=0;while(n<t){r+=String.fromCharCode.apply(String,e.slice(n,n+=s))}return r}function asciiSlice(e,t,r){let n="";r=Math.min(e.length,r);for(let f=t;f<r;++f){n+=String.fromCharCode(e[f]&127)}return n}function latin1Slice(e,t,r){let n="";r=Math.min(e.length,r);for(let f=t;f<r;++f){n+=String.fromCharCode(e[f])}return n}function hexSlice(e,t,r){const n=e.length;if(!t||t<0)t=0;if(!r||r<0||r>n)r=n;let f="";for(let n=t;n<r;++n){f+=c[e[n]]}return f}function utf16leSlice(e,t,r){const n=e.slice(t,r);let f="";for(let e=0;e<n.length-1;e+=2){f+=String.fromCharCode(n[e]+n[e+1]*256)}return f}Buffer.prototype.slice=function slice(e,t){const r=this.length;e=~~e;t=t===undefined?r:~~t;if(e<0){e+=r;if(e<0)e=0}else if(e>r){e=r}if(t<0){t+=r;if(t<0)t=0}else if(t>r){t=r}if(t<e)t=e;const n=this.subarray(e,t);Object.setPrototypeOf(n,Buffer.prototype);return n};function checkOffset(e,t,r){if(e%1!==0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}Buffer.prototype.readUintLE=Buffer.prototype.readUIntLE=function readUIntLE(e,t,r){e=e>>>0;t=t>>>0;if(!r)checkOffset(e,t,this.length);let n=this[e];let f=1;let i=0;while(++i<t&&(f*=256)){n+=this[e+i]*f}return n};Buffer.prototype.readUintBE=Buffer.prototype.readUIntBE=function readUIntBE(e,t,r){e=e>>>0;t=t>>>0;if(!r){checkOffset(e,t,this.length)}let n=this[e+--t];let f=1;while(t>0&&(f*=256)){n+=this[e+--t]*f}return n};Buffer.prototype.readUint8=Buffer.prototype.readUInt8=function readUInt8(e,t){e=e>>>0;if(!t)checkOffset(e,1,this.length);return this[e]};Buffer.prototype.readUint16LE=Buffer.prototype.readUInt16LE=function readUInt16LE(e,t){e=e>>>0;if(!t)checkOffset(e,2,this.length);return this[e]|this[e+1]<<8};Buffer.prototype.readUint16BE=Buffer.prototype.readUInt16BE=function readUInt16BE(e,t){e=e>>>0;if(!t)checkOffset(e,2,this.length);return this[e]<<8|this[e+1]};Buffer.prototype.readUint32LE=Buffer.prototype.readUInt32LE=function readUInt32LE(e,t){e=e>>>0;if(!t)checkOffset(e,4,this.length);return(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};Buffer.prototype.readUint32BE=Buffer.prototype.readUInt32BE=function readUInt32BE(e,t){e=e>>>0;if(!t)checkOffset(e,4,this.length);return this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};Buffer.prototype.readBigUInt64LE=defineBigIntMethod((function readBigUInt64LE(e){e=e>>>0;validateNumber(e,"offset");const t=this[e];const r=this[e+7];if(t===undefined||r===undefined){boundsError(e,this.length-8)}const n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24;const f=this[++e]+this[++e]*2**8+this[++e]*2**16+r*2**24;return BigInt(n)+(BigInt(f)<<BigInt(32))}));Buffer.prototype.readBigUInt64BE=defineBigIntMethod((function readBigUInt64BE(e){e=e>>>0;validateNumber(e,"offset");const t=this[e];const r=this[e+7];if(t===undefined||r===undefined){boundsError(e,this.length-8)}const n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e];const f=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r;return(BigInt(n)<<BigInt(32))+BigInt(f)}));Buffer.prototype.readIntLE=function readIntLE(e,t,r){e=e>>>0;t=t>>>0;if(!r)checkOffset(e,t,this.length);let n=this[e];let f=1;let i=0;while(++i<t&&(f*=256)){n+=this[e+i]*f}f*=128;if(n>=f)n-=Math.pow(2,8*t);return n};Buffer.prototype.readIntBE=function readIntBE(e,t,r){e=e>>>0;t=t>>>0;if(!r)checkOffset(e,t,this.length);let n=t;let f=1;let i=this[e+--n];while(n>0&&(f*=256)){i+=this[e+--n]*f}f*=128;if(i>=f)i-=Math.pow(2,8*t);return i};Buffer.prototype.readInt8=function readInt8(e,t){e=e>>>0;if(!t)checkOffset(e,1,this.length);if(!(this[e]&128))return this[e];return(255-this[e]+1)*-1};Buffer.prototype.readInt16LE=function readInt16LE(e,t){e=e>>>0;if(!t)checkOffset(e,2,this.length);const r=this[e]|this[e+1]<<8;return r&32768?r|4294901760:r};Buffer.prototype.readInt16BE=function readInt16BE(e,t){e=e>>>0;if(!t)checkOffset(e,2,this.length);const r=this[e+1]|this[e]<<8;return r&32768?r|4294901760:r};Buffer.prototype.readInt32LE=function readInt32LE(e,t){e=e>>>0;if(!t)checkOffset(e,4,this.length);return this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};Buffer.prototype.readInt32BE=function readInt32BE(e,t){e=e>>>0;if(!t)checkOffset(e,4,this.length);return this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};Buffer.prototype.readBigInt64LE=defineBigIntMethod((function readBigInt64LE(e){e=e>>>0;validateNumber(e,"offset");const t=this[e];const r=this[e+7];if(t===undefined||r===undefined){boundsError(e,this.length-8)}const n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)}));Buffer.prototype.readBigInt64BE=defineBigIntMethod((function readBigInt64BE(e){e=e>>>0;validateNumber(e,"offset");const t=this[e];const r=this[e+7];if(t===undefined||r===undefined){boundsError(e,this.length-8)}const n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+r)}));Buffer.prototype.readFloatLE=function readFloatLE(e,t){e=e>>>0;if(!t)checkOffset(e,4,this.length);return i.read(this,e,true,23,4)};Buffer.prototype.readFloatBE=function readFloatBE(e,t){e=e>>>0;if(!t)checkOffset(e,4,this.length);return i.read(this,e,false,23,4)};Buffer.prototype.readDoubleLE=function readDoubleLE(e,t){e=e>>>0;if(!t)checkOffset(e,8,this.length);return i.read(this,e,true,52,8)};Buffer.prototype.readDoubleBE=function readDoubleBE(e,t){e=e>>>0;if(!t)checkOffset(e,8,this.length);return i.read(this,e,false,52,8)};function checkInt(e,t,r,n,f,i){if(!Buffer.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>f||t<i)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}Buffer.prototype.writeUintLE=Buffer.prototype.writeUIntLE=function writeUIntLE(e,t,r,n){e=+e;t=t>>>0;r=r>>>0;if(!n){const n=Math.pow(2,8*r)-1;checkInt(this,e,t,r,n,0)}let f=1;let i=0;this[t]=e&255;while(++i<r&&(f*=256)){this[t+i]=e/f&255}return t+r};Buffer.prototype.writeUintBE=Buffer.prototype.writeUIntBE=function writeUIntBE(e,t,r,n){e=+e;t=t>>>0;r=r>>>0;if(!n){const n=Math.pow(2,8*r)-1;checkInt(this,e,t,r,n,0)}let f=r-1;let i=1;this[t+f]=e&255;while(--f>=0&&(i*=256)){this[t+f]=e/i&255}return t+r};Buffer.prototype.writeUint8=Buffer.prototype.writeUInt8=function writeUInt8(e,t,r){e=+e;t=t>>>0;if(!r)checkInt(this,e,t,1,255,0);this[t]=e&255;return t+1};Buffer.prototype.writeUint16LE=Buffer.prototype.writeUInt16LE=function writeUInt16LE(e,t,r){e=+e;t=t>>>0;if(!r)checkInt(this,e,t,2,65535,0);this[t]=e&255;this[t+1]=e>>>8;return t+2};Buffer.prototype.writeUint16BE=Buffer.prototype.writeUInt16BE=function writeUInt16BE(e,t,r){e=+e;t=t>>>0;if(!r)checkInt(this,e,t,2,65535,0);this[t]=e>>>8;this[t+1]=e&255;return t+2};Buffer.prototype.writeUint32LE=Buffer.prototype.writeUInt32LE=function writeUInt32LE(e,t,r){e=+e;t=t>>>0;if(!r)checkInt(this,e,t,4,4294967295,0);this[t+3]=e>>>24;this[t+2]=e>>>16;this[t+1]=e>>>8;this[t]=e&255;return t+4};Buffer.prototype.writeUint32BE=Buffer.prototype.writeUInt32BE=function writeUInt32BE(e,t,r){e=+e;t=t>>>0;if(!r)checkInt(this,e,t,4,4294967295,0);this[t]=e>>>24;this[t+1]=e>>>16;this[t+2]=e>>>8;this[t+3]=e&255;return t+4};function wrtBigUInt64LE(e,t,r,n,f){checkIntBI(t,n,f,e,r,7);let i=Number(t&BigInt(4294967295));e[r++]=i;i=i>>8;e[r++]=i;i=i>>8;e[r++]=i;i=i>>8;e[r++]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));e[r++]=o;o=o>>8;e[r++]=o;o=o>>8;e[r++]=o;o=o>>8;e[r++]=o;return r}function wrtBigUInt64BE(e,t,r,n,f){checkIntBI(t,n,f,e,r,7);let i=Number(t&BigInt(4294967295));e[r+7]=i;i=i>>8;e[r+6]=i;i=i>>8;e[r+5]=i;i=i>>8;e[r+4]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));e[r+3]=o;o=o>>8;e[r+2]=o;o=o>>8;e[r+1]=o;o=o>>8;e[r]=o;return r+8}Buffer.prototype.writeBigUInt64LE=defineBigIntMethod((function writeBigUInt64LE(e,t=0){return wrtBigUInt64LE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}));Buffer.prototype.writeBigUInt64BE=defineBigIntMethod((function writeBigUInt64BE(e,t=0){return wrtBigUInt64BE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}));Buffer.prototype.writeIntLE=function writeIntLE(e,t,r,n){e=+e;t=t>>>0;if(!n){const n=Math.pow(2,8*r-1);checkInt(this,e,t,r,n-1,-n)}let f=0;let i=1;let o=0;this[t]=e&255;while(++f<r&&(i*=256)){if(e<0&&o===0&&this[t+f-1]!==0){o=1}this[t+f]=(e/i>>0)-o&255}return t+r};Buffer.prototype.writeIntBE=function writeIntBE(e,t,r,n){e=+e;t=t>>>0;if(!n){const n=Math.pow(2,8*r-1);checkInt(this,e,t,r,n-1,-n)}let f=r-1;let i=1;let o=0;this[t+f]=e&255;while(--f>=0&&(i*=256)){if(e<0&&o===0&&this[t+f+1]!==0){o=1}this[t+f]=(e/i>>0)-o&255}return t+r};Buffer.prototype.writeInt8=function writeInt8(e,t,r){e=+e;t=t>>>0;if(!r)checkInt(this,e,t,1,127,-128);if(e<0)e=255+e+1;this[t]=e&255;return t+1};Buffer.prototype.writeInt16LE=function writeInt16LE(e,t,r){e=+e;t=t>>>0;if(!r)checkInt(this,e,t,2,32767,-32768);this[t]=e&255;this[t+1]=e>>>8;return t+2};Buffer.prototype.writeInt16BE=function writeInt16BE(e,t,r){e=+e;t=t>>>0;if(!r)checkInt(this,e,t,2,32767,-32768);this[t]=e>>>8;this[t+1]=e&255;return t+2};Buffer.prototype.writeInt32LE=function writeInt32LE(e,t,r){e=+e;t=t>>>0;if(!r)checkInt(this,e,t,4,2147483647,-2147483648);this[t]=e&255;this[t+1]=e>>>8;this[t+2]=e>>>16;this[t+3]=e>>>24;return t+4};Buffer.prototype.writeInt32BE=function writeInt32BE(e,t,r){e=+e;t=t>>>0;if(!r)checkInt(this,e,t,4,2147483647,-2147483648);if(e<0)e=4294967295+e+1;this[t]=e>>>24;this[t+1]=e>>>16;this[t+2]=e>>>8;this[t+3]=e&255;return t+4};Buffer.prototype.writeBigInt64LE=defineBigIntMethod((function writeBigInt64LE(e,t=0){return wrtBigUInt64LE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}));Buffer.prototype.writeBigInt64BE=defineBigIntMethod((function writeBigInt64BE(e,t=0){return wrtBigUInt64BE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}));function checkIEEE754(e,t,r,n,f,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function writeFloat(e,t,r,n,f){t=+t;r=r>>>0;if(!f){checkIEEE754(e,t,r,4,34028234663852886e22,-34028234663852886e22)}i.write(e,t,r,n,23,4);return r+4}Buffer.prototype.writeFloatLE=function writeFloatLE(e,t,r){return writeFloat(this,e,t,true,r)};Buffer.prototype.writeFloatBE=function writeFloatBE(e,t,r){return writeFloat(this,e,t,false,r)};function writeDouble(e,t,r,n,f){t=+t;r=r>>>0;if(!f){checkIEEE754(e,t,r,8,17976931348623157e292,-17976931348623157e292)}i.write(e,t,r,n,52,8);return r+8}Buffer.prototype.writeDoubleLE=function writeDoubleLE(e,t,r){return writeDouble(this,e,t,true,r)};Buffer.prototype.writeDoubleBE=function writeDoubleBE(e,t,r){return writeDouble(this,e,t,false,r)};Buffer.prototype.copy=function copy(e,t,r,n){if(!Buffer.isBuffer(e))throw new TypeError("argument should be a Buffer");if(!r)r=0;if(!n&&n!==0)n=this.length;if(t>=e.length)t=e.length;if(!t)t=0;if(n>0&&n<r)n=r;if(n===r)return 0;if(e.length===0||this.length===0)return 0;if(t<0){throw new RangeError("targetStart out of bounds")}if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");if(n>this.length)n=this.length;if(e.length-t<n-r){n=e.length-t+r}const f=n-r;if(this===e&&typeof Uint8Array.prototype.copyWithin==="function"){this.copyWithin(t,r,n)}else{Uint8Array.prototype.set.call(e,this.subarray(r,n),t)}return f};Buffer.prototype.fill=function fill(e,t,r,n){if(typeof e==="string"){if(typeof t==="string"){n=t;t=0;r=this.length}else if(typeof r==="string"){n=r;r=this.length}if(n!==undefined&&typeof n!=="string"){throw new TypeError("encoding must be a string")}if(typeof n==="string"&&!Buffer.isEncoding(n)){throw new TypeError("Unknown encoding: "+n)}if(e.length===1){const t=e.charCodeAt(0);if(n==="utf8"&&t<128||n==="latin1"){e=t}}}else if(typeof e==="number"){e=e&255}else if(typeof e==="boolean"){e=Number(e)}if(t<0||this.length<t||this.length<r){throw new RangeError("Out of range index")}if(r<=t){return this}t=t>>>0;r=r===undefined?this.length:r>>>0;if(!e)e=0;let f;if(typeof e==="number"){for(f=t;f<r;++f){this[f]=e}}else{const i=Buffer.isBuffer(e)?e:Buffer.from(e,n);const o=i.length;if(o===0){throw new TypeError('The value "'+e+'" is invalid for argument "value"')}for(f=0;f<r-t;++f){this[f+t]=i[f%o]}}return this};const a={};function E(e,t,r){a[e]=class n extends r{constructor(){super();Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:true,configurable:true});this.name=`${this.name} [${e}]`;this.stack;delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:true,enumerable:true,value:e,writable:true})}toString(){return`${this.name} [${e}]: ${this.message}`}}}E("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){if(e){return`${e} is outside of buffer bounds`}return"Attempt to access memory outside buffer bounds"}),RangeError);E("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError);E("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`;let f=r;if(Number.isInteger(r)&&Math.abs(r)>2**32){f=addNumericalSeparator(String(r))}else if(typeof r==="bigint"){f=String(r);if(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32))){f=addNumericalSeparator(f)}f+="n"}n+=` It must be ${t}. Received ${f}`;return n}),RangeError);function addNumericalSeparator(e){let t="";let r=e.length;const n=e[0]==="-"?1:0;for(;r>=n+4;r-=3){t=`_${e.slice(r-3,r)}${t}`}return`${e.slice(0,r)}${t}`}function checkBounds(e,t,r){validateNumber(t,"offset");if(e[t]===undefined||e[t+r]===undefined){boundsError(t,e.length-(r+1))}}function checkIntBI(e,t,r,n,f,i){if(e>r||e<t){const n=typeof t==="bigint"?"n":"";let f;if(i>3){if(t===0||t===BigInt(0)){f=`>= 0${n} and < 2${n} ** ${(i+1)*8}${n}`}else{f=`>= -(2${n} ** ${(i+1)*8-1}${n}) and < 2 ** `+`${(i+1)*8-1}${n}`}}else{f=`>= ${t}${n} and <= ${r}${n}`}throw new a.ERR_OUT_OF_RANGE("value",f,e)}checkBounds(n,f,i)}function validateNumber(e,t){if(typeof e!=="number"){throw new a.ERR_INVALID_ARG_TYPE(t,"number",e)}}function boundsError(e,t,r){if(Math.floor(e)!==e){validateNumber(e,r);throw new a.ERR_OUT_OF_RANGE(r||"offset","an integer",e)}if(t<0){throw new a.ERR_BUFFER_OUT_OF_BOUNDS}throw new a.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}const h=/[^+/0-9A-Za-z-_]/g;function base64clean(e){e=e.split("=")[0];e=e.trim().replace(h,"");if(e.length<2)return"";while(e.length%4!==0){e=e+"="}return e}function utf8ToBytes(e,t){t=t||Infinity;let r;const n=e.length;let f=null;const i=[];for(let o=0;o<n;++o){r=e.charCodeAt(o);if(r>55295&&r<57344){if(!f){if(r>56319){if((t-=3)>-1)i.push(239,191,189);continue}else if(o+1===n){if((t-=3)>-1)i.push(239,191,189);continue}f=r;continue}if(r<56320){if((t-=3)>-1)i.push(239,191,189);f=r;continue}r=(f-55296<<10|r-56320)+65536}else if(f){if((t-=3)>-1)i.push(239,191,189)}f=null;if(r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,r&63|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,r&63|128)}else if(r<1114112){if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,r&63|128)}else{throw new Error("Invalid code point")}}return i}function asciiToBytes(e){const t=[];for(let r=0;r<e.length;++r){t.push(e.charCodeAt(r)&255)}return t}function utf16leToBytes(e,t){let r,n,f;const i=[];for(let o=0;o<e.length;++o){if((t-=2)<0)break;r=e.charCodeAt(o);n=r>>8;f=r%256;i.push(f);i.push(n)}return i}function base64ToBytes(e){return f.toByteArray(base64clean(e))}function blitBuffer(e,t,r,n){let f;for(f=0;f<n;++f){if(f+r>=t.length||f>=e.length)break;t[f+r]=e[f]}return f}function isInstance(e,t){return e instanceof t||e!=null&&e.constructor!=null&&e.constructor.name!=null&&e.constructor.name===t.name}function numberIsNaN(e){return e!==e}const c=function(){const e="0123456789abcdef";const t=new Array(256);for(let r=0;r<16;++r){const n=r*16;for(let f=0;f<16;++f){t[n+f]=e[r]+e[f]}}return t}();function defineBigIntMethod(e){return typeof BigInt==="undefined"?BufferBigIntNotDefined:e}function BufferBigIntNotDefined(){throw new Error("BigInt not supported")}},9218:(e,t)=>{t.read=function(e,t,r,n,f){var i,o;var u=f*8-n-1;var s=(1<<u)-1;var a=s>>1;var h=-7;var c=r?f-1:0;var l=r?-1:1;var p=e[t+c];c+=l;i=p&(1<<-h)-1;p>>=-h;h+=u;for(;h>0;i=i*256+e[t+c],c+=l,h-=8){}o=i&(1<<-h)-1;i>>=-h;h+=n;for(;h>0;o=o*256+e[t+c],c+=l,h-=8){}if(i===0){i=1-a}else if(i===s){return o?NaN:(p?-1:1)*Infinity}else{o=o+Math.pow(2,n);i=i-a}return(p?-1:1)*o*Math.pow(2,i-n)};t.write=function(e,t,r,n,f,i){var o,u,s;var a=i*8-f-1;var h=(1<<a)-1;var c=h>>1;var l=f===23?Math.pow(2,-24)-Math.pow(2,-77):0;var p=n?0:i-1;var B=n?1:-1;var y=t<0||t===0&&1/t<0?1:0;t=Math.abs(t);if(isNaN(t)||t===Infinity){u=isNaN(t)?1:0;o=h}else{o=Math.floor(Math.log(t)/Math.LN2);if(t*(s=Math.pow(2,-o))<1){o--;s*=2}if(o+c>=1){t+=l/s}else{t+=l*Math.pow(2,1-c)}if(t*s>=2){o++;s/=2}if(o+c>=h){u=0;o=h}else if(o+c>=1){u=(t*s-1)*Math.pow(2,f);o=o+c}else{u=t*Math.pow(2,c-1)*Math.pow(2,f);o=0}}for(;f>=8;e[r+p]=u&255,p+=B,u/=256,f-=8){}o=o<<f|u;a+=f;for(;a>0;e[r+p]=o&255,p+=B,o/=256,a-=8){}e[r+p-B]|=y*128}}}]);