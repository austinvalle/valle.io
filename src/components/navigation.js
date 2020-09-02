import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import './navigation.css';

const activeLinkStyle = { color: '#907ad6' }

export default function Navigation() {
	return (
		<nav className="io-nav">
			<Link to='/' className="io-nav-brand">valle.io</Link>
			<ul className="io-nav-items" role="navigation">
				<li className="io-nav-link"><Link to='/projects' activeStyle={activeLinkStyle}>Projects</Link></li>
				<li style={{ marginLeft: "auto" }}>
					<a target="_blank" href="https://github.com/moosebot" className="io-icon" rel="noopener noreferrer">
						<FontAwesomeIcon className="io-icon" icon={faGithub} />
					</a>
				</li>
				<li>
					<a target="_blank" href="https://www.linkedin.com/in/austin-valle-9773496a/" className="io-icon" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedinIn} />
					</a>
				</li>
				<li>
					<a target="_blank" href="https://twitter.com/_moosebot" className="io-icon" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</li>
				<li>
					<a target="_blank" href="https://www.youtube.com/channel/UC6G4-Xp-d-geuCGoITlCwZw?view_as=subscriber" className="io-icon" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faYoutube} />
					</a>
				</li>
				<li>
					<a href="mailto:austinvalle@gmail.com" className="io-icon" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
				</li>
			</ul>
		</nav>
	);
}
