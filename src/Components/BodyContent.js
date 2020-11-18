import React from 'react';
import '../Style/style.css';
import { GiKnifeFork } from 'react-icons/gi';
import { BiBook, BiBookHeart, BiSearch } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { BsCardChecklist } from 'react-icons/bs';

class BodyContent extends React.Component {
    render() {
        var logoSize = 45;
        var iconSize = 25;
        return(
            <div>                
                <nav className='navbar'>
                    <ul className='navbar-nav'>
                        <li className="logo">
                            <a href="#" className="nav-link">
                            <span className="link-text logo-text">Recipes</span>
                            <GiKnifeFork size={logoSize} />
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <BiBook size={iconSize}/>
                            <span className="link-text">Cookbook</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <BiBookHeart size={iconSize} />
                            <span className="link-text">Favorites</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <BsCardChecklist size={iconSize} />
                            <span className="link-text">Pantry</span>
                            </a>
                        </li>

                        <li className="nav-item" id="themeButton">
                            <a href="#" className="nav-link">
                            <BiSearch size={iconSize} />
                            <span className="link-text">Search</span>
                            </a>
                        </li>

                        <li className="nav-item" id="themeButton">
                            <a href="#" className="nav-link">
                            <FiSettings size={iconSize} />
                            <span className="link-text">Settings</span>
                            </a>
                        </li>

                    </ul>
                </nav>
                <div className='main'>
                    <h1>CSS is Cool</h1>
                    <p>
                    I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo quinoa
                    iceland normcore tumeric. Kitsch coloring book retro, seitan schlitz
                    tattooed biodiesel vexillologist neutra. Synth mumblecore deep v, umami
                    selfies normcore gluten-free snackwave. Seitan ramps drinking vinegar
                    venmo keytar, humblebrag VHS post-ironic tacos godard pour-over.
                    </p>
                    <p>
                    Sartorial kogi taxidermy, kickstarter synth yr irony ennui everyday carry
                    retro helvetica stumptown cloud bread squid echo park. Etsy cloud bread
                    sartorial quinoa tacos beard mumblecore shaman tumblr pop-up. Twee retro
                    fingerstache af helvetica pabst 8-bit leggings taiyaki portland ramps tbh
                    tumblr vinyl. Neutra humblebrag bushwick portland subway tile plaid, offal
                    scenester flexitarian cliche squid small batch palo santo. Palo santo meh
                    adaptogen +1 3 wolf moon, listicle brunch ethical fanny pack everyday
                    carry fam. Offal fingerstache taxidermy, man bun venmo PBR&amp;B helvetica
                    thundercats everyday carry tote bag artisan cray wolf jianbing.
                    </p>
                </div>
            </div>
        );
    }
}

export default BodyContent;