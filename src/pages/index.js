import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import portfolioImage from "../images/portfolio.jpg"

import "./index.css"

export default function Home() {
	return (
		<Layout>
			<div className="io-container">
				<div className="io-home-grid">
					<div className="io-home-picture">
						<img className="io-home-img" src={portfolioImage} alt="" />
					</div>
					<div className="io-home-intro">
						<h2>Hey! I'm Austin...</h2>
						<p>
							I'm a full-stack developer currently working at Progressive Insurance.
							In my current role, I work on a team supporting <Link className="io-fao-link" to="https://www.foragentsonly.com">https://www.foragentsonly.com</Link> for the Agent Services platform.
						</p>
						<p>
							In my free time, I am passionate about learning new programming languages, frameworks, and emerging
							technologies. My attention is currently set on Go, Serverless architectures, and React.
                        </p>
						<p>
							I'm always looking for new projects to contribute to, so shoot me a <a className="io-link" href="mailto:austinvalle@gmail.com" rel="noopener noreferrer">message</a>!
                        </p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
