import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilterCategory } from "../api";

import { Preloader } from "../components/preloader";
import { MealList } from "../components/mealList";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getFilterCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className="btn" onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    )
}



export { Category };