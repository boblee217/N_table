import React, {useEffect} from 'react';
import { INutritionCellProps } from "./Types";

export const NutritionCell = ({id,name, nutritionInfo,setSelected,preSelect}:INutritionCellProps)=> {

  return (
    <tr>
        <td className="span1 text-center">
            <input checked={preSelect} type="checkbox" value={id} onChange={(e)=>setSelected(e)} data-testid={`check-${id}`} id={`check-${id}`} name="checkbox3-1" />
        </td>
        <td className="span1 text-center">{name}</td>
        <td>
            {nutritionInfo.calories}
        </td>
        <td className="hidden-phone">{nutritionInfo.fat}</td>
        <td className="hidden-phone">{nutritionInfo.carb}</td>
        <td className="hidden-phone">{nutritionInfo.protein}</td>
    </tr>
  );
}