import React, { Component } from 'react';
import PDF from './PDF';
import moment from 'moment';

class Post2 extends Component  {
    
    state = {
        pemeriksa: this.props.info.username ,
        pasien: '',
        umur: '',
        nik: '',
        ttl: Date(),
        Jperiksa: Date(),
        jk: '',
        exp: '',
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

    onChanges = input => e => {
        this.setState({
            [input]: moment(e.target.value).format("DD/MM/YYYY")
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.jk || !this.state.pasien || !this.state.nik || !this.state.ttl || !this.state.alamat || !this.state.sample || !this.state.hasil || !this.state.Mpemeriksaan || !this.state.exp ){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.props.Handler(this.state.pemeriksa,this.state.pasien,this.state.umur,this.state.nik,this.state.ttl,this.state.Jperiksa,this.state.jk,this.state.alamat,this.state.sample,this.state.hasil,this.state.Mpemeriksaan,this.state.exp)
            this.setState({
                postSubmitted: true,
            });
            
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (
                    <div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Form Pembuatan Surat Keterangan Bebas Covid-19</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('pemeriksa')} name="pemeriksa" type="text" value={this.props.info.username} className="form-control" disabled/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Tanggal Pemeriksaan: </label>
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChanges('Jperiksa')} name="Jperiksa" id='jamP' type="date" placeholder="dd-mm-yyyy" className="form-control" />
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
                                                    <input onChange={this.onChanges('ttl')} name="ttl" id='Jamp' type="date" placeholder="dd-mm-yyyy" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('alamat')} name="alamat" type="text" placeholder="Alamat Pasien" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('exp')} name="exp" type="text" placeholder="Masa Berlaku Surat" className="form-control" />
                                                </div> 
                                                <div className="form-group">
                                                    Jenis Sampel:<br/>
                                                    <select className="form-select" defaultValue={'DEFAULT'} onChange={this.onChange('sample')} aria-label="Default select example" name='sample'>
                                                        <option value="DEFAULT" disabled>Pilih Jenis Sampel</option>
                                                        <option value="Swab Nasofaring">Swab Nasofaring</option>
                                                        <option value="Swab Orofaring">Swab Orofaring</option>
                                                        <option value="Sputum">Sputum</option>
                                                        <option value="Bronchoalveolar Lavage">Bronchoalveolar Lavage</option>
                                                        <option value="Tracheal Aspirate">Tracheal Aspirate</option>
                                                        <option value="Nasopharyngeal Aspirate">Nasopharyngeal Aspirate </option>
                                                        <option value="Jaringan Biopsi atau Autopsi">Jaringan Biopsi atau Autopsi</option>
                                                        <option value="Serum (Dua Sampel: Akut dan Konvalesen)">Serum (Dua Sampel: Akut dan Konvalesen)</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    Metode Pemeriksaan:<br/>
                                                    <select className="form-select" defaultValue={'DEFAULT'} onChange={this.onChange('Mpemeriksaan')} aria-label="Default select example" name='Mpemeriksaan'>
                                                        <option value="DEFAULT" disabled>Pilih Metode Pemeriksaan</option>
                                                        <option value="Rapid Test Antibodi">Rapid Test Antibodi</option>
                                                        <option value="Swab Antigen">Swab Antigen</option>
                                                        <option value="PCR">PCR</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    Hasil Tes:<br/>
                                                    <select className="form-select" defaultValue={'DEFAULT'} onChange={this.onChange('hasil')} aria-label="Default select example" name='hasil'>
                                                        <option value="DEFAULT" disabled>Pilih Hasil Tes</option>
                                                        <option value="Negative SARS CoV-2">Negative SARS CoV-2</option>
                                                        <option value="Positive SARS CoV-2">Positive SARS CoV-2</option>
                                                    </select>
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
                            create2={this.props.create2}
                            setCreate={this.props.setCreate}
                            setCreate2={this.props.setCreate2}
                            exp={this.state.exp}
                        />
                    )
                }
            </>
        );
    }
}
export default Post2;