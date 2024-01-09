import React from 'react'
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default function ajuda() {
	return (
	  <div>
    <div className="p-1 p-md-1 mb-1 text-white rounded">
      <div className="col-md-12 px-0">
        <h1 className="display-4 fst-italic">
          Aqui você encontra as melhores ofertas de viagens...
        </h1>
      </div>
      <aside>
        <h4 className="fs-4 text-center">Central de ajuda</h4>
        <nav className="navbar navbar-light bg-light">
          <from className="form-control">
            <div className="d-inline">
              <h2 className="fs-2">Como podemos te ajudar hoje?</h2>
            </div>
            <div className="form-control">
              <textarea className="form-control" rows={20} defaultValue={""} />
            </div>
          </from>
        </nav>
      </aside>
    </div>
  </div>	  
	)
  }
  
