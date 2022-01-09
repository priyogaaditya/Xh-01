import React, { Component } from 'react';
import PDF from './PDF';
// import moment from 'moment';

class Post extends Component {
    state = {
        pemeriksa: '',
        pasien: '',
        umur: '',
        nik: '',
        ttl: Date(),
        Jperiksa: Date(),
        jk: '',
        alamat : '',
        sample: '',
        hasil: '',
        Mpemeriksaan: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.pemeriksa || !this.state.jk || !this.state.pasien || !this.state.nik || !this.state.ttl || !this.state.alamat ){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true,
                // ttl: moment(this.ttl).format("DD/MM/YY"),
                // Jperiksa: moment(this.Jperiksa).format("DD/MM/YY")
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Form Pembuatan Surat Keterangan Bebas Covid-19</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('pemeriksa')} name="pemeriksa" type="text" placeholder="Nama Pemeriksa" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Tanggal Pemeriksaan: </label>
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('Jperiksa')} name="Jperiksa" id='jamP' type="date" placeholder="dd-mm-yyyy" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('pasien')} name="pasien" type="text" placeholder="Nama Pasien" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('nik')} name="nik" type="text" placeholder="No NIK" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    Jenis Kelamin:<br/>
                                                    <select className="form-select" defaultValue={'DEFAULT'} onChange={this.onChange('jk')} aria-label="Default select example" name='jk'>
                                                        <option value="DEFAULT" disabled>Pilih Jenis Kelamin</option>
                                                        <option value="Laki-Laki">Laki-Laki</option>
                                                        <option value="Perempuan">Perempuan</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Tanggal Lahir Pasien: </label>
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('ttl')} name="ttl" id='Jamp' type="date" placeholder="dd-mm-yyyy" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('alamat')} name="alamat" type="text" placeholder="Alamat Pasien" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('sample')} name="sample" type="text" placeholder="Jenis Sampel" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('Mpemeriksaan')} name="Mpemeriksaan" type="text" placeholder="Metode Pemeriksaan" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('hasil')} name="hasil" type="text" placeholder="Hasil Pemeriksaan" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF    
                            pemeriksa={this.state.pemeriksa} 
                            jk={this.state.jk} 
                            pasien={this.state.pasien} 
                            nik={this.state.nik} 
                            ttl={this.state.ttl} 
                            umur={this.state.umur} alamat={this.state.alamat} 
                            sample={this.state.sample}
                            Jperiksa={this.state.Jperiksa}
                            Mpemeriksaan={this.state.Mpemeriksaan}
                            hasil={this.state.hasil}
                        />
                    )
                }
            </>
        );
    }
}
//<textarea onChange={this.onChange('pasien')} className="form-control" name="pasien" placeholder="Nama Pasien" rows="7"></textarea>
export default Post;