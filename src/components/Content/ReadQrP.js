import React, {useState} from "react";
import QrReader from "react-qr-reader";
import '../App.css';
import { Alert } from "react-bootstrap";
import moment from "moment";

var CryptoJS = require("crypto-js");


function ReadQrP(props){
    
    const [scanResultWebCam, setScanResultWebCam] = useState('') 
    const [ScannedResult, setScannedResult] = useState('Unscanned')
    const [HashResult, setHashResult] = useState('')
    const [SkResult, setSkResult] = useState('')
    const [Result, setResult] = useState(false)
    const [Sub, setSub] = useState(false)
    const [exps, setExps] = useState(0)
    const [Ts, setTs] = useState(0)
    const [isTs, setIsTs] = useState(false)
    const handleErrorWebCam = (error) =>{
        console.log(error)
    }
    const handleErrorScanWebCam = (result) => {
        if (result){
            setScanResultWebCam(result)
            setScannedResult('Scanned')
            setHashResult(scanResultWebCam.substr(0,107))
            setSkResult(scanResultWebCam.substr(108))
            console.log('Hash : ',HashResult,' Secret Key : ',SkResult)
        }
    }
    function handleBack(){
        setSub(false)
        setScanResultWebCam('')
        setScannedResult('Unscanned')
        setIsTs(false)
    }

    

return(
    <div className="container">
        <div className="jumbotron mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm"></div>
                        <div className="center">
                            {
                            !Sub ?(
                                <form onSubmit={(event) => {
                                    event.preventDefault()
                                    if(scanResultWebCam!==''){
                                        setSub(true)
                                        var Hash=scanResultWebCam.substr(0,108)
                                        var Sk=scanResultWebCam.substr(108)
                                        var bytes = CryptoJS.AES.decrypt(Hash, Sk)
                                        var decryptedData = bytes.toString(CryptoJS.enc.Utf8)
                                        props.Hash.map((hash, key) => {
                                            if(hash.hash===decryptedData){
                                                setResult(true)
                                                setExps(parseInt(hash.exp))
                                                setTs(parseInt(hash.time))
                                                
                                            }
                                            return(
                                                console.log()
                                            )
                                        })
                                    }else{
                                        return(
                                            alert("Scan Terlebih Dahulu!")
                                        )
                                    }   
                                }}>
                                        <h1>Scan QR</h1>
                                        <div className="qrcode-container" id="qrcode">
                                                    <QrReader 
                                                        delay={300}
                                                        style={{width: '500px'}}
                                                        onError={handleErrorWebCam}
                                                        onScan={handleErrorScanWebCam}
                                                    />
                                        </div>
                                        <h3>Scanned Status: {ScannedResult}</h3>
                                        <h3><button type="submit" className="btn btn-primary">Search</button></h3>
                                </form>
                            ):(
                                <>
                                <form onSubmit={handleBack} className="center">
                                    {(()=>{
                                        if(scanResultWebCam!==""){
                                            if(!isTs){
                                                var Tnow=moment(Date.now()).unix()
                                                if(Ts===0){
                                                    setTs(-1)
                                                    setIsTs(true)
                                                }
                                                else if(Math.floor(Tnow-Ts<86400)){
                                                    setTs(1)
                                                    setIsTs(true)
                                                }else{
                                                    setTs(Math.floor((Tnow-Ts)/86400))
                                                    setIsTs(true)
                                                }
                                            }
                                            if(!Result||Ts>exps){
                                                return(
                                                    <>
                                                        <Alert variant="danger"><Alert.Heading>QR/SURAT TIDAK VALID <span>&#x292B;</span><br/>
                                                        Masa Berlaku Surat : {exps} Hari<br/>
                                                        Umur Surat : {Ts} Hari
                                                        </Alert.Heading></Alert>
                                                        <div>
                                                        <p><span>&#x2027;</span>Dokumen tidak valid bisa disebabkan oleh dokumen sudah yang sudah <b>Tidak Berlaku</b> atau sudah <b>Melewati Batas Waktu</b> yang telah ditentukan</p>
                                                        </div>
                                                    </>
                                                )                
                                            }else{
                                                return(
                                                    
                                                    <>
                                                        <Alert variant="success"><Alert.Heading>QR/SURAT VALID<span>&#10003;</span><br/>
                                                        Masa Berlaku Surat : {exps} Hari<br/>
                                                        Umur Surat : {Ts} Hari
                                                        </Alert.Heading></Alert>
                                                    </>
                                                )
                                            }
                                        }
                                    })()}
                                    <button type="qrcode-container" className="btn btn-primary">Back</button>
                                </form>
                                </>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}
export default ReadQrP;