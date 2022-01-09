import React from "react";
import './App.css';
import { Alert } from "react-bootstrap";
import Post2 from "./Content/Post2";



function CrUp(props){

    

return(
    <>
    { props.info.role===1||props.info.role===3 ? (
    <>
    { !props.create ? (
        <Post2 Handler={props.Handler} setCreate={props.setCreate} create2={props.create2} setCreate2={props.setCreate2} info={props.info}/>
    ) : (
        <div className="container">
            <div className="jumbotron mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="well well-sm">
                            <Alert variant="warning"><Alert.Heading><p className="center">Upload Data Sebelumnya Terlebih Dahulu!</p></Alert.Heading></Alert>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
    </>
    ):(
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
    )}
    </>
)
}
export default CrUp;