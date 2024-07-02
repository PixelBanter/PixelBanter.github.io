console.log('Hello User - By Pixel Banter!');
console.log('write Pixel Banter commands here if don\'t know how so execute help()');

function help(){
  console.log(`
  
  Pixal Banter API - Configs
  API Version : 1.0
  API Dev : GHGLTGGAMER
  Platform Foundry time : 18:00 , 1 jul 2024
  
  `)
}




const PIXEL_BAINTER_STYLES = 11001101110101;
function PixelBanterInit(init){
  if (init === 11001101110101){
    document.head.innerHTML+= `
      <style>
        *{
          background-color: #1C1D22;
          color: #C7C8CD;
        }
        .message{
          font: Roboto;
          font-size: 14px;
          height: 40px;
          width: auto;
          padding: 4px;
          border-radius: 10px;
          animation-name: pop;
          animation-duration: alternate;
          animation-duration: 0.3s;
          animation-iteration-count: 1;
        }
        .message img{
          width: 40px;
          border-radius: 100%;
        }
        .message .name{
          font-size: 15px;
          color: #6DBFBD;
        }
        
        
        @keyframes pop{
          from{
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .PBchat-heading{
          background: #5865F2;
          color: white;
          height: 40px;
          width: 98%;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          border-radius: 5px;
          font-size: 16px;
          padding-left: 15px;
          box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
        }
    `;
  }
  else {
    console.error('Pixel Bainter Cannot Initalise an external resource');
  }
}

var _PixelBanterChatFound = 0;
function PixelBanterChat(chat_name) {
  var build = `
    <div id="PBchat">
      <div class="PBchat-heading">
        ${chat_name}
      </div>
      <div id="PBchat-con-memory">
      
      </div>
    </div>
  `;
  document.body.innerHTML += build;
}

function PixelBanterChatMemory(){
  return {
    update(content){
      document.getElementById("PBchat-con-memory").innerHTML += content;
    },
    
    clear(){
      document.getElementById("PBchat-con-memory").innerHTML = "";
    },
    
    replace(content){
      document.getElementById("PBchat-con-memory").innerHTML = content;
    }
  }
}


var PixelBanterPreviousChatTime = 0;
var PixelBanterCurrentChatTime = PixelBanterPreviousChatTime+1000;

class PixelBanterConversationApp {
  message(){
    return {
      customCharacter(message, avtar, name, time=PixelBanterCurrentChatTime){
        var build = `
          <div class="message">
            <div style="float: left;">
              <img src="${avtar}" alt="${name}">
            </div>
            <div style="float: left;width: auto;margin-left: 10px;">
              <b class="name">
                ${name}
              </b>
              <br>
              <div style="margin-top: 3px;">
                ${message}
              </div>
            </div>
          </div>
          <br>
        `;// build
        
        
        setTimeout(function(){
          if (_PixelBanterChatFound!=0){
            PixelBanterChatMemory().update(build);
            PixelBanterPreviousChatTime = time;
          }
          else {
            document.body.innerHTML += build;
            PixelBanterPreviousChatTime = time;
          }
        }, time);
      }
    }
  }
}


// first version finished on same day at 19:07 error hhandeling started at 19:09 again on same day

// second version ended at 20:02 on same da