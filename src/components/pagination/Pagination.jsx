import React, {useEffect, useState} from 'react';

import PageOn from '../../assets/pagination_on.png';
import PageOff from '../../assets/pagination_off.png';

import { PaginationView } from './style'

export default function Pagination() {

    const [ page1, setPage1 ] = useState(true);
    const [ page2, setPage2 ] = useState(false);
    const [ page3, setPage3 ] = useState(false);
    const [ page4, setPage4 ] = useState(false);
    const [ base, setBase ] = useState();

    const [list, setList] = useState();

    function handlePagination() {

        switch (base) {
            case 1:
                setPage1(true);
                setPage2(false);
                setPage3(false);
                setPage4(false);
                break;

            case 2:
                setPage1(false);
                setPage2(true);
                setPage3(false);
                setPage4(false);
                break;

            case 3:
                setPage1(false);
                setPage2(false);
                setPage3(true);
                setPage4(false);
                break

            case 4:
                setPage1(false);
                setPage2(false);
                setPage3(false);
                setPage4(true);
                break
        
            default:
                setPage1(true);
                setPage2(false);
                setPage3(false);
                setPage4(false);
                break;
        }
        setBase(+1)
    }

    return (
        <PaginationView>{
                useEffect(() => {
                    handlePagination()
                    setList(
                        <>
                            <li onClick={() => {setBase(1)}}> {page1 ? <img src={PageOn} /> : <img src={PageOff} />} </li>
                            <li onClick={() => {setBase(2)}}> {page2 ? <img src={PageOn} /> : <img src={PageOff} />} </li>
                            <li onClick={() => {setBase(3)}}> {page3 ? <img src={PageOn} /> : <img src={PageOff} />} </li>
                            <li onClick={() => {setBase(4)}}> {page4 ? <img src={PageOn} /> : <img src={PageOff} />} </li>
                        </>
                    )
                }, [base])
            }
            {
                list
            }
        </PaginationView>
    );
}
