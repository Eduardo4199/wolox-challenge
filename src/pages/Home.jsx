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
                    <Link to="/Login">Login</Link>
                    <img className="WoloxHead"/>
                    <div className="TopPage">
                        <div><h2>Bienvenido a tu entrevista tecnica</h2></div>
                        <div><img className="imgHero"/></div>
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
                            <label>Flexibilidad Horaria</label>
                        </div>
                        <div className="icoFormat">
                            <i className="iconHomeOffice"></i>
                            <label>Home Office</label>
                        </div>
                        <div className="icoFormat">
                            <i className="iconWorkshop"></i>
                            <label>Capacitaciones y workshops</label>
                        </div>
                        <div className="icoFormat">
                            <i className="iconSnacks"></i>
                            <label>Snacks,frutas, y bebidas gratis</label>
                        </div>
                        <div className="icoFormat">
                            <i className="iconRemote"></i>
                            <label>Semana remota</label>
                        </div>
                        <div className="icoFormat">
                            <i className="iconTechs"></i>
                            <label>Trabajar en las ultimas tecnologias</label>
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
