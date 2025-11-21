async function sendMsg(){
  const m = document.getElementById("msg").value;
  const res = await fetch("http://localhost:8080/api/chat", {
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({ message: m })
  });
  const data = await res.json();
  const box = document.getElementById("chat-box");
  box.innerHTML += "<div><b>You:</b> " + m + "</div>";
  box.innerHTML += "<div><b>AI:</b> " + data.reply + "</div>";
}
