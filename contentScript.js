function modifyChatgptPageStyles() {
    const sidebar =  document.querySelector(".flex .h-full");
    sidebar.style = `background-color: #f6f6f6;`;
  //wikipedia style
  document.body.style = `
    margin: 0 auto; 
    width: 71%;
    margin-left: 13%;
    background-color: #f6f6f6;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;   
    line-height: 1.42857143;
    color: #333;
    `;
  // const sidebar =document.getElementsByClassName("h-full")[0];
}

window.addEventListener("load", modifyChatgptPageStyles);
