import React from "react";
import { OurCreation } from "../../data/ourcreationdata";



export const OurCreationList = () => {

    return (
        <>
            <div className="creation-header">
                <p className="creation-header__title">Our Creations</p>
                <button className="creation-header__btn">See All</button>
            </div>

        <div className="creation-list">
            {OurCreation.map(creation => (
                <div className="creation-list__img-box">
                    <img alt='creation pics' className="creation-list__img-box--img" src={creation.img} />
                    <p className="creation-list__img-box--title">{ creation.name}</p>
                </div>
            ))}
            </div>
        </>
    )
}