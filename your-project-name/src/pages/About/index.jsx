import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

function About() {
  return (
    <>
    <Header></Header>
    <section id='about'>
        
        <div className="card">
        <img src="https://m.media-amazon.com/images/M/MV5BOWU1ODBiNGUtMzVjNi00MzdhLTk0OTktOWRiOTIxMWNhOGI2XkEyXkFqcGdeQXVyMTU2OTM5NDQw._V1_.jpg" alt="" />
            Herkese salam men Iman </div>
        <div className="card">
        <img src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/235135_v9_bc.jpg" alt="" />
        Herkese salam men Iman </div>
        <div className="card">
        <img src="https://i.insider.com/5b462c57f4af9c1a008b45eb?width=700" alt="" />
        Iman</div>
    </section>
    <Footer></Footer>
    </>
  )
}

export default About