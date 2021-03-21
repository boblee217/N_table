export interface INutritionInfo{
    calories: number;
    carb: number;
    fat: number;
    protein: number;
}

export interface INutritionCellProps{
    id:number;
    preSelect: boolean;
    name: string;
    key: number;
    nutritionInfo:INutritionInfo;
    setSelected:([]:any)=>void;
}