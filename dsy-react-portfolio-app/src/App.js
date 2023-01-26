// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Header from './components/Header.js';
import Nav from './components/Navbar.js';
import Footer from './components/Footer.js';
import Page from './components/Page'



function App() {
  const [pages] = useState([
    { name: 'Home'},
    { name: 'About'},
    { name: 'Portfolio'},
    { name:'Contact'},
    { name:'Resume'}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className='bg-white text-gray-600 work-sans leading-normal text-base tracking-normal'>
      <Header>
        <Nav 
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}>
        </Nav>
      </Header>
      <main className='content h-full container mx-auto'>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
