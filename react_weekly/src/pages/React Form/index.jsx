import React from 'react';
import { useState, useRef } from "react";
import './components/Style.css';

function Home () {
    const baseData = {
        nama: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        harapan: "",
    }
    const baseError = {
        nama: "",
        email: "",
        noHandphone: "",
    }
    const [data, setData] = useState(baseData);
    const [errorMassage, setErrorMassage] = useState(baseError);
    const regexName = /^[a-zA-Z\s]{1,100}$/;
    const regexNoHandphone = /^[0-9]*$/;
    const regexEmail = /^\w+@[A-Za-z_]+?\.[a-zA-Z]{2,3}$/;
    const suratKesungguhan = useRef(null);
    const [radioIT, setRadioIT] = useState(false);
    const [radioNonIT, setRadioNonIT] = useState(false);
    
    const handleInput = e =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log("error", errorMassage)

        setData({
            ...data,
            [name]:value
        })

        if (name === "nama") {
            if (!regexName.test(value)) {
                setErrorMassage({ ...errorMassage, nama : "Nama Harus Berupa Huruf" })
            }
            else{
                setErrorMassage("")
            }
        }
        if (name === "email") {
            if (!regexEmail.test(value)) {
                setErrorMassage({ ...errorMassage, email : "Email yang Anda Masukan Salah" })
            }
            else{
                setErrorMassage("")
            }
        }
        if (name === "number") {
            if (!regexNoHandphone.test(value)) {
                setErrorMassage({ ...errorMassage, noHandphone : "No Handphone Harus Berupa Angka" })
            }
            else {
                setErrorMassage("")
            }
        }
        
        console.log("data", data)
    }

    const handleSubmit = (event) => {
        console.log("errorMassage", errorMassage)
        if (errorMassage === "") {
            alert(`Data Pendaftar "${data.nama}" Berhasil diterima`)
            setData('');
            setRadioIT('');
            setRadioNonIT('');
            setErrorMassage('');
        }
        else {
            alert("Data Pendaftar Tidak Sesuai")
        }
        event.preventDefault()
    }

    const handleRadioButton = (event) => {
        console.log("event", event.target.value);
        if (event.target.name === "IT"){
            setRadioIT(!radioIT);
            setRadioNonIT(false);
        }
        else if (event.target.name === "NonIT"){
            setRadioNonIT(!radioNonIT);
            setRadioIT(false);
        }
    }

    const resetData = () => {
        setData(baseData);
        setErrorMassage("");
    }

    return (
        <div style={{margin: "10px 100px"}}>
                <h1 style={{textAlign: "center"}}>Pendaftaran Peserta Coding Bootcamp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >
                        Nama Lengkap:
                        <br></br>
                        <input 
                        type="text" 
                        name="nama"
                        required 
                        onChange={handleInput}
                        value={data.nama}
                        style={{width: "100%", height: 20, borderRadius: 5, marginBottom: 5}}
                        />
                {errorMassage.nama && <p style={{width: "100%", color: "red"}}>{errorMassage.nama}</p>}
                </label>

                </div>
                <label className={"inputText"}>
                    Email:
                    <input 
                    type="email" 
                    name="email" 
                    required
                    onChange={handleInput}
                    value={data.email}
                    style={{width: "100%", height: 20, borderRadius: 5, marginBottom: 5}}
                    />
                {errorMassage.email && <p style={{width: "100%", color: "red"}}>{errorMassage.email}</p>}
                </label>
                
                <label className={"inputText"}>
                    No Handphone:
                    <input 
                    minLength="11"
                    maxLength="13"
                    type="number"
                    name="noHandphone" 
                    required
                    onChange={handleInput}
                    value={data.noHandphone}
                    style={{width: "100%", height: 20, borderRadius: 5, marginBottom: 5}}                    />
                {errorMassage.noHandphone && <p style={{width: "100%"}}>{errorMassage.noHandphone}</p>}
                </label>
               
                <label required value={data.pendidikan}>
                    Latar Belakang Pendidikan:
                    <br></br>
                    <input 
                    type="radio" 
                    name="IT"
                    checked={radioIT}
                    onClick={handleRadioButton}
                    />IT
                    <input 
                    type="radio"
                    name="NonIT"
                    checked={radioNonIT}
                    onClick={handleRadioButton}
                    />Non IT
                    
                </label><br></br>

                <label >Kelas Coding yang Dipilih:</label>
                <select style={{width: "100%", height: 25, borderRadius: 5, marginBottom: 5}} value={data.kelas} >
                    <option>Pilih Salah Satu Program</option>
                    <option>Coding Backend with Golang</option>
                    <option>Coding Frontend with ReactJS</option>
                    <option>Fullstack Developer</option>
                </select><br></br>

                <label>
                    Foto Surat Kesungguhan:
                    <input 
                    type="file" 
                    refs={suratKesungguhan}
                    style={{width: "100%", marginBottom: 10}}
                    />
                </label><br></br>

                <label value={data.harapan}>
                    Harapan Untuk Coding Bootcamp Ini:
                    <br></br>
                    <textarea style={{width: "100%", height: "100px", borderRadius: 10, padding: 5}}></textarea>
                </label><br></br>
                <input type="submit" value="Submit" style={{color: "white",backgroundColor: "#3a811d", borderRadius: 5, width: "20%", border: "none", height: 25, marginRight: 5}}/>
                <button onClick={resetData} style={{color: "white",backgroundColor: "#ed3833", borderRadius: 5, width: "20%", border: "none", height: 25}}>Reset</button>
            </form>
        </div>
    )
}

export default Home;