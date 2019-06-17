//All recipe requests should be made to the recipe details API URL.
//https://www.food2fork.com/api/get
import axios from "axios";

async function getResults(query) {
  const key = "c95ec2732694b0f175af57e57b59ded9";
  try {
    const res = await axios(
      `https://www.food2fork.com/api/search?key=${key}&q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}
getResults("tomato pasta");
