document.querySelector('[data-testid="sidebar:compose"]').addEventListener('click', setEventListener);
console.log("LOADED");

function createFakeBtn(){
    let fakeBtn = document.createElement("button");
    let appendChild = document.querySelector('[data-testid="composer:send-actions"]');
    fakeBtn.innerHTML = "Send";
    fakeBtn.style.paddingLeft = "1.857em";
    fakeBtn.style.paddingRight = "1.857em";
    fakeBtn.style.backgroundColor = "#7c5cff";
    fakeBtn.style.color = "white";
    fakeBtn.style.borderRadius = "7px";
    fakeBtn.className = "fake-btn";
    appendChild.appendChild(fakeBtn);
}

function setEventListener() {
    if (document.querySelector(".composer-send-button") != null) {
        let msg_btn = document.querySelector(".composer-send-button");
        console.log("Element found");
        msg_btn.style.display = "none";
        createFakeBtn();
        document.querySelector(".fake-btn").addEventListener("click", checkAttachments);
        console.log("Listener added!");
    } else setTimeout(() => setEventListener(), 1000);
}

function checkAttachments() {
    let msg_btn = document.querySelector(".composer-send-button");
    let msg_text = document.querySelector('[data-testid="rooster-iframe"]').contentDocument.getElementById("rooster-editor").textContent;
    if (msg_text.includes("V prílohe")) {
        if(document.querySelector(".composer-attachments-list") != null){
            console.log("You can send the message");
            msg_btn.disabled = false;
            msg_btn.click();
        } else {
            msg_btn.disabled = true;
            alert("You mentioned that files are in attachments but you have no attachments, add them in order to send the message.");
        }
    } else {
        msg_btn.disabled = false;
        console.log("You can send the message");
        msg_btn.click();
    }
}