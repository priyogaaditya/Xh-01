import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Covid from '../abis/covid.json';
import Navbar from './Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Scan from './Scan';
import CrUp from './CrUp';
import Upload from './Upload';
import Adm from './Adm';
import Main from './Content/Main';
import IpfsUp from './Content/IpfsUp';



class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    this.setState({ account: accounts[0] })
    const netID = await web3.eth.net.getId()
    const netData = Covid.networks[netID]
    if (netData) {
      const covid = web3.eth.Contract(Covid.abi, Covid.networks[5777].address)
      this.setState({ covid })
      this.setState({ loading: false })
      const idHashs = await covid.methods.idHash().call()
      this.setState({idHash : idHashs})
      this.setState({info : await covid.methods.users(this.state.account).call()})
      if(this.state.info.username===''){
        this.setState({uname : 'USER'})
      }else{
        this.setState({uname : this.state.info.username})
      }
      for(var index = 0; index < this.state.idHash; index++){
        const hash = await covid.methods.sHash(index).call()
        this.setState(
          {
            Hash : [...this.state.Hash, hash], 
          }
        )
      }
      console.log(this.state.idHash.toString())
      console.log(this.state.Hash)
      console.log("Nilai a : ",this.state.a)
    } else {
      window.alert('Covid contract not deployed to detected network')
    }
    console.log(netID)
  }

  constructor(props) {
    super(props)
    this.state = {
      create: false,
      create2: false,
      account: '',
      idHash: 0,
      uname: '',
      Hash: [],
      info: [],
      loading: true,
      document: '',
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
      exp: ''
    }
    this.Handler = this.Handler.bind(this)
    this.storeHash = this.storeHash.bind(this)
    this.setA = this.setA.bind(this)
    this.setCreate = this.setCreate.bind(this)
    this.setCreate2 = this.setCreate2.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
    this.addUser = this.addUser.bind(this)

  }

  Handler(p,pa,u,n,t,j,je,a,s,h,m,e){
    localStorage.setItem('pemeriksa', p)
    localStorage.setItem('pasien', pa)
    localStorage.setItem('umur', u)
    localStorage.setItem('nik', n)
    localStorage.setItem('ttl', t)
    localStorage.setItem('Jperiksa', j)
    localStorage.setItem('jk', je)
    localStorage.setItem('alamat', a)
    localStorage.setItem('sample', s)
    localStorage.setItem('hasil', h)
    localStorage.setItem('Mpemeriksaan', m)
    localStorage.setItem('exp', e)
    this.setState({
      pemeriksa : p,
      pasien : pa,
      umur : u,
      nik : n,
      ttl : t,
      Jperiksa : j,
      jk : je,
      alamat : a,
      sample : s,
      hasil : h,
      Mpemeriksaan : m,
      exp: e
    });
  }

  getInitialState() {
    var pemeriksa = localStorage.getItem( 'pemeriksa' ) || '';
    var pasien = localStorage.getItem( 'pasien' ) || '';
    var umur = localStorage.getItem( 'umur' ) || '';
    var nik = localStorage.getItem( 'nik' ) || '';
    var ttl = localStorage.getItem( 'ttl' ) || '';
    var Jperiksa = localStorage.getItem( 'Jperiksa' ) || '';
    var jk = localStorage.getItem( 'jk' ) || '';
    var alamat = localStorage.getItem( 'alamat' ) || '';
    var sample = localStorage.getItem( 'sample' ) || '';
    var hasil = localStorage.getItem( 'hasil' ) || '';
    var Mpemeriksaan = localStorage.getItem( 'Mpemeriksaan' ) || '';
    var exp = localStorage.getItem('exp')
    this.setState({
      pemeriksa : pemeriksa,
      pasien : pasien,
      umur : umur,
      nik : nik,
      ttl : ttl,
      Jperiksa : Jperiksa,
      jk : jk,
      alamat : alamat,
      sample : sample,
      hasil : hasil,
      Mpemeriksaan : Mpemeriksaan,
      exp: exp
    })
  }


  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  storeHash(hash,exp) {
    // this.setState({ loading: true })
    this.state.covid.methods.storeHash(hash,exp).send({ from: this.state.account }).once('receipt', (receipt) => {
       this.setState({ loading: false })
    })
  }

  addUser(uAddress,uName,uRole) {
    //this.setState({loading: true})
    this.state.covid.methods.addUser(uAddress,uName,uRole).send({from: this.state.account})
    .once('receipt', (receipt) => {
      this.setState({loading: false})
    })
  }

  setA(){
    this.setState({
      a : 0
    })
  }

  setCreate(x){
    this.setState({
      create : x
    })
  }
  
  setCreate2(x){
    this.setState({
      create2 : x
    })
  }


  render() {
    // if(this.state.a!==1){
    //   this.setState({
    //     a : 1
    //   })
    // }
    // console.log("Pemeriksa : ", this.state.pemeriksa," Pasien : ", this.state.pasien)
    return (
      <div>
         <Router>
          <Navbar account={this.state.account} info={this.state.info} uname={this.state.uname} />
          <div className="container-fluid mt-5">
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
          <Route exact path="/">
              <div className="row">
                <main role="main" className="col-lg-12 d-flex">
                  {this.state.loading
                    ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                    : <Main
                           uname={this.state.uname}
                    />
                  }
                </main>
              </div>
          </Route>
          <Route path="/add">
              <div className="row">
                <main role="main" className="col-lg-12 d-flex">
                  {this.state.loading
                    ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                    : <Adm addUser={this.addUser}
                           info={this.state.info}
                    />
                  }
                </main>
              </div>
          </Route>
          <Route path="/PDF">
              <div className="row">
                <main role="main" className="col-lg-12 d-flex">
                  {this.state.loading
                    ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                    : <CrUp
                    Handler={this.Handler}
                    create={this.state.create}
                    create2={this.state.create2}
                    setCreate={this.setCreate}
                    setCreate2={this.setCreate2}
                    info={this.state.info}
                    // storeHash={this.storeHash} 
                    // pemeriksa='Yatno Suprapto Legowo' 
                    // jk='Laki-Laki'
                    // pasien='Asep Sugigi Nartod' 
                    // nik='123123123123123' 
                    // ttl='MARS, 20 Agustus 1997' 
                    // umur='22' 
                    // alamat='jalan mars no 69, rt 54 rw 15 Kab. neptunus' 
                    // sample='Swab Nasofaring'
                    // Jperiksa='22/12/2021'
                    // Mpemeriksaan='Rapid Test Antigen'
                    // hasil='Negative SARS CoV-2'
                    // <PDF2
                    // storeHash={this.storeHash} 
                    // pemeriksa='Yatno Suprapto Legowo' 
                    // jk='Laki-Laki'
                    // pasien='Asep Sugigi Nartod' 
                    // nik='123123123123123' 
                    // ttl='MARS, 20 Agustus 1997' 
                    // umur='22' 
                    // alamat='jalan mars no 69, rt 54 rw 15 Kab. neptunus' 
                    // sample='Swab Nasofaring'
                    // Jperiksa='22/12/2021'
                    // Mpemeriksaan='Rapid Test Antigen'
                    // hasil='Negative SARS CoV-2'    
                    />
                  }
                </main>
              </div>
            </Route>
            <Route path="/Up">
              <div className="row">
                <main role="main" className="col-lg-12 d-flex">
                  {this.state.loading
                    ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                    : <IpfsUp storeHash={this.storeHash}
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
                            getInitialState ={this.getInitialState}
                            create={this.state.create}
                            create2={this.state.create2}
                            setCreate={this.setCreate}
                            setCreate2={this.setCreate2}
                            exp={this.state.exp}
                            info={this.state.info}
                    />
                  }
                </main>
              </div>
            </Route>
            <Route path="/Main">
            <div className="row">
                <main role="main" className="col-lg-12 d-flex">
                  {this.state.loading
                    ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                    : <Scan Hash={this.state.Hash} 
                            setDocument={this.setDocument} 
                            document={this.state.document} 
                            info={this.state.info}/>
                  }
                </main>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
