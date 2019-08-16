import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'

class App extends React.Component{
  state = {
    count : 0,
    name : ''
  }

  functionKu = () => {
    return <h1>Halo Dunia!</h1>
  }

  kali = (a, b) => {
    let c = a*b
    return (
      <div style={{border: '1px solid green'}}>
        <h3>{c}</h3>
      </div>
    )
  }

  onBtnGoHandle = () => {
    alert(this.refs.inputKu.value)
  }

  checkLogin = (checked) => {
    if(checked){
      return 'Anda sudah login!'
    }else{
      return 'Anda belum login'
    }
  }

  renderData = () => {
    const list = ['Seto', 'Andi', 'Budi']
    var jsx = list.map((val) => {
      return <li>{val}</li>
    })
    return jsx
  }

  onClickBtnWarning = () => {
    this.setState({count : 2})
  }

  render(){
    return(
      <div className='text-center'>
        <Header/>
        Hello World
        {this.functionKu()}
        <p style={{color:'red', fontSize: '64px'}}>Namaku {this.state.name}</p>
        <div style={{display:'flex'}}>
          <div style={{minHeight:'150px', border:'1px solid red', flex:1}}>
            {this.kali(3,2)}
          </div>
          <div style={{minHeight:'150px', border:'1px solid blue', flex:1}}>
            {this.kali(5,5)}
          </div>
        </div>
        <input type='text' placeholder="Input Nama Kalian" className='form-control' ref='inputKu'/>
        <input type="button" value="GO" className="btn btn-success btn-block" onClick={() => this.setState({name : this.refs.inputKu.value})} />
        <h1>{this.checkLogin(false)}</h1>
        <ul>
          {this.renderData()}
        </ul>
        <div className="d-flex justify-content-center">
          {/* <input type="button" className="btn btn-warning" value="CLICK ME!" onClick={this.onClickBtnWarning}/> */}
          <input type="button" className="btn btn-secondary" value="-" onClick={() => this.setState({count: this.state.count - 1})} />
          <h3>{this.state.count}</h3>
          <input type="button" className="btn btn-primary" value="+" onClick={() => this.setState({count: this.state.count + 1})}/>
        </div>
      </div>
    )
  }
}

export default App;