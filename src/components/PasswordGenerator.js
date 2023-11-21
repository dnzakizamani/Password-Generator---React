import React, { useState } from "react";
import "../styles/PasswordGenerator.css"; // Import the CSS file for styling
import image1 from "../images/copy.png";
import image2 from "../images/generate.png";
import image3 from "../images/password.svg";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const createPassword = () => {
    // Panjang yang diinginkan dari kata sandi yang dihasilkan
    const length = 12;

    // Tentukan set karakter untuk berbagai jenis karakter
    const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+{}:|<>?,./";

    const allChars = upperCase + lowerCase + number + symbol; // Gabungkan semua set karakter

    let newPassword = "";

    // Sertakan setidaknya satu karakter dari setiap set karakter
    newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    newPassword += number[Math.floor(Math.random() * number.length)];
    newPassword += symbol[Math.floor(Math.random() * symbol.length)];

    // Isi panjang yang tersisa dengan karakter acak dari allChars
    while (length > newPassword.length) {
      newPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Update the state with the generated password
    setPassword(newPassword);
  };

  const copyPassword = () => {
    const passwordBox = document.getElementById("password");

    // Pilih teks dalam kotak masukan
    passwordBox.select();
    // Salin teks yang dipilih ke papan klip
    document.execCommand("copy");
  };

  return (
    <div className="container">
      <div className="content">
        <div className="text-content">
          <h1 style={{ fontWeight: "bold" }}>
            Generate a<br />
            <span>Random Password</span>
          </h1>
          <div className="display">
            <input
              type="text"
              id="password"
              placeholder="Password"
              value={password}
              readOnly
            />
            <img
              className="image"
              src={image1}
              alt="Copy"
              onClick={copyPassword}
            />
          </div>
          <button onClick={createPassword}>
            <img className="image" src={image2} alt="Generate" />
            Buat Kata Sandi
          </button>
        </div>
        <div className="image-content">
          <img className="image" src={image3} alt="Large Image" />
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
