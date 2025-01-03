import React,{children} from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function MainLayout( {children} ) {
  return (
    <>
   <Header/>
   <div>{ children }</div>
   <Footer/>
   </>
  )
}

