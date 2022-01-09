import React from "react";
import './App.css';
import { Alert } from "react-bootstrap";
import IpfsUp from "./Content/IpfsUp";



function Upload(props){
   

return(
    <>
    {(()=>{
        if(props.info.role===1||props.info.role===3){
            return(
                <>
                { 
                !props.create ? (
                    <div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <Alert variant="warning"><Alert.Heading><p className="center">Buat Data Terlebih Dahulu !</p></Alert.Heading></Alert>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <IpfsUp 
                        storeHash={props.storeHash}
                        pemeriksa={props.pemeriksa} 
                        jk={props.jk} 
                        pasien={props.pasien} 
                        nik={props.nik} 
                        ttl={props.ttl} 
                        umur={props.umur} alamat={props.alamat} 
                        sample={props.sample}
                        Jperiksa={props.Jperiksa}
                        Mpemeriksaan={props.Mpemeriksaan}
                        hasil={props.hasil}
                        getInitialState ={props.getInitialState}
                        setCreate={props.setCreate}
                        setCreate2={props.setCreate2}
                        exp={props.exp}
                    />
                )
                }
                </>
            )
        }else{
            return(
            <>
            <div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                    <Alert variant="danger"><Alert.Heading><p className="center">ANDA TIDAK PUNYA WEWENANG DISINI!!!</p></Alert.Heading></Alert>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>    

            )
        }
    })()}
</>
)
}
export default Upload;