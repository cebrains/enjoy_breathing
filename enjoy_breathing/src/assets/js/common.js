// 弹出确认框
function confirm({
    message = "",
    confirmTxt = "确定",
    cancelTxt = "取消",
    success = () => {},
 } = {}) {
   let div = document.createElement("div");
   div.className = "popBox"
   div.innerHTML = `<div class="popContainer">
                       <div class="popContent">${message}</div>
                       <div class="popBtm">
                         <div class="btmCancel">${cancelTxt}</div>
                         <div class="btmConfirm">${confirmTxt}</div>
                       </div>
                     </div>`;
   document.body.appendChild(div);
 
   // 点击取消
   let btmCancel = document.querySelector(".btmCancel");
   btmCancel.onclick = () => {
     div.parentElement.removeChild(div);
   }
 
   // 点击确定
   let btmConfirm = document.querySelector(".btmConfirm");
   btmConfirm.onclick = () => {
     success();
     div.parentElement.removeChild(div);
   }
 }
 
 //成功
 function message({message = "", type = "info", success = () => {}, duration = 2000} = {}) {
   let div = document.createElement("div");
   div.className = "tipsBox"
   div.innerHTML = `<div class="tipsContent">
                       <div class="tipsIcon ${type}"></div>
                       <div class="tipsTxt">${message}</div>
                     </div>`;
   document.body.appendChild(div);
 
   // 1.5秒后消失
   setTimeout(() => {
     div.parentElement.removeChild(div);
     success()
   }, duration)
 }
 
 // loading显示
 function showLoading() {
   let div = document.createElement("div");
   div.className = "tipsBox"
   div.innerHTML = `<div class="tipsContent" style="background: none;">
                       <div class="loading"></div>
                     </div>`;
   document.body.appendChild(div);
 }
 
 // loading消失
 function hideLoading() {
   let div = document.querySelector(".tipsBox");
   div.parentElement.removeChild(div);
 }
 
 export {
   confirm, message, showLoading, hideLoading
 }
 