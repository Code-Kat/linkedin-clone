import React from 'react';
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) =>{
        return(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon className="widgets__dot"/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        )
    }

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
        {newsArticle("Bonuses from Everyone", "Top news - 9999 readers")}
        {newsArticle("The future of travel", "Top news - 5670 readers")}
        {newsArticle("Best Ways to Invest Todays", "Finance - 2450 readers")}
        {newsArticle("Best Up and Coming Web Devs", "Code - 535 readers")}
        {newsArticle("Covid World Updtate", "World - 1235 readers")}
        {newsArticle("Vaccine Updates", "World - 1456 readers")}
        {newsArticle("Tesla Aiming for the Stars", "Tech - 987 readers")}
        </div>
        
    )
}

export default Widgets
