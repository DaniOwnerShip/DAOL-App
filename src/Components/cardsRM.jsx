
import React, { useRef, useState, useCallback, useReducer, useEffect } from 'react';

import {   PipeIco,    PipeRM } from '../Functions/roadmap';

import { initRoadmap } from '../Functions/roadmap.js';


let icoSrc = [
    "resources/slots/react.png",
    "resources/slots/unity.png",
    "resources/slots/ethereum.png",
    "resources/slots/iot.png",
    "resources/slots/robot.png",
    "resources/slots/web.png",
    "resources/slots/spectrum.png"
]


export function RoadMapObj() {

    let refRM = useRef();

    useEffect(() => {
        // PipeRoadMap(refRM);
        PipeRM("RoadMap", refRM, null);
        initRoadmap();
    }, [refRM]);


    return (
        <div ref={refRM} className="container animations">

            <div id="lineAnimRM" className="lineAnim"></div>
            <div className="fontHead">RoadMap</div>

            <RoadMapTree
            />

        </div>
    );
}


export function RoadMapTree() {

    let refTree = useRef();
 

    useEffect(() => {
        PipeRM("Tree", refTree, null);
        // PipeTree(refTree);
    }, [refTree]);


    return (
        <div ref={refTree} className="RoadMapTree" style={{ visibility: "hidden" }}>

            <CardData

            />
            {icoSrc.map((ico, index) =>
                <div key={index + "i"}>
                    <Icons
                        src={ico}
                    />
                </div>
            )}

        </div>
    );
}



export function CardData() {

    let refData = useRef();


    useEffect(() => {
        // PipeData(refData);
        PipeRM("Card", refData, null);
    }, [refData]);

    return (

        <div className="boxData" ref={refData}>

            <div className="dragIco">
                <img src="resources/slots/drag_ico.png" alt="err" />
            </div>

            <DateBox
            />

            <TitleBox
            />

            <DescriptionBox
            />

        </div>
    );
}



function DateBox() {

    const [year, setYear] = useState("Ruta de aprendizaje");

    let refDate = useRef();

    useEffect(() => {
        PipeRM("DateCard", refDate, setYear);
        // PipeSeters(setYear, refDate, 0);
    }, [setYear, refDate]);

    return (
        <div ref={refDate} className="boxDate">
            {year}
        </div>

    );
}


function TitleBox() {

    const [titleTxt, setTitle] = useState("");

    let refTitle = useRef();

    useEffect(() => {
        // PipeSeters(setTitle, refTitle, 1);
        PipeRM("TitleCard", refTitle, setTitle);
    }, [setTitle, refTitle]);

    return (
        <div ref={refTitle} className="boxTitle">
            {titleTxt}
        </div>
    );
}



function selector(state, newstate) {

    if (typeof newstate.index === 'undefined') {
        return state = [];
    }

    switch (newstate.index) {
        case 4:
            return (
                <>
                    <li ><i className='fa fa-graduation-cap' aria-hidden='true'></i>
                        {newstate.data[0]}
                    </li>
                </>
            );
        case 5:
            return (
                <>
                    <li >{newstate.data[0]}</li>
                    <li >{newstate.data[1]}</li>
                    <li ><i className='fa fa-graduation-cap' aria-hidden='true'></i>
                        {newstate.data[2]}
                    </li>
                </>
            );
        default:
            return (
                newstate.data.map((txt, index) =>
                    <li key={index + "rm"}>
                        {txt}
                    </li>
                )
            );
    }
}



function DescriptionBox() {

    const [state, launcher] = useReducer(selector);

    let refDesc = useRef();

    useEffect(() => {
        // PipeSeters(launcher, refDesc, 2);
        PipeRM("TxtCard", refDesc, launcher);
    }, [launcher, refDesc]);

    return (
        <div ref={refDesc} className="boxDescription">
            <ul>
                {state}
            </ul>
        </div>
    );
}


let contIcosSet = 0;
export function Icons(p) {


    if (contIcosSet !== 0) {
        contIcosSet = 0;
    }

    // console.log("entry " + contIcosSet);
    const refIco = useCallback(node => {
        if (node !== null) {

            PipeIco(node, contIcosSet);
            // console.log("contIcosSet" + contIcosSet);
            contIcosSet++;
        }
    }, []);

    return (
        <div ref={refIco} className="boxIcon">
            <img src={p.src} className="imgIco" alt="err" />
        </div>
    );
}