---
layout: home
title: "STIX"
titleTemplate: false
---

<main class="container-home">
<div class="container">
  <h1>STIX'e Hoş Geldiniz</h1>
  <p class="paragraph">Kişiselleştirilmiş öğrenme deneyiminize erişmek için aşağıdan oturum açın.</p>
  <form action="#">
   <input type="email" placeholder="Öğrenci e-postanızı girin" required>
    <br>
    <input type="password"  placeholder="Öğrenci şifrenizi girin" required>
    <br>
    <input type="submit" value="Oturum aç">
    </form>
    <p class="forgot-password">Şifrenizi mi unuttunuz?</p>
    </div>
</main>

<style scoped>


.paragraph{
  font-size:1rem;
  font-family: "inter"
}

.container {
    width: 500px;
    text-align: center;
    margin: 12rem auto;
    background-color: #fff;
    padding: 4rem;
    border-radius: 1rem;
    border: lightgray 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem
}

h1 {
    color: black;
}

input[type="email"],
input[type="password"],
input[type="submit"] {
    width: 300px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

input[type="submit"] {
    background-color: #09B3AD;
    color: #fff;
    cursor: pointer;
    transition: 0.25s ease-out;

}

input[type="submit"]:hover {
    background-color: #0097a7;
}

.forgot-password {
    font-size: 14px;
    text-decoration: underline;
    color: #09B3AD;
    cursor: pointer;
    transition: 0.25s ease-out;
    font-family:"inter"

}

.forgot-password:hover{
    font-size: 14px;
    text-decoration: underline;
    color: #0097a7;
    cursor: pointer;
}







.container-home *{
line-height: calc(1em + 0.5rem);
    font-family:"inter"

}

.container-home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  </style>
