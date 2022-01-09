import React from "react";
import '../App.css';



function Main(props){
   

return(
    <>
    <div class="container">
        <div class="jumbotron mt-3">
            <div class="row">
                <div class="col-md-12">
                    <div class="well well-sm">
                        <h1 className="center">SELAMAT DATANG {props.uname}, DI SISTEM VALIDASI SURAT</h1>
                        <br/>
                        <div className="center"><img src="./logo2.png" alt="logo" className='logo' width="300" height="300" /></div>
                        <br/>
                        <h1 className="center" >KETERANGAN COVID-19 BERBASIS BLOCKCHAIN</h1>
                        <div className="center"><a href="https://drive.google.com/uc?export=download&id=1SLOnlx_ckNM1O1WuwKTvLfa6vCuhocXp" target="_blank" rel="noopener noreferrer">
                          <button>Dokumen Regulasi Perjalanan Dalam Negeri Selama Masa Pandemi</button>
                        </a></div>
                        <br/>
                        <div className="center"><a href="https://drive.google.com/uc?export=download&id=1OHaHna8Ib_XTwDXJ4ez0b-vV2WIxuuaS" target="_blank" rel="noopener noreferrer">
                          <button>Dokumen Regulasi Perjalanan Luar Negeri Selama Masa Pandemi</button>
                        </a></div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}
export default Main;