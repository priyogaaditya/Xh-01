import '../App.css'
import { useState } from 'react'
import { create } from 'ipfs-http-client'
import QRCode from 'qrcode'
import React from 'react'
import PDF  from './PDF'
const client = create('https://ipfs.infura.io:5001/api/v0')
var CryptoJS = require("crypto-js")

function IpfsUp(props) {
  const [a,updateA]=useState(0)
  if(a!==1){
  updateA(1)
  props.getInitialState()
  }
  const [fileUrl, updateFileUrl] = useState(``)
  const exps = parseInt(props.exp)
  const [Cid, updateCid] = useState(``)
  const [postSubmitted, updatepostSubmitted] = useState(false)
  const [Data] = useState({
    pemeriksa : props.pemeriksa,
    pasien : props.pasien,
    umur : props.umur,
    nik : props.nik,
    ttl : props.ttl,
    Jperiksa : props.Jperiksa,
    jk : props.jk,
    alamat : props.alamat,
    sample : props.sample,
    hasil : props.hasil,
    Mpemeriksaan : props.Mpemeriksaan
  })
  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(file)
      var newCid = added.cid.toV1().toString()
      var Sk = newCid.substr(0,Math.floor(Math.random() * (10 - 3 + 1) ) + 3)
      Sk = Sk.split('').sort(function(){return 0.5-Math.random()}).join('');
      var ciphertext = CryptoJS.AES.encrypt(newCid, Sk).toString()
      var Qr = ciphertext+Sk
      const response = (await QRCode.toDataURL(Qr)).toString()
      updateFileUrl(response)
      updateCid(newCid)
      console.log('Cid : ',newCid,' Secret Key : ',Sk,' En Cid : ',' Qr : ',Qr)
      
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  
  }
  return (
    <>
    {  !postSubmitted ? 
      (
        <div className="container">
          <div className="jumbotron mt-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm"> 
                        <form onSubmit={(event) => {
                              event.preventDefault()
                              props.storeHash(Cid,exps)
                              let keyRemove = ["pemeriksa","pasien","umur","nik","ttl","Jperiksa","jk","alamat","sample","hasil","Mpemeriksaan"]
                              keyRemove.forEach(k => localStorage.removeItem(k))
                              updatepostSubmitted(true)
                              console.log(Cid)
                              updateA(0)   
                            }}> 
                          <input
                              type="file"
                              onChange={onChange}
                              required
                          />
                          {
                              fileUrl && (
                              <>
                              <br/><br/>  
                              <img src={fileUrl} width="300px" alt="Qr Code"/>
                              <br/><br/>
                              <button type="submit" className="btn btn-primary">Upload</button>
                              </>
                              )
                          }
                        </form> 
                      </div>
                  </div>
                </div>
            </div>
          </div>
      ) : (
        <PDF  
                            pemeriksa={Data.pemeriksa} 
                            jk={Data.jk} 
                            pasien={Data.pasien} 
                            nik={Data.nik} 
                            ttl={Data.ttl} 
                            umur={Data.umur} alamat={Data.alamat} 
                            sample={Data.sample}
                            Jperiksa={Data.Jperiksa}
                            Mpemeriksaan={Data.Mpemeriksaan}
                            hasil={Data.hasil}
                            Qr={fileUrl}
                            create2={props.create2}
                            setCreate={props.setCreate}
                            setCreate2={props.setCreate2}
                            exp={props.exp}
                        />
      )
    }
      </>
    )
  }

export default IpfsUp