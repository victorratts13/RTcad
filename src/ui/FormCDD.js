import React, {Component} from 'react';

var data = Date();

let _NomeDepart, _AreaDepart, _Data;
const 
url = "http://localhost:3300",
apiPath = "/api/addCDD"; 
const CDDsubmit = (e) => {
    console.log('Form -> handleSubmit');
    console.log(_NomeDepart.value, _AreaDepart.value);
    fetch(url + apiPath + `?depart=${_NomeDepart.value}&area=${_AreaDepart.value}`)
} 
export default class FormCDD extends Component {
    render(){
      return(
    <div style={{paddingTop: '3%'}} >     
        <form onSubmit={CDDsubmit} className="form-line">
            <div class="form-row">
                <div class="col">
                <input type="text" ref={input => _NomeDepart = input} class="form-control" placeholder="Departamento" />
                </div>
                <div class="col">
                <input type="text" ref={input => _AreaDepart = input} class="form-control" placeholder="Area" />
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
