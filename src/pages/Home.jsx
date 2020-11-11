import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import "../assets/css/home.css";
/**
 * @return {string} app view.
 * @param {Object} props
 */
export function Home(props) {
    return (
        <Fragment>
            <div className="flex-container">
                <div className="Background1">
                    <div className="HeaderBox">
                        <div className="HeaderImg">
                            <img className="WoloxHead"/>
                        </div>
                        <div className="HeaderPush">
                            <div className="HeaderItem">
                                <Link to="/Register"><span className="Bg1Text">Registrarse</span></Link>
                            </div>
                            <div className="HeaderItem">
                                <span className="Bg1Text">Beneficios</span>
                            </div>
                            <div className="HeaderItem">
                                <Link to="/Login"><span className="Bg1Text">Login</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="TopPage">
                        <div>
                            <div className="Bg1TextPosition">
                                <h2 className="Bg1Text">
                                    <span>
                                        Bienvenido a tu <br></br>
                                    </span>
                                    <span className="Bg1TextA">
                                        <bold> Entrevista Técnica </bold>
                                    </span>
                                    en <br></br>
                                    <span className="Bg1TextB">
                                        <bold> Wolox</bold>
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div>
                            <img className="imgHero"/>
                        </div>
                    </div>
                </div>
                <div className="Background2">
                    <div className="Bg2Container">
                        <div>
                            <img className="Woloxer Bg2TwitterImg"></img>
                            <div className="Bg2TwitterText">
                                <h2>350 + Woloxers</h2>
                            </div>
                        </div>
                        <div>
                            <div className="Bg2LeftText">
                                <h2>Trabajamos para convertir ideas en productos.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Background3">
                    <h4>Entre los beneficios que ofrecemos se encuentran :)</h4>
                    <div className="iconList">
                        <div className="icoFormat">
                            <i className="iconHour"></i>
                            <label className="icoLabel">Flexibilidad Horaria</label>
                        </div>
                        <div className="icoFormat">
                            <i className="iconHomeOffice"></i>
                            <label className="icoLabel">Home Office</label>
                        </div>
                        <div className="icoFormat">
                            <i className="iconWorkshop"></i>
                            <label className="icoLabel">Capacitaciones y workshops</label>
                        </div>
                        <div className="icoFormat">
                            <i className="iconSnacks"></i>
                            <label className="icoLabel">Snacks,frutas, y bebidas gratis</label>
                        </div>
                        <div className="icoFormat">
                            <i className="iconRemote"></i>
                            <label className="icoLabel">Semana remota</label>
                        </div>
                        <div className="icoFormat">
                            <i className="iconTechs"></i>
                            <label className="icoLabel">Trabajar en las ultimas tecnologias</label>
                        </div>
                    </div>
                </div>
                <div className="Background4">
                    <h2>Gracias por hacer el ejercicio</h2>
                    <img className="WoloxFooter"/>
                </div>
            </div>
        </Fragment>
    );
}
