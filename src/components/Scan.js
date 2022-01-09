import React from "react";
import './App.css';
import ReadQr from "./Content/ReadQr";
import ReadQrP from "./Content/ReadQrP";



function Scan(props){
   

return(
    <>
    {(()=>{
        if(props.info.role===1||props.info.role===2||props.info.role===3){
            return(
                <>
                    <div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                    <ReadQr Hash={props.Hash} setDocument={props.setDocument} document={props.document}/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                <ReadQrP Hash={props.Hash} setDocument={props.setDocument} document={props.document}/>
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
export default Scan;