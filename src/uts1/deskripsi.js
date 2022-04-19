import React from "react";
class Deskripsi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            judulbuku   : "Promise",
            penulis     : "Dwitasari",
            penerbit    : "Loveable",
            tahun       : 2016,
        }
    }
    render(){
        return (
           <div>
               <img src="/images/promise.jpg" alt=""/><br/>
               <p>
                   Judul Buku   : {this.state.judulbuku}<br/>
                   penulis      : {this.state.penulis}<br/>
                   Penerbit     : {this.state.penerbit}<br/>
                   Tahun Terbit    : {this.state.tahun}<br/>
               </p>
           </div> 
        )
    }
}
export default Deskripsi;