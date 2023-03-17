import axios from 'axios';

const getAllMeals = (setMeal)=>{
    axios.get("https://meal-planner-2.onrender.com")
    .then (({data})=>{console.log (data)
        setMeal(data)
    })
}

const addMeal = (name,setName,setMeal)=>{
    axios.post('https://meal-planner-2.onrender.com/saveMeals', {name})
    .then((data)=>{
        console.log(data);
        setName("");
        getAllMeals(setMeal);
    })
}

const editMeal = (mealId, name,setName,setMeal, setEditing)=>{
    axios.post('https://meal-planner-2.onrender.com/editMeal', {_id:mealId, name})
    .then((data)=>{
        console.log(data);
        setName("");
        setEditing(false);
        getAllMeals(setMeal);
    })
}

const deleteMeal = (_id,setMeal)=>{
    axios.post('https://meal-planner-2.onrender.com/deleteMeal', {_id})
    .then((data)=>{
        console.log(data);
        getAllMeals(setMeal);
    })
}

export {getAllMeals, addMeal, editMeal, deleteMeal};
