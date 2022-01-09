import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
var isSubmit=0
class Adm extends Component {

    
  render() {
    return (
        <>
        { this.props.info.role===3 ? (
            <>
            { !isSubmit ? (
                            <div className="container">
                                            <div className="jumbotron mt-3">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="well well-sm">
                                                            <form className='"form-horizontal' onSubmit={(event) => {
                                                                event.preventDefault()
                                                                const uAddress = this.uAddress.value
                                                                const uName = this.uName.value
                                                                const uRole = this.uRole.value
                                                                isSubmit=1
                                                                this.props.addUser(uAddress,uName,uRole)
                                                                }}>
                                                                <fieldset>
                                                                <legend className="text-center header">Tambah User</legend>
                                                                    <div className="form-group">
                                                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>    
                                                                        <input id="uAddress" type="text" ref={(input) => {this.uAddress = input}} className="form-control" placeholder="Masukkan User Address" required/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                                        <input id="userName" type="text" ref={(input) => {this.uName = input}} className="form-control" placeholder="Name" required/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        Role User:<br/>
                                                                        <select name="selectList" defaultValue={'DEFAULT'} id="userRole" ref={(input) => {this.uRole = input}}>
                                                                        <option value="DEFAULT" disabled>Pilih Role User</option>
                                                                        <option value="0">Dokter</option>
                                                                        <option value="1">Validator</option>
                                                                        </select>
                                                                    </div>
                                                                    <button type="submit" className="btn btn-primary mt-4">Add User</button>
                                                                    <p>&nbsp;</p>
                                                                </fieldset>
                                                            </form>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                </div>
                                            ) : (
                                                <div className="jumbotron mt-3">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="well well-sm"></div>
                                                                <Alert variant="success"><Alert.Heading>User Berhasil Ditambahkan <span>&#10003;</span></Alert.Heading></Alert>
                                                                <div className='center'><button type="qrcode-container" className="btn btn-primary">Back</button></div>
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
                            <Alert variant="danger"><Alert.Heading>ANDA TIDAK PUNYA WEWENANG DISINI!!!</Alert.Heading></Alert>
                       </div>
                    </div>
                </div>
            </div>
        </div> 
    )}
    </>
    );
  }
}

export default Adm;