import React from 'react';
import Pdf from "react-to-pdf";
import { useState } from 'react';
import { Button } from 'react-bootstrap';


const ref = React.createRef();


const PDF = (props) => {
  const [fileUrl] = useState(props.Qr)

  function sunmit(){
    props.setCreate(true)
  }
  
  function sunmit2(){
    props.setCreate(false)
    props.setCreate2(true)
  }

return (
    <>
      <div className="Post" ref={ref}>
      <h3 className="judul">SURAT KETERANGAN RAPID TEST <br/> ANTIGEN SARS Cov-2</h3>
        {/* <img src={props.image} alt={props.title} /> */}
        <hr></hr>
        <table>
          <tr>
            <td className='n1'>Nama Pasien</td>
            <td className='n2'>&nbsp;&nbsp;&nbsp;&nbsp;:</td>
            <td className='n3'>{props.pasien}</td>
          </tr>
          <tr>
            <td className='n1'>No. NIK</td>
            <td className='n2'>&nbsp;&nbsp;&nbsp;&nbsp;:</td>
            <td className='n3'>{props.nik}</td>
          </tr>
          <tr>
            <td className='n1'>Tanggal Lahir</td>
            <td className='n2'>&nbsp;&nbsp;&nbsp;&nbsp;:</td>
            <td className='n3'>{props.ttl}</td>
          </tr>
          <tr>
            <td className='n1'>Jenis Kelamin</td>
            <td className='n2'>&nbsp;&nbsp;&nbsp;&nbsp;:</td>
            <td className='n3'>{props.jk}</td>
          </tr>
          <tr>
            <td className='n1'>Alamat</td>
            <td className='n2'>&nbsp;&nbsp;&nbsp;&nbsp;:</td>
            <td className='n3'>{props.alamat}</td>
          </tr>
          <tr>
            <td className='n1'>Tanggal Pemeriksaan</td>
            <td className='n2'>&nbsp;&nbsp;&nbsp;&nbsp;:</td>
            <td className='n3'>{props.Jperiksa}</td>
          </tr>
          <tr>
            <td className='n1'>Masa Berlaku</td>
            <td className='n2'>&nbsp;&nbsp;&nbsp;&nbsp;:</td>
            <td className='n3'>{props.exp} Hari</td>
          </tr>
        </table>
        <br/>
        <h6 className='thick'>Hasil Pemeriksaan Rapid Test Antigen SARS Cov-2 : </h6>
        <br/>
        <table border='3' cellPadding='8' className='table'>
          <tr>
            <td>Jenis Sample</td>
            <td>{props.sample}</td>
          </tr>
          <tr>
            <td>Metode Pemeriksaan</td>
            <td>{props.Mpemeriksaan}</td>
          </tr>
          <tr>

            <td>Hasil Pemeriksaan</td>
            <td>{props.hasil}</td>
          </tr>
        </table>
        <br/>
        <p>Intrepretasi Hasil:</p>
        <br/>
        <ul className='justify'>
          <li>
            Hasil <b>Positive </b>menunjukkan bahwa pada specimen terdeteksi material genetic 
            <b> SARS CoV-2. </b>Jika terdapat hasil <b>Positive, </b>
            mohon untuk menghubungi Dinas Kesehatan atau <b>Call Center </b>
            Penanggulangan Covid-19 setempat.
          </li>
          <li>
            Hasil <b>Negative </b>menunjukkan bahwa material genetic 
            <b> SARS CoV-2 </b>tidak ditemukan didalam Specimen atau kadar specimen belum dapat terdeteksi oleh alat.
          </li>
        </ul>
        <br/><br/>
        <br/><br/>
        {
        fileUrl && (
        <img src={fileUrl} width="100px" alt="Qr Code"/>
        )
        } 
        <div className='ttd'><center>Bandung, {props.Jperiksa}</center></div><br/>
        <div className='ttd'><center>Hormat Saya,</center></div><br/><br/><br/><br/>
        <div className='ttd'><center><u>{props.pemeriksa}</u></center></div><br/>
        <div className='ttd'><center>Sp.No.2369/IDI.1718/F4/08/2021</center></div>
      </div>
      <Pdf targetRef={ref} filename={props.pasien+"-"+props.Jperiksa+".pdf" }>
        {({ toPdf }) => <button onClick={toPdf}>Download PDF</button>}   
      </Pdf>
      {(()=>{
            if(props.create2!==true){
                return(
                  <Button onClick={sunmit2}>Selesai</Button>   
                )
              }else{
                return(
                  <Button onClick={sunmit}>Selesai</Button>
                )
              }
            })()}
      
    </>
  );
}

export default PDF;