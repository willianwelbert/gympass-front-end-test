import React from 'react';
import Loader from '../../components/Loader/Loader.component';
import OwnerInfo from '../../components/OwnerInfo/OwnerInfo.component';
import List from '../../components/List/List.component';
import Footer from '../../components/Footer/footer.component';

const ListPage = () => {

  return(
    <>
    <Loader/>
    <OwnerInfo />
    <List />
    <Footer/>
    </>
  )

}

export default ListPage;