import React, { Component } from 'react';

class ListMenuUtama extends Component {
  render(){
    return(
      <div>
        <h1>
          <center>Selamat Datang Di Warung Nusantara</center>
        </h1>
        <center>
          <img src={this.props.gambarHome} alt="Masakan Nusantara" width="600" />
        </center>
      </div>
    );
  }
}

export default ListMenuUtama;
