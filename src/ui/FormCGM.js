import React, {Component} from 'react';

var data = Date();
let _depart, _Descript, _Mov;
const 
url = "http://localhost:3300",
apiPath = "/api/addGDM";
const CDDsubmit = (e) => {
    console.log('Form -> handleSubmit');
    console.log(_depart.value, _Descript.value, _Mov.value)
    fetch(url + apiPath + `?depart=${_depart.value}&descr=${_Descript.value}&valor=${_Mov.value}`);
    
} 

export default class FormCGM extends Component {
    state = {
    getCFDA: []
}

componentDidMount(){
    this.getData();
}
getData =_=>{
    fetch('http://localhost:3300/apiCDD')
        .then(Response => Response.json())
        .then(Response => this.setState({getCFDA: Response.data}))
        .catch(err => console.error(err))
}

    render(){
      return(
        <div style={{paddingTop: '3%'}} > 
        <form onSubmit={CDDsubmit} className="form-line">
            <div class="form-row">
                <div class="col">
                <select ref={select => _depart = select} class="custom-select" id="inputGroupSelect01">
                    <option selected>Depart.</option>
                    {this.state.getCFDA.map((getCFDA) => {
                    return( 
                        <option value={getCFDA.depart}>{getCFDA.depart}</option>
                    )})}
                </select>
                </div>
                <div class="col">
                <input type="text" ref={input => _Descript = input} class="form-control" placeholder="descrição" />
                </div>
                <div class="col">
                <input type="text" ref={input => _Mov = input} class="form-control" placeholder="Valor R$" />
                </div>
                <div class="col">
                <button className="btn btn-primary">Salvar </button>
                </div>
            </div>
        </form>
        </div>
      );
    }

}
