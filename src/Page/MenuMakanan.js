import React, { Component } from 'react';
import ListMakanan from './../ListData/ListMakanan';

class MenuMakanan extends Component {
  render(){
    return(
      <div>
        <h3>Daftar Makanan Yang Kami Sediakan : </h3>
        <td>
          <ListMakanan list="../../img/nasipadang.jpg" />
        </td>
        <td>
          <ListMakanan list="../../img/sate.png" />
        </td>
        <td>
          <ListMakanan list="../../img/sotolamongan.png" />
        </td>
        <td>
          <ListMakanan list="../../img/nasi kentut.png" />
        </td>
        <td>
          <ListMakanan list="../../img/nasi kuning.jpg" />
        </td>
      </div>
    );
  }
}

export default MenuMakanan;
