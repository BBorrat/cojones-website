import React, { useState } from "react";
import { LinkButton } from "../components/LinkButton";
import closeBtnLargeDefault from "../public/images/btn-large-close-default.svg";
import closeBtnLargeHover from "../public/images/btn-large-close-hover.svg";
import Image from "next/image";

export function WorkModal(props) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="work-module cursor-pointer">
            <div className={"work-module__projects-grid__image__container__" + props.projectsGridImgContainer} >
                <div
                    onClick={() => setShowModal(true)}
                >
                    <div className="white"></div>
                    <div className="black"></div>
                    <Image
                        className="work__projects-grid__image"
                        src={props.projectsGridImgSrc}
                        layout="responsive"
                    />
                </div>
            </div>
            {showModal ? (
                <div className="work-module__modal">
                    <div className="work-module__close-button">
                        <LinkButton href="#cta" src={closeBtnLargeDefault} srcHover={closeBtnLargeHover} onClick={() => setShowModal(false)} />
                    </div>
                    {/* <button
                        className="work-module__close-button"
                        onClick={() => setShowModal(false)}
                    >Close</button> */}
                    <div className="work-module__project__container">
                        <iframe className="work-module__video" width="560" height="315" src="https://www.youtube.com/embed/Ismkt0x4ZZI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            ) : null}
        </div>
    );
}