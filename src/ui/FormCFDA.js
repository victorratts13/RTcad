import React, {Component} from 'react';


var data = Date();
       let _Nome, _SobreNome, _Data, _Depart;
       const
       url = "http://localhost:3300",
       apiPath = "/api/addCFDA";
       const handleSubmit = (e) => {
        //console.log('Form -> handleSubmit');
            console.log(_Nome.value, _SobreNome.value, data, _Depart.value);
            fetch(url + apiPath +`?nome=${_Nome.value}&sobrenome=${_SobreNome.value}&depart=${_Depart.value}`)
        }

export default class FormCFDA extends Component {
    state = {
        getCDD: []
    }
    
    componentDidMount(){
        this.getData();
    }
    getData =_=>{
        fetch('http://localhost:3300/apiCDD')
            .then(Response => Response.json())
            .then(Response => this.setState({getCDD: Response.data}))
            .catch(err => console.error(err))
    }
    
    render(){
      return(
        <form onSubmit={handleSubmit} className="form-line">
            <div class="form-row">
                <div class="col">
                <input type="text" ref={input => _Nome = input} class="form-control" placeholder="Nome" />
                </div>
                <div class="col">
                <input type="text" ref={input => _SobreNome = input} class="form-control" placeholder="Sobrenome" />
                </div>
                <div class="col">
                
                <select ref={select => _Depart = select} class="custom-select" id="inputGroupSelect01">
                <option selected>Depart.</option>
                {this.state.getCDD.map((getCDD) => {
               return(   
                <option value={getCDD.depart}>{getCDD.depart}</option>
                )})}
                </select>
                </div>
                <div class="col">
                <button className="btn btn-primary">Salvar </button>
                </div>
            </div>
            <div>
            </div>
        </form>
      );
    }

}
