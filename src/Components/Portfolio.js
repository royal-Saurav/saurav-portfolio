import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/royal-Saurav/covid-19-tracker-react" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/10.png" alt="covid-19 Tracker" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Covid-19 Tracker WebApp</h3>
                      <p>Covid-19 T101racker is created using React JS. This tracker aims to show the numbers & trends of people Infected, Recovered, Active and Deaths due to COVID-19.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://royal-saurav.github.io/covid-19-tracker-react/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/royal-Saurav/covid-19-tracker-react" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-git-plain-wordmark colored technology"></i>
                        <i className="devicon-css3-plain-wordmark colored technology"></i>
                        <i className="devicon-html5-plain-wordmark colored technology"></i>                       
                        <i className="devicon-javascript-plain colored technology"></i>
                        <i className="devicon-github-original technology"></i>
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://myewards.com/" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/11.png" alt="eWards" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>eWards</h3>
                      <p> It is a Online Website. The main feature of this website is: Client can give rewards, loyalty bonus, booklets, coupon, promos to his users. Can be make segments for analyzing who is active users. Manage Clients outlets in different citites . SMS Integration for Clients and their controls. Clients, outlets, admin and Users control panel. </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://myewards.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-php-plain technology"></i>
                        <i className="devicon-laravel-plain-wordmark colored technology"></i>
                        <i className="devicon-bootstrap-plain-wordmark technology"></i>
                        <i className="devicon-css3-plain-wordmark colored technology"></i>
                        <i className="devicon-html5-plain-wordmark colored technology"></i>
                        <i className="devicon-javascript-plain colored technology"></i>
                        <i className="devicon-mysql-plain-wordmark colored technology"></i>
                        <i className="devicon-git-plain-wordmark colored technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <ul className="actions">
                <li className="wide-button"><a href="https://github.com/royal-saurav" className="button portfolio-button" target="_blank" rel="noopener noreferrer">Full Portfolio</a></li>
              </ul>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
