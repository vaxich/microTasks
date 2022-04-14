import React, { MouseEvent, useState } from 'react';

type FilterStetusType = "ALL" | "Dollars" | "RUBLS"

export const MetodFilter = () => {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const[statusFilter, setStatusFilter] = useState<FilterStetusType>("ALL");

    let currentMoney = money;

    if(statusFilter==="Dollars") {
        currentMoney=currentMoney.filter( (m) => m.banknots === "Dollars")
    } else if (statusFilter==="RUBLS") {
        currentMoney=currentMoney.filter( (m) => m.banknots === "RUBLS")
    }
    const onClickFilterHandler =(nameButton:FilterStetusType) => {
       setStatusFilter(nameButton);
    }

    return (
        <div>
            <ul>
                {currentMoney.map((obj, index) => {
                    return (
                        <div>
                            <div>
                                <li key={index}>
                                    <span>{obj.banknots}</span>
                                    <span>{obj.value}</span>
                                    <span>{obj.number}</span>
                                </li>

                            </div>
                        </div>


                    )
                })}
            </ul>
            <button onClick={ () => onClickFilterHandler("ALL")}>все</button>
            <button onClick={ () => onClickFilterHandler("Dollars")}>долары</button>
            <button onClick={ () => onClickFilterHandler("RUBLS")}>рубли</button>
        </div>
    )
}