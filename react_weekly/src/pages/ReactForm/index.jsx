import React from 'react';
import { useState, useRef } from "react";

function ReactForm () {
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
    const regexName = /^[a-zA-Z\s]*$/;
    const regexNoHandphone = /^[0-9]*$/;
    const regexEmail = /^\w+@[A-Za-z_]+?\.[a-zA-Z]{2,3}$/;
    const suratKesungguhan = useRef(null);
    const [radioIT, setRadioIT] = useState(false);
    const [radioNonIT, setRadioNonIT] = useState(false);
    
    const handleInput = e =>{
        const name = e.target.name;
        const value = e.target.value;

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
        if (name === "noHandphone") {
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
        if (errorMassage === "") {
            alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
        }
        else {
            alert("Data Pendaftar Tidak Sesuai")
        }
        // event.preventDefault()
    }

    const handleRadioButton = (event) => {
        if (event.target.value === "IT"){
            setRadioIT(!radioIT);
            setRadioNonIT(false);
            setData({
                ...data,
                pendidikan:"IT"
            })
        }
        else if (event.target.value === "NonIT"){
            setRadioNonIT(!radioNonIT);
            setRadioIT(false);
            setData({
                ...data,
                pendidikan:"NonIT"
            })
        }
    }

    const handleSelect = (event) => {
        setData({
            ...data,
            kelas: event.target.value
        })
        
    }

    const resetData = () => {
        setData(baseData);
        setErrorMassage("");
    }

    return (
        <div style={{margin: "10px 100px"}} className="">
                <h1 style={{textAlign: "center"}}>Pendaftaran Peserta Coding Bootcamp</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{width: "100%", textAlign: "start"}}>
                        Nama Lengkap:
                        <br/>
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
                <label style={{width: "100%", textAlign: "start"}}>
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
                
                <label style={{width: "100%", textAlign: "start"}}>
                    No Handphone:
                    <input 
                    minLength="9"
                    maxLength="14"
                    type="text"
                    name="noHandphone" 
                    required
                    onChange={handleInput}
                    value={data.noHandphone}
                    style={{width: "100%", height: 20, borderRadius: 5, marginBottom: 5}}                    
                    />
                {errorMassage.noHandphone && <p style={{width: "100%", color: "red"}}>{errorMassage.noHandphone}</p>}
                </label>
               
                <label style={{width: "100%", textAlign: "start"}}>
                    Latar Belakang Pendidikan:
                    <br/>
                    <input 
                    type="radio" 
                    // name="pendidikan"
                    required 
                    value="IT"
                    checked={radioIT}
                    onChange={handleInput}
                    onClick={handleRadioButton}
                    />IT
                    <input 
                    type="radio"
                    // name="pendidikan"
                    value="NonIT"
                    onChange={handleInput}
                    checked={radioNonIT}
                    onClick={handleRadioButton}
                    />Non IT
                </label><br/>

                <label style={{width: "100%", textAlign: "start"}}>Kelas Coding yang Dipilih:</label>
                <select name="kelas" style={{width: "100%", height: 25, borderRadius: 5, marginBottom: 5}} onChange={handleSelect}  >
                    <option value="">Pilih Salah Satu Program</option>
                    <option value="Backend">Coding Backend with Golang</option>
                    <option value="Frontend">Coding Frontend with ReactJS</option>
                    <option value="Fullstack">Fullstack Developer</option>
                </select>

                <label style={{width: "100%", textAlign: "start"}}>
                    Foto Surat Kesungguhan:
                    <input 
                    type="file" 
                    refs={suratKesungguhan}
                    style={{width: "100%", marginBottom: 10}}
                    />
                </label>

                <label style={{width: "100%", textAlign: "start"}}>
                    Harapan Untuk Coding Bootcamp Ini:
                    <textarea name="harapan" value={data.harapan} onChange={handleInput} style={{width: "100%", height: "100px", borderRadius: 10, padding: 5}}></textarea>
                </label>
                <div style={{textAlign: "start"}}>
                <input type="submit" value="Submit" style={{color: "white",backgroundColor: "#3a811d", borderRadius: 5, width: "20%", border: "none", height: 25, marginRight: 5}}/>
                <input type="reset" onClick={resetData} style={{color: "white",backgroundColor: "#ed3833", borderRadius: 5, width: "20%", border: "none", height: 25}}/>
                </div>
            </form>
        </div>
    )
}

export default ReactForm;