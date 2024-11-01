function SerieComponent(props) {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={
            ""+props.imagen
          }
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">{props.categoria}</p>
          <button className="btn btn-primary">Description</button>
        </div>
      </div>
    );
  }
  
  export default SerieComponent;