'use client';

import { useRef } from "react";
import styles from "../styles/globals.css";
import BasicInfo from "@/components/BasicInfo";
import Sidebar from "@/components/Sidebar";
import TechStack from "@/components/TechStack";
import TimeLine from "@/components/TimeLine";


// 메인 페이지
export default function Home({children}) {
    const sectionRefs = {
        Info: useRef(null),
        TimeLine: useRef(null),
        TechStack: useRef(null),
        DocGenerate: useRef(null),
    };

    return(
        <div className="home-container">
            <Sidebar sectionRefs={sectionRefs} />
            <div className="home-main-container">
                <section ref={sectionRefs.Info}><BasicInfo/></section>
                <section ref={sectionRefs.TimeLine}><TimeLine/></section>
                <section ref={sectionRefs.TechStack}><TechStack/></section>
            </div>
        </div>
    )
}