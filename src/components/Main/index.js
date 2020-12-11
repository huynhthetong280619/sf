import Search from '../Search';
import Create from '../Create';
import Header from '../Header';
import CustomizedTables from '../Table-Content';
import React from 'react'
const Main = () => {

    const [lstProducts, updateProducts] = React.useState([
        {
            name: 'MacBook Pro',
            color: 'Silver',
            nLevel: 7
        },
        {
            name: 'Yoga 5 Pro',
            color: 'Gray',
            nLevel: 6
        },
        {
            name: 'ChromeBook',
            color: 'Black',
            nLevel: 5
        }
    ]);


    return <>
        <Header />
        <Search />
        <CustomizedTables lstProducts={lstProducts} />
        <Create updateProducts={updateProducts} lstProducts={lstProducts} />
    </>
}


export default Main;
